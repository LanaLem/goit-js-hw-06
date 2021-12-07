const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const loginEl = {
    email: email.value,
    password: password.value,
  };

  console.log(loginEl);
  event.currentTarget.reset();
}
