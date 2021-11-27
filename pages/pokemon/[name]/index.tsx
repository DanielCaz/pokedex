import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { GetStaticPropsContext } from "next";
import Image from "next/image";
import styles from "../../../styles/Pokemon.module.scss";
import { useRouter } from "next/router";

const Pokemon = ({
  response,
  pokeStats,
  pokeTypes,
  pokeName,
  pokeSprite,
  pokeProfile,
}: {
  response: string;
  pokeStats: { base_stat: number; stat: { name: string } }[];
  pokeTypes: { slot: number; type: { name: string } }[];
  pokeName: string;
  pokeSprite: string;
  pokeProfile: {
    base_xp: number;
    height: number;
    weight: number;
    abilities: { ability: { name: string } }[];
  };
}) => {
  type styleType = {
    id: string;
    backgroundColor: string;
    color: string;
  };

  const [mainStyles, setMainStyles]: [
    styleType[],
    Dispatch<SetStateAction<styleType[]>>
  ] = useState([]);

  const router = useRouter();

  useEffect(() => {
    if (response === "Ok") {
      let temp: styleType[] = [];
      pokeTypes.map((element) => {
        const name = element.type.name;
        switch (name) {
          case "normal":
            temp = temp.concat({
              id: name,
              backgroundColor: "gray",
              color: "white",
            });
            break;
          case "fighting":
            temp = temp.concat({
              id: name,
              backgroundColor: "red",
              color: "white",
            });
            break;
          case "flying":
            temp = temp.concat({
              id: name,
              backgroundColor: "skyblue",
              color: "black",
            });
            break;
          case "poison":
            temp = temp.concat({
              id: name,
              backgroundColor: "purple",
              color: "white",
            });
            break;
          case "ground":
            temp = temp.concat({
              id: name,
              backgroundColor: "sandybrown",
              color: "white",
            });
            break;
          case "rock":
            temp = temp.concat({
              id: name,
              backgroundColor: "dimgray",
              color: "white",
            });
            break;
          case "bug":
            temp = temp.concat({
              id: name,
              backgroundColor: "limegreen",
              color: "white",
            });
            break;
          case "ghost":
            temp = temp.concat({
              id: name,
              backgroundColor: "lightgray",
              color: "black",
            });
            break;
          case "steel":
            temp = temp.concat({
              id: name,
              backgroundColor: "lightslategray",
              color: "white",
            });
            break;
          case "fire":
            temp = temp.concat({
              id: name,
              backgroundColor: "orangered",
              color: "white",
            });
            break;
          case "water":
            temp = temp.concat({
              id: name,
              backgroundColor: "royalblue",
              color: "white",
            });
            break;
          case "grass":
            temp = temp.concat({
              id: name,
              backgroundColor: "green",
              color: "white",
            });
            break;
          case "electric":
            temp = temp.concat({
              id: name,
              backgroundColor: "yellow",
              color: "black",
            });
            break;
          case "psychic":
            temp = temp.concat({
              id: name,
              backgroundColor: "plum",
              color: "white",
            });
            break;
          case "ice":
            temp = temp.concat({
              id: name,
              backgroundColor: "deepskyblue",
              color: "white",
            });
            break;
          case "dragon":
            temp = temp.concat({
              id: name,
              backgroundColor: "blueviolet",
              color: "white",
            });
            break;
          case "dark":
            temp = temp.concat({
              id: name,
              backgroundColor: "black",
              color: "white",
            });
            break;
          case "fairy":
            temp = temp.concat({
              id: name,
              backgroundColor: "hotpink",
              color: "white",
            });
            break;
          case "unknown":
            temp = temp.concat({
              id: name,
              backgroundColor: "darkred",
              color: "white",
            });
            break;
          default:
            temp = temp.concat({
              id: name,
              backgroundColor: "darkgray",
              color: "white",
            });
        }
        setMainStyles(temp);
      });
    }
  }, [pokeTypes, response]);

  const smoothExponentially = (value: number, max: number): number => {
    var a = -max / Math.pow(max, 2);
    return a * Math.pow(value - max, 2) + max;
  };

  const getStatDisplayRatio = (statValue: number): number => {
    var maxStat = 255;
    var smoothedValue = smoothExponentially(statValue, maxStat);
    return smoothedValue / maxStat;
  };

  const getAbilities = (): string => {
    let res = "";
    pokeProfile.abilities.forEach((ability) => {
      let temp = ability.ability.name;
      if (temp.includes("-")) temp = temp.replace("-", " ");
      res += `${temp}, `;
    });
    res = res.substr(0, res.length - 2);
    return res;
  };

  return (
    <div className={styles.container}>
      {mainStyles.length > 0 && (
        <style>
          {"html {background-color: " + mainStyles[0].backgroundColor + "}"}
        </style>
      )}
      {response === "Ok" ? (
        <div className={styles.card}>
          <h2>{pokeName}</h2>
          <Image
            priority
            width="150"
            height="150"
            layout="responsive"
            unoptimized
            src={pokeSprite}
            alt="Sprite"
          />
          <hr />
          <div className={styles.typeInfo}>
            {mainStyles.length > 0 &&
              mainStyles.map((style) => {
                return (
                  <p
                    key={style.id}
                    style={{
                      backgroundColor: style.backgroundColor,
                      color: style.color,
                    }}
                  >
                    <b>{style.id}</b>
                  </p>
                );
              })}
          </div>
          <hr />
          <div className={styles.stats}>
            <table>
              <tbody>
                {pokeStats.map((stat) => {
                  return (
                    <tr key={stat.stat.name}>
                      <th scope="row">
                        {stat.stat.name.includes("-")
                          ? stat.stat.name.replace("-", " ")
                          : stat.stat.name}
                      </th>
                      <td>
                        <div>
                          {mainStyles.length > 0 && (
                            <div
                              style={{
                                backgroundColor: mainStyles[0].backgroundColor,
                                width: `${
                                  getStatDisplayRatio(stat.base_stat) * 100
                                }%`,
                                color: `${mainStyles[0].color}`,
                              }}
                            >
                              <span>
                                <b>{stat.base_stat}</b>
                              </span>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <hr />
          {pokeProfile && (
            <div className={styles.profile}>
              <div>
                <p>
                  <b>Height:</b> {pokeProfile.height}
                </p>
                <p>
                  <b>Weight:</b> {pokeProfile.weight}
                </p>
              </div>
              <div>
                <p>
                  <b>Base Xp:</b> {pokeProfile.base_xp}
                </p>
                <p>
                  <b>Abilities:</b> {getAbilities()}
                </p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          <h2>Error {response}</h2>
        </>
      )}
      <button
        onClick={() => {
          router.replace("/");
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export const getServerSideProps = async (context: GetStaticPropsContext) => {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${context.params.name
        .toString()
        .toLowerCase()}`
    );

    if (res.status === 404) {
      return {
        props: {
          response: "404: pokemon not found",
        },
      };
    }

    if (res.status === 500) {
      return {
        props: {
          response: "500: Internal server error",
        },
      };
    }

    const data = await res.json();

    return {
      props: {
        response: "Ok",
        pokeStats: data.stats,
        pokeTypes: data.types,
        pokeName: data.name,
        pokeSprite: data.sprites.front_default,
        pokeProfile: {
          base_xp: data.base_experience,
          height: data.height,
          weight: data.weight,
          abilities: data.abilities,
        },
      },
    };
  } catch (e) {
    return {
      props: {
        response: "Error",
      },
    };
  }
};

export default Pokemon;
