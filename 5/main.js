let btn = document.getElementById("click");
let showBar = document.querySelector(".sidebar");
let showSide = document.querySelector(".show-sidebar");
let closeBtn = document.querySelector(".btnRot");
closeBtn.addEventListener("click", close);
btn.addEventListener("click", show);

function show() {
    showBar.classList.toggle("show-sidebar");
}
function close() {
    showBar.classList.toggle("show-sidebar");
}
