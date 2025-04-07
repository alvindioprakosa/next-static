// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Homepage</h1>
      <p className="mb-2">This is the Homepage</p>
      <p>
        Visit the{" "}
        <Link href="/about" className="text-blue-600 hover:underline">
          About
        </Link>{" "}
        page.
      </p>
    </main>
  );
}
