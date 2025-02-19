import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Not found!</h2>
        <Link href="/" className="rounded-sm bg-black px-2 py-1 text-white">
          Return Home
        </Link>
      </div>
      <hr className="border-1 my-4 border-gray-300" />
      <div className="text-gray-700">
        Could not find the pokemon you were looking for.
      </div>
    </div>
  );
}
