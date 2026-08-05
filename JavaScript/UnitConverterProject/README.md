# Unit Converter

A browser-based converter between miles and kilometers with a dropdown to select conversion direction. Reads user input and dynamically updates the result on the page with a correctly labeled output string.

## Tech Stack

`HTML` `CSS` `JavaScript`

## Features

- Convert miles to kilometers or kilometers to miles
- Dropdown to select conversion direction
- Result label updates to match the selected conversion direction
- Conversion factor of 1.60934 for accuracy
- Clean pink and white UI with rounded card styling

## How It Works

The `convert()` function reads the input value and selected unit, then applies the correct conversion formula and renders a direction-aware result string:

```javascript
if (milesToKm) {
  result = inputValue * 1.60934;
  resultString = `${inputValue} miles are ${result} km`;
} else {
  result = inputValue / 1.60934;
  resultString = `${inputValue} km are ${result} miles`;
}
```

## Key Concepts Demonstrated

- Reading and combining multiple input values from the DOM
- Conditional logic based on a dropdown selection
- Dynamic DOM updates with `innerHTML`
- Direction-aware output labeling

## Bug Fixed

The original version used undeclared global variables for `milesToKm` and `result`, and displayed a misleading label regardless of conversion direction. Both were fixed in this version:

- Added `let` declarations for proper variable scoping
- Result string now correctly reads `"X miles are Y km"` or `"X km are Y miles"` based on the selected direction

## Getting Started

Open `index.html` directly in your browser — no installation required.
