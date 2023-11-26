const form = document.getElementById("registration-form");
const fullNameInput = document.getElementById("full-name");
const emailInput = document.getElementById("email");
const commentInput = document.getElementById("comment");

fullNameInput.addEventListener("input", () => {
  const fullName = fullNameInput.value;
  const isValid = /^[a-zA-Z\s]{5,}$/.test(fullName);
  updateValidationStatus(fullNameInput, isValid);
});

emailInput.addEventListener("input", () => {
  const email = emailInput.value;
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  updateValidationStatus(emailInput, isValid);
});

commentInput.addEventListener("input", () => {
  const comment = commentInput.value;
  const isValid = comment.length > 10 ? true : false; 
  updateValidationStatus(commentInput, isValid);
});

form.addEventListener("submit", function (event) {
  if (!validateForm()) {
    event.preventDefault();
  }
});

function validateForm() {
  if (fullNameInput.classList.contains("valid") && emailInput.classList.contains("valid") && commentInput.classList.contains("valid")) {
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
