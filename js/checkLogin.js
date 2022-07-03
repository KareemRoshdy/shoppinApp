let user_info = document.getElementById("user_info");
let menu_links = document.getElementById("menu_links");
let user_dom = document.getElementById("user");

let username = localStorage.username;
if (username) {
  menu_links.style.display = "none";
  user_info.style.display = "flex";
  user_dom.innerHTML = username;
}
