window.addEventListener("load", main);

function main() {
  var i = 2;
  document.getElementById("info1").style.visibility = "visible";
  document.getElementById("first").addEventListener("click", nazad);
  document.getElementById("second").addEventListener("click", napred);
  document.getElementById("rand").addEventListener("click", rand);
  function napred() {
    console.log("3");
    if (i == 1) {
      document.getElementById("info1").style.visibility = "visible";
      document.getElementById("info2").style.visibility = "hidden";
      document.getElementById("info3").style.visibility = "hidden";
      document.getElementById("info4").style.visibility = "hidden";
    } else if (i == 2) {
      document.getElementById("info1").style.visibility = "hidden";
      document.getElementById("info2").style.visibility = "visible";
      document.getElementById("info3").style.visibility = "hidden";
      document.getElementById("info4").style.visibility = "hidden";
    } else if (i == 3) {
      document.getElementById("info1").style.visibility = "hidden";
      document.getElementById("info2").style.visibility = "hidden";
      document.getElementById("info3").style.visibility = "visible";
      document.getElementById("info4").style.visibility = "hidden";
    } else if (i == 4) {
      document.getElementById("info1").style.visibility = "hidden";
      document.getElementById("info2").style.visibility = "hidden";
      document.getElementById("info3").style.visibility = "hidden";
      document.getElementById("info4").style.visibility = "visible";
      i = 0;
    }
    i += 1;
  }
  function nazad() {
    if (document.getElementById("info1").style.visibility == "visible") {
      document.getElementById("info1").style.visibility = "hidden";
      document.getElementById("info4").style.visibility = "visible";
    } else if (document.getElementById("info4").style.visibility == "visible") {
      document.getElementById("info4").style.visibility = "hidden";
      document.getElementById("info3").style.visibility = "visible";
    } else if (document.getElementById("info3").style.visibility == "visible") {
      document.getElementById("info2").style.visibility = "visible";
      document.getElementById("info3").style.visibility = "hidden";
    } else if (document.getElementById("info2").style.visibility == "visible") {
      document.getElementById("info1").style.visibility = "visible";
      document.getElementById("info2").style.visibility = "hidden";
    }
  }
  function rand() {
    var num = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    if (num == 1) {
      document.getElementById("info1").style.visibility = "visible";
      document.getElementById("info2").style.visibility = "hidden";
      document.getElementById("info3").style.visibility = "hidden";
      document.getElementById("info4").style.visibility = "hidden";
      i = 1;
    } else if (num == 2) {
      document.getElementById("info1").style.visibility = "hidden";
      document.getElementById("info2").style.visibility = "visible";
      document.getElementById("info3").style.visibility = "hidden";
      document.getElementById("info4").style.visibility = "hidden";
      i = 2;
    } else if (num == 3) {
      document.getElementById("info1").style.visibility = "hidden";
      document.getElementById("info2").style.visibility = "hidden";
      document.getElementById("info3").style.visibility = "visible";
      document.getElementById("info4").style.visibility = "hidden";
      i = 3;
    } else if (num == 4) {
      document.getElementById("info1").style.visibility = "hidden";
      document.getElementById("info2").style.visibility = "hidden";
      document.getElementById("info3").style.visibility = "hidden";
      document.getElementById("info4").style.visibility = "visible";
      i = 4;
    }
  }
}
