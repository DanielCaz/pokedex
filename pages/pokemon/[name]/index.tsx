import React from "react";
import { useRouter } from "next/router";
import { GetStaticPropsContext } from "next";
import Image from "next/image";
import styles from "../../../styles/Pokemon.module.scss";

const Pokemon = ({ pokemonData }) => {
  return (
    <div className={styles.container}>
      {pokemonData != "Error" ? (
        <div className={styles.card}>
          <Image
            width="150px"
            height="150px"
            src={pokemonData.sprites.front_default}
          />
        </div>
      ) : (
        <h2>Pokemon not found</h2>
      )}
    </div>
  );
};

export const getServerSideProps = async (context: GetStaticPropsContext) => {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${context.params.name}`
    );
    const pokemonData = await res.json();

    return {
      props: {
        pokemonData,
      },
    };
  } catch (e) {
    return {
      props: {
        pokemonData: "Error",
      },
    };
  }
};

export default Pokemon;
