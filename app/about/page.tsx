// app/about/page.tsx (Next.js 13+ with App Router)

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">About</h1>
      <p className="mb-2">This is the About page of the app built with Next.js.</p>
      <div>
        Back to <Link href="/" className="text-blue-600 hover:underline">Home</Link>
      </div>
    </main>
  );
}