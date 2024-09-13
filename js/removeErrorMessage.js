export const removeErrorMessage = () => {
  const authForm = document.getElementById("form");
  const errorMessage = document.querySelector(".form__error-message");

  if (errorMessage) {
    authForm.classList.remove("form__error");
    errorMessage.remove();
  };
};
