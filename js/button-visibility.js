document.querySelectorAll(".password-button").forEach((button) => {
  button.addEventListener("click", function () {
    const passwordInput = this.previousElementSibling;

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      this.src = "images/img-icons/btn-visibility-on.png";
    } else {
      passwordInput.type = "password";
      this.src = "images/img-icons/btn-visibility-off.png";
    }
  });
});
