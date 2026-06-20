function convert() {
  let inputValue = document.getElementById("userInput").value;
  let unit = document.getElementById("unit").value;
  let milesToKm = (unit === "milesToKm");
  let result = 0;
  let resultString = "";

  if (milesToKm) {
    result = inputValue * 1.60934;
    resultString = `${inputValue} miles are ${result} km`;
  } else {
    result = inputValue / 1.60934;
    resultString = `${inputValue} km are ${result} miles`;
  }

  console.log(resultString);
  const resultElement = document.getElementById('resultElement');
  resultElement.innerHTML = resultString;
}
