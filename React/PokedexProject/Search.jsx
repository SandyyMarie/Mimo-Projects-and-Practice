import React, { useState, useEffect } from "react";
import "./Search.css";
import PokemonCard from "./PokemonCard";

const Search = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch("https://pokedex.mimo.dev/api/pokemon");
        if (!response.ok) throw new Error("Failed to fetch Pokémon");
        const data = await response.json();
        setPokemons(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemons();
  }, []);

  useEffect(() => {
    if (input === "") {
      setFilteredPokemons([]);
    } else {
      const filtered = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().startsWith(input.toLowerCase())
      );
      setFilteredPokemons(filtered);
    }
  }, [input, pokemons]);

  return (
    <>
      <h1>Search a Pokémon</h1>
      {loading && <p>Loading Pokémon...</p>}
      {error && <p>Error: {error}</p>}
      <input
        placeholder="Enter Pokémon name..."
        onChange={(e) => setInput(e.target.value)}
      />
      <ul style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: 0, listStyle: "none" }}>
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </ul>
    </>
  );
};

export default Search;
