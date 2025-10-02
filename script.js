
function checkNumber() {
  let num = document.getElementById("numCheck").value;
  let output = document.getElementById("controlOutput");

  if (num === "") {
    output.innerHTML = "<p style='color:red;'>Please enter a number.</p>";
    return;
  }

  if (num % 2 === 0) {
    output.innerHTML = `<p>${num} is Even ✅</p>`;
  } else {
    output.innerHTML = `<p>${num} is Odd ❌</p>`;
  }
}


function showOperators() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  let output = document.getElementById("operatorOutput");

  if (isNaN(n1) || isNaN(n2)) {
    output.innerHTML = "<p style='color:red;'>Enter both numbers.</p>";
    return;
  }

  output.innerHTML = `
    <p><strong>Arithmetic:</strong> ${n1} + ${n2} = ${n1+n2}, ${n1} - ${n2} = ${n1-n2}, ${n1} * ${n2} = ${n1*n2}, ${n1} / ${n2} = ${(n1/n2).toFixed(2)}</p>
    <p><strong>Comparison:</strong> ${n1} > ${n2} = ${n1>n2}, ${n1} == ${n2} = ${n1==n2}</p>
    <p><strong>Logical:</strong> (${n1}>0 && ${n2}>0) = ${n1>0 && n2>0}</p>
  `;
}


function calculateFactorial() {
  let num = parseInt(document.getElementById("factNum").value);
  let output = document.getElementById("functionOutput");

  if (isNaN(num) || num < 0) {
    output.innerHTML = "<p style='color:red;'>Enter a non-negative integer.</p>";
    return;
  }

  function factorial(n) {
    return n === 0 ? 1 : n * factorial(n-1);
  }

  output.innerHTML = `<p>Factorial of ${num} = ${factorial(num)}</p>`;
}


function convertTypes() {
  let strVal = document.getElementById("strInput").value;
  let output = document.getElementById("conversionOutput");

  if (strVal === "") {
    output.innerHTML = "<p style='color:red;'>Please enter a value.</p>";
    return;
  }

  let numVal = Number(strVal);
  let boolVal = Boolean(strVal);

  output.innerHTML = `
    <p><strong>Original (string):</strong> "${strVal}" (type: ${typeof strVal})</p>
    <p><strong>To Number:</strong> ${numVal} (type: ${typeof numVal})</p>
    <p><strong>To Boolean:</strong> ${boolVal} (type: ${typeof boolVal})</p>
  `;
}
