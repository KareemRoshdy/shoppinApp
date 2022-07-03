// DECELERATION ELEMENTS
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("pass");
let signup_btn = document.getElementById("signup_btn");

signup_btn.addEventListener("click", register);
// REGISTER FUNCTION
function register(e) {
  e.preventDefault();
  if (username.value == "" || email.value == "" || password.value == "") {
    alert("You should be insert all data!");
  } else {
    localStorage.username = username.value;
    localStorage.email = email.value;
    localStorage.password = password.value;
    setTimeout(() => {
      window.location = "login.html";
    }, 1000);
  }
}
