    var link = document.querySelector(".feedback-link");

    var popup = document.querySelector(".modal-feedback");
    var close = document.querySelector(".modal-close");
    var closeOverlay = document.querySelector(".modal-overlay");
    var overlay = document.querySelector(".modal-overlay");

    var loginForm = popup.querySelector("form");
    var login = document.getElementById("email");

    
    var isStorageSupport = true;
    var storage = "";

    try {
        storage = localStorage.getItem("login");
      } catch (err) {
        isStorageSupport = false;
      }

    link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-content-show");
        popup.classList.add("show-animation");
        overlay.classList.add("modal-overlay-show");
        if (storage) {
            login.value = storage;
            password.focus();
          } else {
            login.focus();
          }
    });
    close.addEventListener('click', function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-error");
        closeOverlay.classList.remove("modal-overlay-show");
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
    
    loginForm.addEventListener("submit", function(event) {
        if (!login.value || !password.value) {
            event.preventDefault();
            popup.classList.add("modal-error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("modal-error");
        }
        else {
            if (isStorageSupport) {
              localStorage.setItem("login", login.value);
            }
          }
    });

