let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");


btn.onclick = function() {
    sidebar.classList.toggle("activate");
}
searchBtn.onclick = function() {
    sidebar.classList.toggle("activate");
}
