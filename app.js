function calculate(operation) {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let res = 0;
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerText = "Please Enter Numbers";
    return;
  }
  if (operation === "add") {
    res = num1 + num2;
  } else if (operation === "sub") {
    res = num1 - num2;
  } else if (operation === "mul") {
    res = num1 * num2;
  } else if (operation === "div") {
    if (num2 === 0) {
      document.getElementById("result").innerText =  "Error:  Cannot divide by zero";
      return;
    }
    res = num1 / num2;
  }
  document.getElementById("result").innerText = "Result:"  + res;
}

