window.addEventListener("load", main);
function main() {
  let btn = document.getElementById("butt");

  btn.addEventListener("click", change);

  function change() {
    let randomColor = getRandomColor();
    document.getElementById("all").style.backgroundColor = randomColor;
    document.getElementById("info").innerHTML =
      "Background Color: " + randomColor;
  }
  function getRandomColor() {
    var letter = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
