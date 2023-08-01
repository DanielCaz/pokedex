import Link from "next/link";
import { getPokemon } from "../../../lib/pokeapi";
import Image from "next/image";
import { getStatDisplayRatio, typeStyles } from "../../../lib/utils";
import { PokemonTypeStyle } from "../../../interfaces/PokemonTypeStyle";

const PokedexPage = async ({
  params,
}: {
  params: {
    pokemonName: string;
  };
}) => {
  const pokemon = await getPokemon(params.pokemonName.toLowerCase());

  const pokemonTypeStyles: PokemonTypeStyle[] = [];
  typeStyles.forEach((typeStyle) => {
    if (pokemon.types[0].type.name === typeStyle.name) {
      pokemonTypeStyles.push(typeStyle);
    }
    if (pokemon.types[1]?.type.name === typeStyle.name) {
      pokemonTypeStyles.push(typeStyle);
    }
  });

  return (
    <main className="relative min-h-[100dvh] p-8">
      {
        <div
          key={pokemonTypeStyles[0].name}
          className={`${pokemonTypeStyles[0].color} absolute bottom-0 left-0 right-1/2 top-0 -z-10`}
        ></div>
      }
      {
        <div
          key={
            pokemonTypeStyles.length === 2
              ? pokemonTypeStyles[1].name
              : pokemonTypeStyles[0].name
          }
          className={`${
            pokemonTypeStyles.length === 2
              ? pokemonTypeStyles[1].color
              : pokemonTypeStyles[0].color
          } absolute bottom-0 left-1/2 right-0 top-0 -z-10`}
        ></div>
      }
      <div className="mx-auto max-w-md rounded bg-white p-6 shadow-xl">
        <h2 className="text-center text-2xl font-bold capitalize">
          {pokemon.name}
        </h2>
        <Image
          priority
          width={200}
          height={200}
          src={pokemon.sprites.front_default}
          alt="Sprite"
          className="mx-auto"
        />
        <hr className="my-4 border-gray-300" />
        <div className="flex items-center justify-around py-3">
          {pokemonTypeStyles.map((style) => {
            return (
              <p
                key={style.name}
                className={`${style.color} ${style.textColor} rounded-full px-2 py-1 capitalize`}
              >
                <strong>{style.name}</strong>
              </p>
            );
          })}
        </div>
        <hr className="my-4 border-gray-300" />
        <div className="space-y-1">
          {pokemon.stats.map((stat) => {
            const width = `${getStatDisplayRatio(stat.base_stat) * 100}%`;

            return (
              <div key={stat.stat.name} className="grid grid-cols-2 gap-1">
                <p className="font-bold capitalize">
                  {stat.stat.name.replaceAll("-", " ")}
                </p>
                <div
                  className={`${
                    pokemonTypeStyles.length === 2
                      ? `${pokemonTypeStyles[0].gradient.from} ${pokemonTypeStyles[1].gradient.to} bg-gradient-to-r`
                      : pokemonTypeStyles[0].color
                  } ${pokemonTypeStyles[0].textColor} border`}
                  style={{ width }}
                >
                  <span className="m-1 font-bold">{stat.base_stat}</span>
                </div>
              </div>
            );
          })}
        </div>
        <hr className="my-4 border-gray-300" />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <p>
              <strong>Height:</strong> {pokemon.height}
            </p>
            <p>
              <strong>Weight:</strong> {pokemon.weight}
            </p>
          </div>
          <div className="space-y-3">
            <p>
              <strong>Base Xp:</strong> {pokemon.base_experience}
            </p>
            <p>
              <strong>Abilities:</strong>{" "}
              {pokemon.abilities
                .map((a) => a.ability.name.replaceAll("-", " "))
                .join(", ")}
            </p>
          </div>
        </div>
      </div>
      <Link
        href="/"
        className="mx-auto mt-4 block w-max rounded bg-black p-2 text-white transition-colors duration-300 hover:bg-gray-900"
      >
        Go Back
      </Link>
    </main>
  );
};

export default PokedexPage;
