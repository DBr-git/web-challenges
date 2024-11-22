import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState(null);
  const [page, setPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0"
  );

  function handleNextPage() {
    if (pokemon?.next) {
      setPage(pokemon.next);
    }
  }

  function handlePreviousPage() {
    if (pokemon?.previous) {
      setPage(pokemon.previous);
    }
  }

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(page);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [page]);

  if (!pokemon) {
    return null;
  }

  return (
    <main>
      <button
        type="button"
        onClick={handlePreviousPage}
        disabled={!pokemon.previous}
      >
        Previous Page
      </button>
      <button type="button" onClick={handleNextPage} disabled={!pokemon.next}>
        Next Page
      </button>
      <ul>
        {pokemon.results.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
