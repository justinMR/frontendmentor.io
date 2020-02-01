const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", e => {
  e.preventDefault();
  console.log("test");
  checkInputs();
});

const checkInputs = () => {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }
};
const setErrorFor = (input, message) => {
  input.classList.add("form-error");
  input.parentElement.setAttribute("form-error-message", message);
  input.parentElement.classList.add("form-error");

  if (input.classList.contains("form-success")) {
    input.classList.remove("form-success");
  }
};

const setSuccessFor = input => {
  if (input.classList.contains("form-error")) {
    input.classList.remove("form-error");
    input.parentElement.removeAttribute("form-error-message");
    input.parentElement.classList.remove("form-error");
    input.classList.add("form-success");
  } else {
    input.classList.remove("form-error");
  }
};

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
