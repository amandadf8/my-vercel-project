import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">
        Halo, Ini Project Vercel Saya!
      </h1>

      <p className="mt-4">
        Berhasil di-deploy lewat Git.
      </p>
    </main>
  );
}