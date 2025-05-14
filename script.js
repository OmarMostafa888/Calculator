let inputField = document.getElementById("input-field");
let acBtn = document.getElementById("ac-btn");
let delBtn = document.getElementById("del-btn");
let btns = document.querySelectorAll(".clickable");
const euqalBtn = document.getElementById("equal-btn");

btns.forEach((e) => {
  e.addEventListener("click", () => {
    if (inputField.innerHTML === "0") {
      inputField.innerHTML = "";
    }
    inputField.innerHTML += e.innerHTML;
  });
});

function equal(e) {
  inputField.innerHTML = eval(inputField.innerHTML);
}

euqalBtn.addEventListener("click", equal);

function deleteAll() {
  inputField.innerHTML = "0";
}

acBtn.addEventListener("click", deleteAll);

function del() {
  let newInputField = inputField.innerHTML;
  newInputField = newInputField.split("");
  newInputField.pop();
  newInputField = newInputField.join("");
  inputField.innerHTML = newInputField;
  if (inputField.innerHTML === "") {
    inputField.innerHTML = "0";
  }
}

delBtn.addEventListener("click", del);
