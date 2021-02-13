const subjectSelect = document.getElementById("subject");
const materialSelect = document.getElementById("material");
const countInput = document.getElementById("count");
const form = document.getElementById("form");

function submitForm() {
  const missingFields = [];
  if (!subjectSelect.value) {
    missingFields.push("виріб");
  }

  if (!materialSelect.value) {
    missingFields.push("матеріал");
  }

  if (!countInput.value) {
    missingFields.push("кількість замовлених виробів");
  }

  if (missingFields.length) {
    alert(`Введіть: \n ${missingFields.join("\n")}`);
  } else {
    form.action = "second-page.php";
  }
}

const degreeInput = document.getElementById("degree-input");
const funcInput = document.getElementById("func-input");
const resultField = document.getElementById("result");

function calc() {
  if (!degreeInput.value) {
    return alert("Куд в градусах обов'язковий до заповнення");
  }
  if (degreeInput.value > 90 || degreeInput.value < 0) {
    return alert("Куд в градусах обов'язковий повинен бути меншим 90 та більшим 0 градусів");
  }
  if (!funcInput.value) {
    return alert("Функція обов'язкова до заповнення");
  }
  const calcString = `Math.${funcInput.value}(${degreesToRadians(
    degreeInput.value
  )})`;
  resultField.innerHTML = `${funcInput.value}(${degreeInput.value}) = ${eval(
    calcString
  )}`;
}

function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}
