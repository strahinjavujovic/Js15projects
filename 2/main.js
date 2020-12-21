window.addEventListener("load", main);
var count = 0;
function main() {
  let minus = document.getElementById("minus");
  minus.addEventListener("click", min);
  document.getElementById("res").addEventListener("click", reset);
  document.getElementById("plus").addEventListener("click", max);

  function min() {
    let counter = document.getElementById("number");
    count -= 1;
    counter.innerHTML = "" + count;
    if (count < 0) counter.style.color = "red";
    else if (count == 0) counter.style.color = "#222";
  }
  function reset() {
    let counter = document.getElementById("number");
    count = 0;
    counter.innerHTML = "" + count;
    counter.style.color = "#222";
  }
  function max() {
    let counter = document.getElementById("number");
    count += 1;
    counter.innerHTML = "" + count;
    if (count > 0) counter.style.color = "green";
    else if (count == 0) counter.style.color = "#222";
  }
}
