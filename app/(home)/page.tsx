import { redirect } from "next/navigation";

const HomePage = () => {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const pokemon = formData.get("pokemon").toString().trim().toLowerCase();

    redirect(`/pokemon/${pokemon}`);
  };

  return (
    <main>
      <form
        className="container mx-auto mt-12 flex justify-center space-x-3"
        action={handleSubmit}
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
