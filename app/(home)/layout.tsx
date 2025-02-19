import Link from "next/link";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="flex items-center justify-between bg-red-500 p-3 text-white">
        <h1 className="text-2xl font-bold">Pokedex</h1>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/"
                className="rounded-sm px-2 py-1 transition-colors duration-300 hover:bg-red-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="rounded-sm px-2 py-1 transition-colors duration-300 hover:bg-red-600"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </>
  );
};

export default HomeLayout;
