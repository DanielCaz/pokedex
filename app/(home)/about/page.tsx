const AboutPage = () => {
  return (
    <main>
      <h1 className="mt-8 text-center text-4xl">About Page</h1>
      <p className="mt-4 text-center">
        This is a simple Pokedex app built with Next.js and TailwindCSS.
      </p>
      <p className="mt-4 text-center">
        It uses the{" "}
        <a
          href="https://pokeapi.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          PokeAPI
        </a>{" "}
        to fetch data.
      </p>
    </main>
  );
};
export default AboutPage;
