//your JS code here. If required.
const submit = document.querySelector("#submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  alert(`Logged in as ${username}`);
  const checkbox = document.querySelector("#checkbox");
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      console.log("checked");
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      console.log("Not checked");
    }
  });
});
const existing = document.getElementById("existing");
existing.addEventListener("click", function () {
  alert(`Logged in as ${localStorage.getItem("username")}`);
});