"use client";

import { useEffect } from "react";

export default function Error({ error, unstable_retry }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-zinc-50 flex items-center justify-center px-4">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold text-zinc-800">
          Something went wrong
        </h2>
        <p className="text-zinc-500">{error.message}</p>
        <button
          onClick={unstable_retry}
          className="bg-black text-white px-4 py-2 rounded hover:bg-zinc-800 cursor-pointer"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
