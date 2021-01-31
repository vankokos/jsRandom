
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var btn = document.createElement("button")
btn.className = "wrap__button"
btn.innerHTML = "Click to Randomize color"

btn.onclick = randomColor

var p = document.createElement("p")
p.className = "wrap__name"
document.getElementById("app").appendChild(btn)
document.getElementById("app").appendChild(p)


function randomColor() {
  var r = getRandomIntInclusive(0,255)
  var g = getRandomIntInclusive(0,255)
  var b = getRandomIntInclusive(0,255)
  var colorName = document.body.style.background = "rgb" + "("+ r +","+ g + "," + b + ")";
  var p = document.querySelector(".wrap__name")
  p.innerHTML = colorName
  if (r <= 100 && g <= 100 && b <= 100) {
    p.style.color = "white"
  } else {
    p.style.color = "#0f0f0f"
  }

}

randomColor()