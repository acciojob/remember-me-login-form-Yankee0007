//your JS code here. If required.
const form = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// check localStorage on page load
const savedUser = localStorage.getItem("username");
const savedPass = localStorage.getItem("password");

if (savedUser && savedPass) {
  existingBtn.style.display = "block";
}

// form submit
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const user = username.value;
  const pass = password.value;

  alert(`Logged in as ${user}`);

  if (checkbox.checked) {
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }
});

// existing user login
existingBtn.addEventListener("click", function() {
  const user = localStorage.getItem("username");
  alert(`Logged in as ${user}`);
});