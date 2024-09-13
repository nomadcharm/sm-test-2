import { handleFormUI } from "./handleFormUI.js";

export const handleFormSubmit = async (e) => {
  e.preventDefault();
  
  const login = document.getElementById("login");
  const password = document.getElementById("password");
  const userLogin = login.value.trim();
  const userPassword = password.value.trim();

  await handleFormUI(userLogin, userPassword);
};
