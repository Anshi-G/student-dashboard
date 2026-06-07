"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
      <div>
        <h1 className="text-3xl font-bold">Something went wrong</h1>

        <p className="mt-4 text-red-400">{error.message}</p>
      </div>
    </div>
  );
}
