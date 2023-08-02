"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Something went wrong!</h2>
        <button
          className="rounded bg-teal-500 px-4 py-2 text-white"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
      <hr className="border-1 my-4 border-gray-300" />
      <div className="text-gray-700">
        <strong>Message:</strong>
        <br />
        <pre>{error.message}</pre>
        <strong>Stack:</strong>
        <br />
        <pre>{error.stack}</pre>
        <strong>Digest:</strong>
        <br />
        <pre>{error.digest}</pre>
      </div>
    </div>
  );
}
