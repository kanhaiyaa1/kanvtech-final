/*
 * Shared "Get in Touch" modal. Any element with [data-kv-contact-open]
 * opens it instead of following a mailto: link directly (mailto links
 * don't open cleanly for every user's default mail client). Any element
 * with [data-kv-contact-close] (backdrop, close button) closes it.
 */
(function () {
    "use strict";

    function getModal() {
        return document.getElementById("kv-contact-modal");
    }

    function openModal() {
        var modal = getModal();
        if (!modal) return;
        modal.classList.remove("hidden");
        modal.classList.add("flex");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        var modal = getModal();
        if (!modal) return;
        modal.classList.add("hidden");
        modal.classList.remove("flex");
        document.body.style.overflow = "";
    }

    document.addEventListener("click", function (e) {
        if (e.target.closest("[data-kv-contact-open]")) {
            e.preventDefault();
            openModal();
        } else if (e.target.closest("[data-kv-contact-close]")) {
            e.preventDefault();
            closeModal();
        }
    });

    document.addEventListener("keydown", function (e) {
        var modal = getModal();
        if (e.key === "Escape" && modal && !modal.classList.contains("hidden")) {
            closeModal();
        }
    });
})();
