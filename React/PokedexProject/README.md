# Pokédex App

A React-based Pokédex application that lets you browse, search, and explore Pokémon using a live API.

## Features

- Browse all Pokémon with sprites and names
- Search Pokémon by name with real-time filtering
- View detailed stats including height, weight, abilities, and types
- Retro pixel-art styling with the Press Start 2P font
- Multi-page routing with React Router

## Tech Stack

- React
- React Router DOM
- Vite
- CSS
- [Mimo Pokédex API](https://pokedex.mimo.dev)

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── App.jsx          # Root component with routing
├── Home.jsx         # Landing page
├── Pokedex.jsx      # Full Pokémon list
├── Pokemon.jsx      # Individual Pokémon detail page
├── PokemonCard.jsx  # Reusable card component
└── Search.jsx       # Search with real-time filtering
```
