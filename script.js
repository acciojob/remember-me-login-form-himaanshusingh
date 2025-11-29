const name = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

submitBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  alert(`Logged in as ${name.value}`);
  const userData = { name: name.value, password: password.value };
  if (checkbox.checked) {
    localStorage.setItem("user", JSON.stringify(userData));
    existingBtn.classList.remove("hidden");
  } else {
    localStorage.clear();
    existingBtn.classList.add("hidden");
  }
});

existingBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  alert(`Logged in as ${name.value}`);
});