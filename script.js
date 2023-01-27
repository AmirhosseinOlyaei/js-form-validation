// use-case 1:
// @TODO: How do we solve the problem
// .... differently if the form was empty
// ...and we want to show an error message

const accountFormElement = document.getElementById("account-form");
const fullNameElement = document.getElementById("full-name");
const messageElement = document.getElementById("msg");
const emailElement = document.getElementById("email");
const emailMessageElement = document.getElementById("msg-email");

accountFormElement.addEventListener("submit", function (event) {
  event.preventDefault();
  const fullName = String(fullNameElement.value);
  const emailValue = String(emailElement.value);

  if (fullName === "") {
    messageElement.classList.add("bg-red-300");
    messageElement.innerHTML = `<p>Error message: Name field is empty!</p>`;
  } else if (fullName.length <= 3) {
    messageElement.innerHTML = `<p>Error message: Name is less than 3 character.</p>`;
  } else {
    messageElement.innerHTML = `<p>Name: ${fullName}</p>`;
  }

  if (emailValue.indexOf("@") === -1) {
    emailMessageElement.innerHTML = `<p>${emailValue}</p>`;
    console.log("Email input does not contains @");
  } else {
    console.log("Email input contains @");
    emailMessageElement.innerHTML = `<p>${emailValue}</p>`;
  }
});

// use-case 2: @TODO: Add a form field that accepts a form
// ...and if the input doesn't contain an "@"
// ...show an error message
