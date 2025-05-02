let inputField = document.getElementById("input-field");
let acBtn = document.getElementById("ac-btn");
let delBtn = document.getElementById("del-btn");

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
