import {removeErrorMessage} from "./removeErrorMessage.js";
import { handleFormSubmit } from "./handleFormSubmit.js";

const authForm = document.getElementById("form");
const authFormInputs = document.querySelectorAll(".form__input");

authForm.addEventListener("submit", handleFormSubmit);
authFormInputs.forEach(input => input.addEventListener("input", removeErrorMessage));
