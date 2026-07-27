# Caesar Cipher

A browser-based Caesar Cipher encoder that shifts each letter in user-provided text by a configurable amount (1–25). Translated output updates in real time as the user types or adjusts the shift value, preserving case and leaving non-alphabetic characters unchanged.

## Tech Stack

`HTML` `CSS` `JavaScript`

## Features

- Real-time translation as the user types or adjusts the shift value
- Configurable shift amount from 1–25
- Preserves uppercase and lowercase letters independently
- Non-alphabetic characters (numbers, punctuation, spaces) are passed through unchanged
- Dark-themed UI with focus highlighting on active inputs

## How It Works

The cipher uses each character's ASCII code to calculate the shifted value:

- Uppercase letters use ASCII base `65` (A)
- Lowercase letters use ASCII base `97` (a)
- The shift wraps around using modulo 26, so shifting `Z` by 1 gives `A`

```javascript
const base = c < 'a' ? 65 : 97;
return String.fromCharCode((c.charCodeAt(0) - base + shift) % 26 + base);
```

## Key Concepts Demonstrated

- Regex-based character transformation with `/[a-zA-Z]/g`
- ASCII arithmetic for case-preserving character shifting
- Real-time DOM manipulation via `addEventListener`
- Modulo arithmetic for wrap-around shift logic

## Getting Started

Open `index.html` directly in your browser — no installation required.

## Known Issue

The `addEventListener` calls are missing the event type as the first argument:

```javascript
// Current - missing event type, will not fire
document.getElementById("plaintext").addEventListener(translate);

// Fixed
document.getElementById("plaintext").addEventListener("input", translate);
document.getElementById("shift").addEventListener("input", translate);
```

## Repository

[Caesar Cipher Project](https://github.com/SandyyMarie/Mimo-Projects-and-Practice/tree/main/JavaScript/CaesarCipherProject)
