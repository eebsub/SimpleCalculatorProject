let calculation = "";

function appendValue(value) {
  calculation += value;
  document.querySelector(".result").innerHTML = calculation;
}

function clearCalculation() {
  calculation = "";
  document.querySelector(".result").innerHTML = 0;
}


