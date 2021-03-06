    var link = document.querySelector(".feedback-link");

    var popup = document.querySelector(".modal-feedback");
    var close = document.querySelector(".modal-close");
    var closeOverlay = document.querySelector(".modal-overlay");
    var overlay = document.querySelector(".modal-overlay");

    var FeedbackForm = popup.querySelector("form");
    var elName = popup.querySelector(".feedback-name");
    var elEmail = popup.querySelector(".feedback-email");
    var elMessage = popup.querySelector(".feedback-message");
    
    var isStorageSupport = true;
    var storage = "";

    try {
        storage["name"] = localStorage.getItem("name");
        storage["email"] = localStorage.getItem("email");
    } catch (err) {
        isStorageSupport = false;
    }

    link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-content-show");
        popup.classList.add("show-animation");
        overlay.classList.add("modal-overlay-show");
        emptyFields();

        if (storage) {
            elName.value = storage["name"];
            elEmail.value = storage["email"];
            elMessage.focus();
        } else {
            elName.focus();
        }
    });
    close.addEventListener('click', function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
        closeOverlay.classList.remove("modal-overlay-show");
        popup.classList.remove("modal-error"); 
    });
    overlay.addEventListener("click", function(event) {
        event.preventDefault();
        overlay.classList.remove("modal-content-show");
        popup.classList.remove("modal-error"); 
    });
    closeOverlay.addEventListener("click", function(event) {
        event.preventDefault();
        closeOverlay.classList.remove("modal-overlay-show");
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-error");
    });
    document.addEventListener("keydown", function (evt) {
        if (evt.key === "Escape") {
            if (popup.classList.contains("modal-content-show")) {
                popup.classList.remove("modal-content-show");
                popup.classList.remove("modal-error");
                overlay.classList.remove("modal-overlay-show");
            }
        }
    });
    FeedbackForm.addEventListener("submit", function(event) {
        if (!elName.value || !elEmail.value || !elMessage.value) {
            event.preventDefault();
            popup.classList.remove("modal-error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("modal-error");
            if (!elName)
            elName.focus();
        if (!elEmail)
            elEmail.focus();
        if (!elMessage)
            elMessage.focus();
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", elName.value);
            localStorage.setItem("email", elEmail.value);
        }
    }
});
let emptyFields = function() {
    elName.value = "";
    elEmail.value = "";
    elMessage.value = "";
};
