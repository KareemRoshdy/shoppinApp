// DECELERATION ELEMENTS
let user_name = document.getElementById("username");
let user_password = document.getElementById("pass");
let login_btn = document.getElementById("login_btn");

// GET DATA FROM LOCAL STORAGE
let get_user_name = localStorage.username;
let get_user_password = localStorage.password;


login_btn.addEventListener("click", login);
// LOGIN FUNCTION
function login(e) {
  e.preventDefault();
  if (
    user_name.value == get_user_name &&
    user_password.value == get_user_password
  ) {
    setTimeout(() => {
      window.location = "index.html";
    }, 1000);
  } else if (user_name.value == "" || user_password.value == "") {
    alert("Please Fill The Data!");
  } else {
    alert("Your Email Or Password Is Wrong!");
  }
}
