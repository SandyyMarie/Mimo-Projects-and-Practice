# Guessing Game

A browser-based number guessing game where the player has 10 attempts to guess a randomly generated number between 1 and 100. Provides real-time higher/lower feedback after each guess with color-coded responses, and displays a game over message when attempts are exhausted.

## Tech Stack

`HTML` `CSS` `JavaScript`

## Features

- Randomly generated target number on each page load
- Higher/lower feedback after each incorrect guess
- Color-coded responses — green for correct, red for incorrect
- 10 attempt limit with a game over message when exhausted

## How It Works

On each guess submission, `checkGuess()` decrements the attempt counter, compares the input to the target number, and updates the feedback element with the result and color:

```javascript
if (guess == randomNumber) {
  feedbackElement.innerHTML = "Congratulations!";
  feedbackElement.style.color = "green";
  attempts = 0;
} else if (guess < randomNumber) {
  feedbackElement.innerHTML = "Too low! Try again.";
  feedbackElement.style.color = "red";
}
```

## Key Concepts Demonstrated

- Random number generation with `Math.floor` and `Math.random`
- DOM manipulation to update feedback text and color dynamically
- Attempt tracking with a decrementing counter
- Conditional rendering based on game state

## Known Issue

The game over condition checks `attempts != randomNumber`, which compares the attempt count to the target number rather than checking if the player won:

```javascript
// Current - incorrect condition
if (attempts === 0 && attempts != randomNumber) { ... }

// Fixed
if (attempts === 0 && guess != randomNumber) { ... }
```

This means if the random number happens to be `0`, the game over message won't display correctly. The fix is to compare `guess` to `randomNumber` instead of `attempts`.

## Getting Started

Open `index.html` directly in your browser — no installation required.

