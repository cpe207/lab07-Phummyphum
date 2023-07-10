const firstNameInput = document.querySelector("#first-name-input");
const LastNameInput = document.querySelector("#last-name-input");
const EmailInput = document.querySelector("#email-input");
const PasswordInput = document.querySelector("#password-input");
const submitBtn = document.querySelector("#submit-btn");
//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}
//ทำonkeyup
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};
LastNameInput.onkeyup = () => {
  LastNameInput.classList.remove("is-valid");
  LastNameInput.classList.remove("is-invalid");
};
EmailInput.onkeyup = () => {
  EmailInput.classList.remove("is-valid");
  EmailInput.classList.remove("is-invalid");
};
PasswordInput.onkeyup = () => {
  PasswordInput.classList.remove("is-valid");
  PasswordInput.classList.remove("is-invalid");
};

submitBtn.onclick = () => {
  //เช็คชื่อ
  let isFirstNameOk = false;
  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }
  //เช็คนามสกุล
  let isLastNameOk = false;
  if (LastNameInput.value === "") {
    LastNameInput.classList.add("is-invalid");
  } else {
    LastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }
  //เช็คพาสเวิร์ด
  let isPasswordOk = false;
  if (PasswordInput.value.length <= 5) {
    PasswordInput.classList.add("is-invalid");
  } else {
    PasswordInput.classList.add("is-valid");
    isPasswordOk = true;
  }
  //เช็คอีเมล
  let isEmailOk = false;
  if (EmailInput.value === "") {
    EmailInput.classList.add("is-invalid");
  } else if (!validateEmail(EmailInput.value)) {
    EmailInput.classList.add("is-invalid");
  } else {
    EmailInput.classList.add("is-valid");
    isEmailOk = true;
  }
  //เช็คท้าย
  if (isFirstNameOk && isLastNameOk && isPasswordOk && isEmailOk) {
    alert("Registered successfully");
  }
};
