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
    messageElement.innerHTML = `<p>Error message: Name is less than 3 characters.</p>`;
  } else {
    messageElement.innerHTML = `<p>Name: <b>${fullName}</b></p>`;
  }

  if (emailValue.indexOf("@") === -1) {
    console.log("Email input does not contains @");
    emailMessageElement.innerHTML = `<p>Error message: Email address input <b>${emailValue}</b> does not contains @</p>`;

  } else {
    console.log("Email input contains @");
    emailMessageElement.innerHTML = `<p>Email address input <b>${emailValue}</b> contains @</p>`;
  }
});

let demoElement = document.getElementById("demo");
demoElement.innerHTML = `<hr><small><p>List of checked messages --></p>
<p>- Error message: Name field is empty!</p>
<p>- Error message: Name is less than 3 characters.</p>
<p>- Name: <b>full-name</b></p>
<p>- Error message: Email address input <b>email</b> does not contains '@'</p>
<p>- Email address input <b>email</b> contains @</p></small>
`;

// use-case 2: @TODO: Add a form field that accepts a form
// ...and if the input doesn't contain an "@"
// ...show an error message
