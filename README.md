# Mimo Projects and Practice

A collection of projects I built while completing Mimo's Full-Stack, Front-End, Back-End, and Python career certifications, covering Express.js, JavaScript, Python, and React.

## Table of Contents
1. [Express Projects](#express)
    - [Heads or Tails](#heads-or-tails)
    - [Media Library](#media-library)
2. [JavaScript Projects](#javascript)
    - [Blackjack](#blackjack)
    - [Caesar Cipher](#caesar-cipher)
    - [Comedian Bot](#comedian-bot)
    - [Even or Odds](#even-or-odds)
    - [Gallery](#gallery)
    - [Guessing Game](#guessing-game)
    - [Lightswitch](#lightswitch)
    - [Pixel Paws](#pixel-paws)
    - [Rick and Morty Character Compass](#rick-and-morty-character-compass)
    - [Task List](#task-list)
    - [Trivia Game](#trivia-game)
    - [Unit Converter](#unit-converter)
3. [Python](#python) 
    - [Bot Project](#bot-project)
    - [Crypto Craze](#crypto-craze)
    - [Draw a Card](#draw-a-card)
    - [Food Order System](#food-order-system)
    - [Library](#library)
4. [React](#react)

---

## Express

### Heads Or Tails
**Tech:** Express.js

A lightweight REST API offering three randomization endpoints: coin flipping, dice rolling, and bounded random number generation. Supports query parameters for repeated trials and input validation with appropriate error responses.

[Repository](https://github.com/SandyyMarie/Mimo-Projects-and-Practice/blob/main/Express/HeadsOrTails.js)

### Media Library
**Tech:** Express.js

A Movie API that returns movie details based on query parameters. Demonstrates RESTful routing and structured JSON responses.

[Repository](https://github.com/SandyyMarie/Mimo-Projects-and-Practice/tree/main/Express/MediaLibraryProject)

---

## JavaScript

### Blackjack
**Tech:** JavaScript

A command-line Blackjack game with full game logic including ace flexibility (aces count as 11 or drop to 1 to avoid busting), dealer AI that hits until reaching 17, and interactive hit/stand prompts. Handles edge cases like bust detection, ties, and invalid input.

[Repository](https://github.com/SandyyMarie/Mimo-Projects-and-Practice/blob/main/JavaScript/BlackjackProject/app.js)


### Caesar Cipher
**Tech:** HTML, CSS, JavaScript

A browser-based Caesar Cipher encoder that shifts each letter in user-provided text by a configurable amount (1-25). Updates the translated output in real time as the user types or adjusts the shift value, preserving case and leaving non-alphabetic characters unchanged.

[Repository](https://github.com/SandyyMarie/Mimo-Projects-and-Practice/tree/main/JavaScript/CaesarCipherProject)


### Comedian Bot
**Tech:** HTML, CSS, JavaScript

A chat-style joke bot with a simulated conversation UI. Displays bot and user messages with avatars in a scrollable chat window, using staggered `setTimeout` calls to mimic realistic response timing. Cycles through a joke list and gracefully handles reaching the end of available jokes.

[Repository](https://github.com/SandyyMarie/Mimo-Projects-and-Practice/tree/main/JavaScript/ComedianBotProject)

### Even or Odds
**Tech:** JavaScript

A command-line two-player game (player vs. computer) played over three rounds. The player picks odd or even and a number 1-5, the computer automatically takes the opposite parity and picks its own number, and the sum determines the winner. Tracks wins across rounds and declares an overall winner.

[Repository](https://github.com/SandyyMarie/Mimo-Projects-and-Practice/blob/main/JavaScript/EvenOrOddsProject/script.js)

### Gallery
**Tech:** HTML, CSS, JavaScript

An image gallery featuring clickable thumbnails that open a fullscreen modal overlay on click. Includes a CSS hover zoom effect on thumbnails and a close button to dismiss the modal. Demonstrates DOM manipulation, event handling, and responsive layout using flexbox.

[Repository](https://github.com/SandyyMarie/Mimo-Projects-and-Practice/tree/main/JavaScript/GalleryProject)

### Guessing Game
**Tech:** HTML, CSS, JavaScript

A browser based number guessing game where the player has 10 attempts to guess a randomly generated number between 1 and 100. Provides realtime higher/lower feedback after each guess with color coded responses, and displays a game over message when attempts are exhausted.

[Repository](https://github.com/SandyyMarie/Mimo-Projects-and-Practice/tree/main/JavaScript/GuessingGameProject)

### Lightswitch
**Tech:** JavaScript

A beginner JavaScript exercise demonstrating boolean logic and variable relationships. Models a lightswitch scenario where the light state is derived from the time of day, and a working status is determined by combining multiple boolean conditions.

[Repository](https://github.com/SandyyMarie/Mimo-Projects-and-Practice/blob/main/JavaScript/LightswitchProgramProject/script.js)

### Pixel Paws
**Tech:** HTML, CSS, JavaScript

A browser-based virtual pet game where the player selects and feeds one of two pets to maintain their saturation level. Uses OOP with a `Pet` class to manage each pet's state, a `setInterval` timer that decreases hunger every 5 seconds, and two treat options that restore different amounts. Pets that reach 0% saturation visually fade out and run away.

[Repository](https://github.com/SandyyMarie/Mimo-Projects-and-Practice/tree/main/JavaScript/PixelPawsProject)

### Rick and Morty Character Compass
**Tech:** HTML, CSS, JavaScript

A browser-based character directory that fetches live data from the [Rick and Morty API](https://rickandmortyapi.com/) and dynamically renders character cards displaying each character's image, name, status, and species. Demonstrates asynchronous JavaScript with the Fetch API, promise chaining, and dynamic DOM generation.

[Repository](https://github.com/SandyyMarie/Mimo-Projects-and-Practice/tree/main/JavaScript/RickMortyCharacterCompassProject)

### Task List
**Tech:** JavaScript

A command-line task manager that lets the user view, add, and remove items from a list via an interactive menu loop. Demonstrates array manipulation, modular functions, input validation, and graceful handling of invalid entries.

[Repository](https://github.com/SandyyMarie/Mimo-Projects-and-Practice/tree/main/JavaScript/TaskListProject)

### Trivia Game
**Tech:** HTML, CSS, JavaScript

A browser-based multiple-choice trivia quiz that tracks the player's score across multiple questions and dynamically updates the question, answer choices, and result display. Demonstrates state management with index tracking and conditional rendering based on quiz progress.

[Repository](https://github.com/SandyyMarie/Mimo-Projects-and-Practice/tree/main/JavaScript/TriviaGameProject)

### Unit Converter
**Tech:** HTML, CSS, JavaScript

A browser-based converter between miles and kilometers, with a dropdown to select conversion direction. Reads user input and dynamically updates the result on the page.

[Repository](https://github.com/SandyyMarie/Mimo-Projects-and-Practice/tree/main/JavaScript/UnitConverterProject)

---

## Python

### Bot Project
**Tech:** Python

An interactive command-line chatbot that greets the user, collects their name, age, and favorite color, then calculates and responds with the age difference between the user and the bot. Demonstrates user input handling, type casting, and formatted string output.

[Repository](https://github.com/SandyyMarie/Mimo-Projects-and-Practice/blob/main/Python/BotProject/script.py)

### Crypto Craze
**Tech:** Python

A command-line tool that fetches and displays real-time cryptocurrency prices (Ethereum, Bitcoin, Solana) via a REST API. Uses environment variables to securely manage the API key and modular functions to handle requests and format output.

[Repository](https://github.com/SandyyMarie/Mimo-Projects-and-Practice/blob/main/Python/CryptoCrazeProject/app.py)

### Draw a Card
**Tech:** Python

A command-line card-drawing simulator that builds a standard 52-card deck and lets the user repeatedly draw a chosen number of cards until the deck is depleted. Renders each drawn card as ASCII art and handles edge cases like requesting more cards than remain in the deck.

[Repository](https://github.com/SandyyMarie/Mimo-Projects-and-Practice/tree/main/Python/DrawACardProject)

### Food Order System
**Tech:** Python

A command-line food ordering system supporting Italian and Indian cuisine menus. Lets the user select a food type, view available meals, and place an order with a specified quantity, generating an order summary or an error message if the meal isn't found.

[Repository](https://github.com/SandyyMarie/Mimo-Projects-and-Practice/tree/main/Python/FoodOrderSystemProject)

### Library
**Tech:** Python

A command-line library management system built with OOP, featuring two classes: `Book` (tracks title, author, and availability with checkout/return methods) and `Library` (manages a collection with add, display, and case-insensitive title search). Demonstrates class design, encapsulation, and object composition.

[Repository](https://github.com/SandyyMarie/Mimo-Projects-and-Practice/tree/main/Python/LibraryProject)


---

## React

*Projects coming soon.*

---

[Back To Top](#mimo-projects-and-practice) 
