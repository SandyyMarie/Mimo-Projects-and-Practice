let randomNumber = Math.floor(Math.random() * 100);
let attempts = 10;

function checkGuess() {
  attempts--;
  const inputElement = document.getElementById("guess");
  const feedbackElement = document.getElementById("feedback");
  const guess = inputElement.value;
  if (guess == randomNumber) {
    feedbackElement.innerHTML = "Congratulations!";
    feedbackElement.style.color = "green";
    attempts = 0;
  } else if (guess < randomNumber) {
    feedbackElement.innerHTML = "Too low! Try again.";
    feedbackElement.style.color = "red";
  } else {
    feedbackElement.innerHTML = "Too high! Try again.";
    feedbackElement.style.color = "red";
  }

  if(attempts === 0 && attempts != randomNumber){
    feedbackElement.style.color = "red";
    feedbackElement.innerHTML = "Game Over";
  }
  
}
