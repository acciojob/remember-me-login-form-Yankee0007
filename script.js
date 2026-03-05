const form = document.querySelector("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// show existing button if saved
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

// login existing user
existingBtn.addEventListener("click", function() {
  const user = localStorage.getItem("username");
  alert(`Logged in as ${user}`);
});