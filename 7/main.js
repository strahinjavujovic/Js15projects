document.querySelector(".fButton").addEventListener("click", afShow);
var i = 2;
function afShow() {
  if (i % 2 == 0) {
    document.querySelector(".sButton").style.pointerEvents = "none";
    document.querySelector(".tButton").style.pointerEvents = "none";
    document.getElementById("ff").className = "fa fa-minus-square";
    var parag = document.createElement("p");
    parag.innerText =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.";
    document.querySelector(".firstQ").style.height = "185px";
    parag.style.marginTop = "15px";
    parag.style.color = "#617d98";
    parag.style.fontSize = "20px";
    parag.style.fontFamily = "Open Sans, sans-serif ";
    parag.style.letterSpacing = "3px";
    parag.style.borderTop = " 1px solid #617d98";
    parag.style.paddingTop = "20px";
    document.querySelector(".sButton").style.top = "257px";
    document.querySelector(".tButton").style.top = "362px";
    document.querySelector(".fQ").appendChild(parag);
    parag.setAttribute("class", "fs");
    i++;
  } else if (i % 2 != 0) {
    document.getElementById("ff").className = "fa fa-plus-square";
    document.querySelector(".sButton").style.pointerEvents = "";
    document.querySelector(".tButton").style.pointerEvents = "";
    document.querySelector(".sButton").style.top = "120px";
    document.querySelector(".tButton").style.top = "225px";
    document.querySelector(".fs").remove();
    document.querySelector(".firstQ").style.height = "48px";
    i++;
  }
}
///////////////
document.querySelector(".sButton").addEventListener("click", asShow);
var b = 2;
function asShow() {
  if (b % 2 == 0) {
    document.getElementById("ss").className = "fa fa-minus-square";
    document.querySelector(".fButton").style.pointerEvents = "none";
    document.querySelector(".tButton").style.pointerEvents = "none";
    var parag = document.createElement("p");
    parag.innerText =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.";
    document.querySelector(".secondQ").style.height = "185px";
    parag.style.marginTop = "15px";
    parag.style.color = "#617d98";
    parag.style.fontSize = "20px";
    parag.style.fontFamily = "Open Sans, sans-serif ";
    parag.style.letterSpacing = "3px";
    parag.style.borderTop = " 1px solid #617d98";
    parag.style.paddingTop = "20px";
    document.querySelector(".tButton").style.top = "362px";
    document.querySelector(".sQ").appendChild(parag);
    parag.setAttribute("class", "ss");
    b++;
  } else if (b % 2 != 0) {
    document.getElementById("ss").className = "fa fa-plus-square";
    document.querySelector(".fButton").style.pointerEvents = "";
    document.querySelector(".tButton").style.pointerEvents = "";
    document.querySelector(".tButton").style.top = "225px";
    document.querySelector(".ss").remove();
    document.querySelector(".secondQ").style.height = "48px";
    b++;
  }
}
///////////////
document.querySelector(".tButton").addEventListener("click", atShow);
var c = 2;
function atShow() {
  if (c % 2 == 0) {
    document.getElementById("tt").className = "fa fa-minus-square";
    document.querySelector(".sButton").style.pointerEvents = "none";
    document.querySelector(".fButton").style.pointerEvents = "none";
    var parag = document.createElement("p");
    parag.innerText =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.";
    document.querySelector(".thirdQ").style.height = "185px";
    parag.style.marginTop = "15px";
    parag.style.color = "#617d98";
    parag.style.fontSize = "20px";
    parag.style.fontFamily = "Open Sans, sans-serif ";
    parag.style.letterSpacing = "3px";
    parag.style.borderTop = " 1px solid #617d98";
    parag.style.paddingTop = "20px";
    document.querySelector(".tQ").appendChild(parag);
    parag.setAttribute("class", "ts");
    c++;
  } else if (c % 2 != 0) {
    document.getElementById("tt").className = "fa fa-plus-square";
    document.querySelector(".sButton").style.pointerEvents = "";
    document.querySelector(".fButton").style.pointerEvents = "";
    document.querySelector(".ts").remove();
    document.querySelector(".thirdQ").style.height = "48px";
    c++;
  }
}
