const screen = document.querySelector(".screen");
const select = document.querySelector("#sel");
const colorOnes = document.getElementById("myColor");
const colorTwos = document.querySelector("#colorTwo");
const topColor = document.querySelector(".topColor");
const bottomColor = document.querySelector(".bottomColor");
const ref = document.querySelector("#refresh");
const copy = document.querySelector("#copy");
const dislay = document.querySelector(".dislay");
const inp = document.querySelector(".inp");
const inp2 = document.querySelector(".inp2");
const rangeInput = document.querySelector("#rangeInput");
const setRadialP = document.querySelector(".setRadialP");
const copied = document.querySelector(".copied");
const copyTop = document.querySelector("#copy1");
const copyBottom = document.querySelector("#copy2");
const direct = document.querySelector(".direct");
const directWhen = document.querySelector(".directWhen");
//dropdown menu - showmore
const showMoreBtn = document.querySelector(".showMoreBtn");
const dropdownMenu = document.querySelector(".dropdownMenu");
const radioLinar = document.querySelector("#radioLinar");
const radioRadial = document.querySelector("#radioRadial");
const radioInpy = document.querySelector(".radioInpy");
const radioInpyTwo = document.querySelector(".radioInpyTwo");

//  LISTENER -----------------------------------------------------------------------------------
window.addEventListener("load", randomColors);
radioInpy.addEventListener("click", colorChenage());
ref.addEventListener("click", function (evt) {
  randomColors(this.value);
});
copy.addEventListener("click", handleClick);
copyTop.addEventListener("click", topClick);
copyBottom.addEventListener("click", bottomClick);

colorOnes.addEventListener("input", colorChenage);
colorTwos.addEventListener("input", colorChenage);
rangeInput.addEventListener("input", colorChenage);
radioInpy.addEventListener("input", colorChenage);
radioInpyTwo.addEventListener("input", colorChenage);
sel.addEventListener("input", colorChenage);

// MAIN FUNCTION -----------------------------------------------------------------------------------

function resetAnimation() {
  copied.classList.remove("hidden");
  setTimeout(function () {
    copied.classList.add("hidden");
  }, 2000);
}

function showOnscreen(toLeft, x, y, d) {
  dislay.innerHTML = `background: linear-gradient(${toLeft}, ${x} ${d}%, ${y});`;
  setRadialP.innerHTML = `${d}%`;
}

function showOnscreenRadial(x, y, d) {
  dislay.innerHTML = `background: radial-gradient(circle,${x} ${d}%, ${y})`;
  setRadialP.innerHTML = `${d}%`;
}
function showColors(x, y) {
  topColor.innerHTML = x;
  bottomColor.innerHTML = y;
}
function handleClick() {
  navigator.clipboard.writeText(dislay.innerHTML);
  resetAnimation();
}
function topClick() {
  navigator.clipboard.writeText(topColor.innerHTML);
  resetAnimation();
}
function bottomClick() {
  navigator.clipboard.writeText(bottomColor.innerHTML);
  resetAnimation();
}
// STYLING COLOR BYSELF ------------------------------------------------------------------------------

function colorChenage() {
  let rc1 = colorOnes.value;
  let rc2 = colorTwos.value;
  let rr = rangeInput.value;
  if (radioRadial.checked) {
    rg = "Radial";
  } else {
    rg = "Linear";
  }

  let rd = sel.value;
  randomshowScreen(rg, rd, rc1, rr, rc2);
}

// RANDOM COLOR GENERATOR-----------------------------------------------------------------------------------
function randomColors() {
  let positionArr = ["to left", "to right", "to top", "to bottom"];
  let gradientArr = ["Linear", "Radial"];
  let randomDirection = Math.floor(Math.random() * positionArr.length);
  let randomDirrectionValue = positionArr[randomDirection];
  let randomGradient = Math.floor(Math.random() * gradientArr.length);
  var ramdomGradientValue = gradientArr[randomGradient];
  let randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
  randomColor1 = `#${randomColor1}`;
  let randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
  randomColor2 = `#${randomColor2}`;
  let randomRadial = Math.floor(Math.random() * 70 + 1);
  randomshowScreen(
    ramdomGradientValue,
    randomDirrectionValue,
    randomColor1,
    randomRadial,
    randomColor2
  );
}
// SHOW RESOLUTS OF RANDOM AND SELF GENERATOR -------------------------------------------------
function randomshowScreen(rg, rd, rc1, rr, rc2) {
  setRadialP.innerHTML = `${rr}%`;
  topColor.innerHTML = `${rc1}`;
  bottomColor.innerHTML = `${rc2}`;
  rangeInput.value = rr;

  select.value = rd;
  if (rg === "Linear") {
    direct.classList.remove("hidden");
    directWhen.classList.add("hidden");
    dislay.innerHTML = `background: linear-gradient(${rd}, ${rc1} ${rr}%, ${rc2});`;
    const gradientRandom = `linear-gradient(${rd}, ${rc1} ${rr}%, ${rc2})`;
    showRadialGradient(gradientRandom, rc1, rc2);
  }
  if (rg === "Radial") {
    direct.classList.add("hidden");
    directWhen.classList.remove("hidden");
    dislay.innerHTML = `background: radial-gradient(circle, ${rc1} ${rr}%, ${rc2})`;
    const gradientRandom = `radial-gradient(circle, ${rc1} ${rr}%, ${rc2})`;
    showRadialGradient(gradientRandom, rc1, rc2);
  }
}

function showRadialGradient(gradientRandom, rc1, rc2) {
  screen.style.background = gradientRandom;
  colorOnes.value = rc1;
  colorTwos.value = rc2;
}
// Dropdown menu ----------------------------------------------------------------------------------

showMoreBtn.addEventListener("click", openList);

function openList() {
  dropdownMenu.classList.toggle("hidden");
}
