//your JS code here. If required.
const submit = document.querySelector("#submit");
const checkbox = document.querySelector("#checkbox");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

// FIX: The checkbox logic is now independent and works correctly.
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (checkbox.checked) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    console.log("Credentials saved.");
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    console.log("Credentials not saved.");
  }
  alert(`Logged in as ${username}`);
});

const existing = document.getElementById("existing");
existing.addEventListener("click", function () {
  alert(`Logged in as ${localStorage.getItem("username")}`);
});
