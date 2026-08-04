# Trivia Game

A browser-based multiple-choice trivia quiz that tracks the player's score across multiple questions and dynamically updates the question, answer choices, and result display.

## Tech Stack

`HTML` `CSS` `JavaScript`

## Features

- Multiple choice questions with four answer options each
- Score tracking across all questions
- Dynamically updates question and answer buttons after each selection
- Displays final score when all questions are answered
- Clears question and choices on game over for a clean end state
- Gradient background with rounded card layout and hover effects on buttons

## How It Works

`displayQuestion()` checks the current index against the questions array. If questions remain, it updates the question heading and button values. Once all questions are answered it renders the final score and clears the UI:

```javascript
function displayQuestion() {
  if (currentQuestionIndex < questions.length) {
    document.getElementById('question').innerHTML = questions[currentQuestionIndex];
    for (let i = 0; i < 4; i++) {
      const btn = document.getElementById(`choice${i+1}`);
      btn.innerHTML = choicesArray[currentQuestionIndex][i];
      btn.value = choicesArray[currentQuestionIndex][i];
    }
  } else {
    document.getElementById('result').innerHTML = "Game over! Score: " + score;
    document.getElementById('question').innerHTML = "";
    document.getElementById('choices').innerHTML = "";
  }
}
```

## Key Concepts Demonstrated

- State management with `currentQuestionIndex` and `score`
- Dynamic DOM updates with `innerHTML` and button `value` attributes
- Passing DOM elements as function arguments in `checkAnswer(this)`
- Conditional rendering based on quiz progress
- Parallel arrays for questions, choices, and correct answers

## Known Issues

Two CSS bugs were fixed from the original version:
- `ody { ... }` was missing the `b` — corrected to `body { ... }`
- `color: result` was not a valid CSS value — corrected to `color: black`

## Getting Started

Open `index.html` directly in your browser — no installation required.
