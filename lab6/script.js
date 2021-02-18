const VARIANT = 9;
const TABLE_SIZE = 6;

const form = document.getElementById("form");
const fullNameInput = document.getElementById("fullName");
const groupInput = document.getElementById("group");
const variantInput = document.getElementById("variant");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const modal = document.getElementById("myModal");
const modalContentEl = document.getElementsByClassName(
  "modal-content__info"
)[0];
const closeBtn = document.getElementsByClassName("close")[0];

form.onchange = submit;

function submit(e) {
  e.preventDefault();

  validateFormValues();

  const modalContent = getModalContent({
    fullName: fullNameInput.value,
    group: groupInput.value,
    variant: variantInput.value,
    phone: phoneInput.value,
    email: emailInput.value,
  });

  modalContentEl.insertAdjacentHTML("afterbegin", modalContent);

  modal.style.display = "block";

  fullNameInput.value = "";
  groupInput.value = "";
  variantInput.value = "";
  phoneInput.value = "";
  emailInput.value = "";
}

function validateFormValues() {
  let isValid = true;

  for (const input of [
    fullNameInput,
    groupInput,
    variantInput,
    phoneInput,
    emailInput,
  ]) {
    const isInputEmpty = !input.value;
    if (isInputEmpty) {
      isValid = false;
      input.classList.add("invalid");
    } else {
      if (input.classList.contains("invalid")) {
        input.classList.remove("invalid");
      }
    }
  }

  if (!isValid) {
    alert("Please fix input errors");
    throw new Error("Please fix input errors");
  }
}

function getModalContent({ fullName, group, variant, phone, email }) {
  return `
  <div>
    <p>Full name: ${fullName}</p>
    <p>Group: ${group}</p>
    <p>Variant: ${variant}</p>
    <p>Phone: ${phone}</p>
    <p>Email: ${email}</p>
  </div>
  `;
}

function closeModal() {
  modal.style.display = "none";

  modalContentEl.innerHTML = "";
}

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

const task2El = document.querySelector(".task2");

task2El.insertAdjacentHTML("afterbegin", createTableContent());

function createTableContent() {
  return `
  <div class="task2__table">
    ${Array(TABLE_SIZE ** 2)
      .fill(0)
      .map((_, index) => {
        if (index === VARIANT) {
          return `<div id="myCell"></div>`;
        }
        return `<div id="${index}"></div>`;
      })
      .join("")}
  </div>
  `;
}

const myCell = document.getElementById("myCell");

myCell.onmouseover = () => {
  const randomColor = getRandomColor();
  myCell.style.backgroundColor = randomColor;

  let currentIndexInColumn = VARIANT + 2 * TABLE_SIZE;
  while (currentIndexInColumn < TABLE_SIZE ** 2) {
    const columnEl = document.getElementById(currentIndexInColumn);
    console.log(columnEl);
    columnEl.style.backgroundColor = randomColor;

    currentIndexInColumn += 2 * TABLE_SIZE;
  }
};

myCell.onclick = () => {
  myCell.style.backgroundColor = "#342643";
};

function getRandomColor() {
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  return `rgb(${r},${g},${b})`;
}

function randomBetween(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}
