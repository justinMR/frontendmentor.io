const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", e => {
  e.preventDefault();
  console.log("test");
  checkInputs();
});

const checkInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  //=========First Name check
  if (firstNameValue === "") {
    setErrorFor(firstName, "First Name cannot be empty");
  } else {
    setSuccessFor(firstName);
  }

  //==========Last Name check
  if (lastNameValue === "") {
    //show error
    //add error class
    setErrorFor(lastName, "Last Name cannot be empty");
  } else {
    setSuccessFor(lastName);
  }

  //==========Email check
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  //==========Password check
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be empty");
  } else {
    setSuccessFor(password);
  }
};

const setErrorFor = (input, message) => {
  input.classList.add("form-error");
  input.parentElement.setAttribute("form-error-message", message);
  input.parentElement.classList.add("error-box");

  if (input.classList.contains("form-success")) {
    input.classList.remove("form-success");
  }
};

const setSuccessFor = input => {
  if (input.classList.contains("form-error")) {
    input.classList.remove("form-error");
    input.parentElement.removeAttribute("form-error-message");
    input.parentElement.classList.remove("error-box");
    input.classList.add("form-success");
  } else {
    input.classList.add("form-success");
  }
};

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
