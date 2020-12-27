document.querySelector(".buttonShow").addEventListener("click", showContent);
document.querySelector(".close").addEventListener("click", removeContent);
function showContent() {
  document.querySelector(".content").style.visibility = "visible";
  document.querySelector(".content-overlay").style.visibility = "visible";
}

function removeContent() {
  document.querySelector(".content").style.visibility = "hidden";
  document.querySelector(".content-overlay").style.visibility = "hidden";
}
