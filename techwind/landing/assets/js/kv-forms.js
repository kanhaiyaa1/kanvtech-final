/*
 * Kanvtech form handler.
 * Works with any <form class="kv-ajax-form" action="YOUR_FORMINIT_ENDPOINT">.
 * - Sends the enquiry email via Forminit (https://forminit.com/), set per-form in `action`.
 * - Also logs every submission to the shared Google Sheet, via the Apps Script
 *   Web App URL below (one deployment covers every form on the site).
 * - Shows a loading state on the submit button while sending.
 * - Shows a success message on success (or reveals data-kv-success-target).
 * - Shows an inline error message on failure, without losing entered data.
 */
(function () {
    "use strict";

    // TODO: after deploying the Apps Script Web App (see the Google Sheet's
    // Extensions > Apps Script), paste its /exec URL here. One URL logs every
    // form on the site to the shared spreadsheet.
    var SHEET_LOG_URL = "https://script.google.com/macros/s/AKfycbzSzpOF8cAGSjnjHTLHNPB8dsRNsd23eJy7xUPQhPIpMmiW_20p7QbcXqRj_Omkx28QuA/exec";

    var PLACEHOLDER_MARKERS = ["PASTE_YOUR_FORMINIT_ENDPOINT_HERE", "YOUR_FORM_ID", "YOUR_FORMSPREE_ID"];
    var DEFAULT_SUCCESS = "Thank you. We have received your message and will get back to you shortly.";
    var DEFAULT_ERROR = "Something went wrong. Please try again, or contact us directly at connect@kanvtech.com.";
    var NOT_CONNECTED_ERROR = "This form is not connected yet. Please contact us directly at connect@kanvtech.com or +91 70459 98877.";

    function isPlaceholder(value) {
        if (!value) return true;
        return PLACEHOLDER_MARKERS.some(function (marker) {
            return value.indexOf(marker) !== -1;
        });
    }

    function setLoading(form, isLoading) {
        var btn = form.querySelector("[data-kv-submit]");
        if (!btn) return;
        if (isLoading) {
            if (!btn.dataset.kvOriginalHtml) btn.dataset.kvOriginalHtml = btn.innerHTML;
            btn.disabled = true;
            btn.setAttribute("aria-busy", "true");
            btn.innerHTML = '<i class="ri-loader-4-line kv-spin"></i> Sending...';
        } else {
            btn.disabled = false;
            btn.removeAttribute("aria-busy");
            if (btn.dataset.kvOriginalHtml) btn.innerHTML = btn.dataset.kvOriginalHtml;
        }
    }

    function showMessage(form, type, text) {
        var box = form.querySelector("[data-kv-message]");
        if (!box) {
            window.alert(text);
            return;
        }
        box.className = "kv-form-" + type;
        box.innerHTML = type === "success"
            ? '<i class="ri-checkbox-circle-line text-lg"></i> <span>' + text + "</span>"
            : '<i class="ri-error-warning-line text-lg"></i> <span>' + text + "</span>";
        box.style.display = "flex";
    }

    function hideMessage(form) {
        var box = form.querySelector("[data-kv-message]");
        if (box) {
            box.style.display = "none";
            box.innerHTML = "";
        }
    }

    function fieldValue(form, names) {
        for (var i = 0; i < names.length; i++) {
            var el = form.querySelector('[name="' + names[i] + '"]');
            if (el && el.value) return el.value;
        }
        return "";
    }

    // Fire-and-forget: log the enquiry to the shared Google Sheet. Runs
    // independently of the Forminit email send, and never affects the
    // on-page loading/success/error state — logging failures are silent.
    function logToSheet(form) {
        if (isPlaceholder(SHEET_LOG_URL)) return;

        var payload = new FormData();
        payload.append("timestamp", new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }));
        payload.append("page", document.title || window.location.pathname);
        payload.append("form_name", form.getAttribute("data-kv-form-name") || "");
        payload.append("name", fieldValue(form, ["fi-sender-fullName"]));
        payload.append("email", fieldValue(form, ["fi-sender-email"]));
        payload.append("phone", fieldValue(form, ["fi-text-phone"]));
        payload.append("company", fieldValue(form, ["fi-sender-company"]));
        payload.append("enquiry_type", fieldValue(form, ["fi-select-enquiryFor", "fi-text-position"]));
        payload.append("message", fieldValue(form, ["fi-text-comments", "fi-text-message"]));

        // Apps Script Web Apps don't send CORS headers, so the response can't
        // be read from here — "no-cors" still delivers the POST, we just fire
        // and move on.
        fetch(SHEET_LOG_URL, { method: "POST", mode: "no-cors", body: payload }).catch(function () {});
    }

    function handleSuccess(form) {
        var targetSel = form.getAttribute("data-kv-success-target");
        if (targetSel) {
            var target = document.querySelector(targetSel);
            form.style.display = "none";
            if (target) {
                target.hidden = false;
                target.classList.add("is-visible");
            }
        } else {
            form.reset();
            showMessage(form, "success", form.getAttribute("data-kv-success-message") || DEFAULT_SUCCESS);
        }
    }

    function handleSubmit(e) {
        var form = e.target;
        if (!form || !form.classList || !form.classList.contains("kv-ajax-form")) return;
        e.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        var action = form.getAttribute("action");
        if (isPlaceholder(action)) {
            showMessage(form, "error", NOT_CONNECTED_ERROR);
            return;
        }

        logToSheet(form);

        hideMessage(form);
        setLoading(form, true);

        fetch(action, {
            method: "POST",
            body: new FormData(form),
            headers: { Accept: "application/json" }
        })
            .then(function (response) {
                setLoading(form, false);
                if (response.ok) {
                    handleSuccess(form);
                    return;
                }
                response
                    .json()
                    .then(function (data) {
                        var msg = data && data.errors && data.errors.length
                            ? data.errors.map(function (er) { return er.message; }).join(", ")
                            : DEFAULT_ERROR;
                        showMessage(form, "error", msg);
                    })
                    .catch(function () {
                        showMessage(form, "error", DEFAULT_ERROR);
                    });
            })
            .catch(function () {
                setLoading(form, false);
                showMessage(form, "error", DEFAULT_ERROR);
            });
    }

    document.addEventListener("submit", handleSubmit, true);
})();
