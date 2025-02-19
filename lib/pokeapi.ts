import { Pokemon } from "../interfaces/pokemon";

export const getPokemon = async (name: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pokemon/${name}`);
  const pokemon: Pokemon = await res.json();

  return pokemon;
};
