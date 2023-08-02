import Link from "next/link";
import { getPokemon } from "../../../lib/pokeapi";
import Image from "next/image";
import { getStatDisplayRatio } from "../../../lib/utils";
import { PokemonTypeStyle } from "../../../interfaces/PokemonTypeStyle";
import { notFound } from "next/navigation";
import { Pokemon } from "../../../interfaces/pokemon";

const PokedexPage = async ({
  params,
}: {
  params: {
    pokemonName: string;
  };
}) => {
  let pokemon: Pokemon;
  try {
    pokemon = await getPokemon(params.pokemonName.toLowerCase());
  } catch (error) {
    notFound();
  }

  const typeStyles: PokemonTypeStyle[] = [
    {
      name: "normal",
      color: "bg-gray-400",
      textColor: "text-black",
      gradient: { from: "from-gray-400", to: "to-gray-500" },
    },
    {
      name: "fire",
      color: "bg-red-500",
      textColor: "text-white",
      gradient: { from: "from-red-500", to: "to-red-600" },
    },
    {
      name: "water",
      color: "bg-blue-500",
      textColor: "text-white",
      gradient: { from: "from-blue-500", to: "to-blue-600" },
    },
    {
      name: "electric",
      color: "bg-yellow-400",
      textColor: "text-black",
      gradient: { from: "from-yellow-400", to: "to-yellow-500" },
    },
    {
      name: "grass",
      color: "bg-green-500",
      textColor: "text-white",
      gradient: { from: "from-green-500", to: "to-green-600" },
    },
    {
      name: "ice",
      color: "bg-blue-200",
      textColor: "text-black",
      gradient: { from: "from-blue-200", to: "to-blue-300" },
    },
    {
      name: "fighting",
      color: "bg-red-600",
      textColor: "text-white",
      gradient: { from: "from-red-600", to: "to-red-700" },
    },
    {
      name: "poison",
      color: "bg-purple-500",
      textColor: "text-white",
      gradient: { from: "from-purple-500", to: "to-purple-600" },
    },
    {
      name: "ground",
      color: "bg-yellow-600",
      textColor: "text-white",
      gradient: { from: "from-yellow-600", to: "to-yellow-700" },
    },
    {
      name: "flying",
      color: "bg-blue-300",
      textColor: "text-black",
      gradient: { from: "from-blue-300", to: "to-blue-400" },
    },
    {
      name: "psychic",
      color: "bg-purple-400",
      textColor: "text-black",
      gradient: { from: "from-purple-400", to: "to-purple-500" },
    },
    {
      name: "bug",
      color: "bg-green-400",
      textColor: "text-black",
      gradient: { from: "from-green-400", to: "to-green-500" },
    },
    {
      name: "rock",
      color: "bg-yellow-700",
      textColor: "text-white",
      gradient: { from: "from-yellow-700", to: "to-yellow-800" },
    },
    {
      name: "ghost",
      color: "bg-purple-600",
      textColor: "text-white",
      gradient: { from: "from-purple-600", to: "to-purple-700" },
    },
    {
      name: "dragon",
      color: "bg-purple-900",
      textColor: "text-white",
      gradient: { from: "from-purple-900", to: "to-purple-800" },
    },
    {
      name: "dark",
      color: "bg-gray-800",
      textColor: "text-white",
      gradient: { from: "from-gray-800", to: "to-gray-900" },
    },
    {
      name: "steel",
      color: "bg-gray-500",
      textColor: "text-black",
      gradient: { from: "from-gray-500", to: "to-gray-600" },
    },
    {
      name: "fairy",
      color: "bg-pink-400",
      textColor: "text-black",
      gradient: { from: "from-pink-400", to: "to-pink-500" },
    },
  ];

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
            pokemonTypeStyles.length > 1
              ? pokemonTypeStyles[1].name
              : pokemonTypeStyles[0].name
          }
          className={`${
            pokemonTypeStyles.length > 1
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
