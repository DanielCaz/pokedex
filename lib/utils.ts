import { PokemonTypeStyle } from "../interfaces/PokemonTypeStyle";

export const smoothExponentially = (value: number, max: number): number => {
  var a = -max / Math.pow(max, 2);
  return a * Math.pow(value - max, 2) + max;
};

export const getStatDisplayRatio = (statValue: number): number => {
  var maxStat = 255;
  var smoothedValue = smoothExponentially(statValue, 255);
  return Math.round((smoothedValue / maxStat) * 100) / 100;
};

export const typeStyles: PokemonTypeStyle[] = [
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
