import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const [pokemon, setPokemon] = useState("");
  const router = useRouter();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (pokemon.trim().length == 0) return;

    router.push(`pokemon/${pokemon}`);
  };

  return (
    <div className={styles.container}>
      <form
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <input
          required
          type="text"
          name="pokemon"
          id="inputPokemon"
          placeholder="Pokemon name"
          value={pokemon}
          onChange={(e) => setPokemon(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
