const row1 = document.getElementById("row1");
const row2 = document.querySelector("p"); // document.all is deprecated method so I use querySelector instead
const row3 = document.getElementById("row3");

row1.style.color = "black";
row1.style.backgroundColor = "yellow";
row2.style.color = "red";
row2.style.backgroundColor = "white";
row3.style.color = "black";
row3.style.backgroundColor = "yellow";

row1.addEventListener("click", () => {
  changeColorsCase1(row1);
});

row2.addEventListener("click", () => {
  changeColorsCase2(row2);
});

row3.addEventListener("click", () => {
  changeColorsCase1(row3);
});

function changeColorsCase1(element) {
  const { color, backgroundColor } = element.style;
  element.style.color = color === "black" ? "white" : "black";
  element.style.backgroundColor =
    backgroundColor === "yellow" ? "blue" : "yellow";
}

function changeColorsCase2(element) {
  const { color, backgroundColor } = element.style;
  element.style.color = color === "red" ? "white" : "red";
  element.style.backgroundColor =
    backgroundColor === "white" ? "green" : "white";
}

const imgTitle = document.getElementById("image-title");
const img = document.getElementById("img");

const SMALL_IMG_SIZE = 300;
const INCREASED_IMG_SIZE = 430;

changeImgSize(img, SMALL_IMG_SIZE)

let isImgIncreased = false;

imgTitle.addEventListener("click", () => {
  if (!isImgIncreased) {
    changeImgSize(img, INCREASED_IMG_SIZE);
    imgTitle.style.color = getRandomColor();
  } else {
    changeImgSize(img, SMALL_IMG_SIZE);
    imgTitle.style.color = "black";
  }

  isImgIncreased = !isImgIncreased;
});

function changeImgSize(imgEl, size) {
  imgEl.style.height = size + "px";
  imgEl.style.height = size + "px";
}

function getRandomColor() {
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  return `rgb(${r},${g},${b})`;
}

function randomBetween(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}
