"use client";

import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const pokemon = formData.get("pokemon").toString().trim().toLowerCase();

    router.push(`/pokemon/${pokemon}`);
  };

  return (
    <main>
      <form
        className="container mx-auto mt-12 flex justify-center space-x-3"
        onSubmit={handleSubmit}
      >
        <div className="grid">
          <label htmlFor="inputPokemon" className="text-gray-700">
            Pokemon
          </label>
          <input
            required
            type="text"
            name="pokemon"
            id="inputPokemon"
            className="rounded-md border border-gray-300 p-2"
          />
        </div>
        <button
          type="submit"
          className="mt-auto rounded-md bg-teal-500 p-2 text-white"
        >
          Search
        </button>
      </form>
    </main>
  );
};

export default HomePage;
