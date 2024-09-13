import { loginUser } from './api.js';
import { createLoader } from './loader.js';

export const handleFormUI = async (userLogin, userPassword) => {
  const authForm = document.getElementById("form");
  const errorMessage = document.createElement("p");
  errorMessage.classList.add("form__error-message");
  const authContainer = document.querySelector(".auth__content");
  const submitBtn = authForm.querySelector(".form__submit");
  const loader = createLoader();
  
  submitBtn.disabled = true;
  submitBtn.textContent = "";
  submitBtn.appendChild(loader);

  const data = await loginUser(userLogin, userPassword);

  submitBtn.disabled = false;
  submitBtn.textContent = "Войти";
  loader.remove();

  if (data?.token) {
    authForm.reset();
    authContainer.innerHTML = `<p class="auth__success">${data.user.name}, Вы успешно авторизованы!</p>`;
    return;
  };

  authForm.classList.add("form__error");
  errorMessage.textContent = `${data.errorMessage}`;
  authForm.insertBefore(errorMessage, authForm.lastElementChild);
};
