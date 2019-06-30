var loginLink = document.querySelector(".login-link");

var loginPopup = document.querySelector(".modal-login");

var loginForm = popup.querySelector("form");
var loginLogin = popup.querySelector("[name=login]");
var loginPassword = popup.querySelector("[name=password]");

var isStorageSupport = true;
var storage = "";



try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

loginLink.addEventListener("mouseover", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");

  if (storage) {
    loginLogin.value = storage;
    loginPassword.focus();
  } else {
    loginLogin.focus();
  }
});

loginForm.addEventListener("submit", function (evt) {
  if (!loginLogin.value || !loginPassword.value) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", loginLogin.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (loginPopup.classList.contains("modal-show")) {
      loginPopup.classList.remove("modal-show");
      loginPopup.classList.remove("modal-error");
    }
  }
});

