const form = document.getElementById("registration-form");
const fullNameInput = document.getElementById("full-name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const dobInput = document.getElementById("dob");
const submitButton = document.getElementById("submit-button");

fullNameInput.addEventListener("input", () => {
  const fullName = fullNameInput.value;
  const isValid = /^[a-zA-Z\s]{3,}$/.test(fullName);
  updateValidationStatus(fullNameInput, isValid);
});

emailInput.addEventListener("input", () => {
  const email = emailInput.value;
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  updateValidationStatus(emailInput, isValid);
});

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  const isValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  updateValidationStatus(passwordInput, isValid);
});

confirmPasswordInput.addEventListener("input", () => {
  const confirmPassword = confirmPasswordInput.value;
  const password = passwordInput.value;
  const isValid = confirmPassword === password;
  updateValidationStatus(confirmPasswordInput, isValid);
});

dobInput.addEventListener("input", () => {
  const dob = new Date(dobInput.value);
  const today = new Date();
  const minAge = 18;
  const userAge = (today - dob) / (365.25 * 24 * 60 * 60 * 1000);
  const isValid = userAge >= minAge;
  updateValidationStatus(dobInput, isValid);
});

form.addEventListener("submit", function (event) {
  if (!validateForm()) {
    event.preventDefault();
  }
});

function validateForm() {
  // validateFullName();
  // validateEmail();
  // validatePassword();
  // validateConfirmPassword();
  // validateDOB();
  if (fullNameInput.classList.contains("valid") && emailInput.classList.contains("valid") && passwordInput.classList.contains("valid") && confirmPasswordInput.classList.contains("valid") && dobInput.classList.contains("valid")) {
    alert("Form Submitted Successfully! Thank you!");
  }
  else {
    alert("There are some Invalid Entries! Please try again.");
  }
}

function updateValidationStatus(inputElement, isValid) {
  const statusElementId = inputElement.id + "-status";
  const statusElement = document.getElementById(statusElementId);

  if (isValid) {
    inputElement.classList.add("valid");
    inputElement.classList.remove("invalid");
    statusElement.textContent = "✓";
  }
  else {
    inputElement.classList.add("invalid");
    inputElement.classList.remove("valid");
    statusElement.textContent = "✕";
  }
}
