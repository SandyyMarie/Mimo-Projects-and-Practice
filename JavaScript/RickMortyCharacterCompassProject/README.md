# Rick and Morty Character Compass

A browser-based character directory that fetches live data from the Rick and Morty API and dynamically renders character cards displaying each character's image, name, status, and species.

## Tech Stack

`HTML` `CSS` `JavaScript` `Rick and Morty API`

## Features

- Fetches live character data from the [Rick and Morty API](https://rickandmortyapi.com/)
- Dynamically renders a card for each character with image, name, status, and species
- Circular character portrait images
- Responsive card grid layout using flexbox
- Drop shadow styling for card depth

## How It Works

On page load, a `fetch` call retrieves the first page of characters from the API. The response is parsed as JSON and each character is mapped to a dynamically constructed card element appended to the DOM:

```javascript
fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    data.results.forEach(character => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `...`;
      charactersContainer.appendChild(card);
    });
  });
```

## Key Concepts Demonstrated

- Asynchronous data fetching with the Fetch API
- Promise chaining with `.then()`
- Dynamic DOM generation from API response data
- Template literals for building HTML strings
- Flexbox for responsive card grid layout

## Getting Started

Open `index.html` directly in your browser — no installation required.

> **Note:** Requires an internet connection to fetch live data from the Rick and Morty API.
