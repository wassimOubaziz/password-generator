const resultHt = document.querySelector("body main .result h3");
const btnCopy = document.querySelector("body main .result button");
const btnGenerate = document.querySelector("body main .generate");

btnGenerate.addEventListener("click", function () {
  const length = document.querySelector("body .lengthValue");
  const upLetters = document.querySelector("body .up-letters");
  const lowLetters = document.querySelector("body .low-letters");
  const numbers = document.querySelector("body .numbers");
  const symbols = document.querySelector("body .symbols");
  generatePassword(
    +length.value,
    upLetters.checked,
    lowLetters.checked,
    numbers.checked,
    symbols.checked
  );
});

btnCopy.addEventListener("click", function () {
  copyToClipboard("but");
});

// from stack overflow
function copyToClipboard(elementId) {
  // Create a "hidden" input
  var aux = document.createElement("input");
  // Assign it the value of the specified element
  aux.setAttribute("value", document.getElementById(elementId).innerHTML);
  // Append it to the body
  document.body.appendChild(aux);
  // Highlight its content
  aux.select();
  // Copy the highlighted text
  document.execCommand("copy");
  // Remove it from the body
  document.body.removeChild(aux);
}

function generatePassword(length, up, low, numb, sym) {
  let result = "";
  while (length > result.length) {
    result += randomFunction(up, low, numb, sym);
  }
  resultHt.textContent = result;
}

function generateUpLetters(up) {
  if (up) return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  else return "";
}

function generateLowLetters(low) {
  if (low) return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  else return "";
}

function generateNumbers(numb) {
  if (numb) return Math.floor(Math.random() * 10);
  else return "";
}

function generateSymbols(sym) {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  if (sym) return symbols[Math.floor(Math.random() * symbols.length)];
  else return "";
}

function randomFunction(up, low, numb, sym) {
  const functionArrays = [
    generateUpLetters(up),
    generateLowLetters(low),
    generateNumbers(numb),
    generateSymbols(sym),
  ];

  return functionArrays[Math.floor(Math.random() * functionArrays.length)];
}
