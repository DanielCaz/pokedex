import { Pokemon } from "../interfaces/pokemon";

export const getPokemon = async (name: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemon: Pokemon = await res.json();

  return pokemon;
};
