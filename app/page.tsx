// app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to Next Static
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A modern static site built with Next.js, featuring fast performance and
          great developer experience.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="text-center">
        <Link
          href="/about"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Learn More
        </Link>
      </section>
    </div>
  );
}

const features = [
  {
    title: "Fast Performance",
    description: "Built with Next.js for optimal loading speeds and performance.",
  },
  {
    title: "Modern Stack",
    description: "Using the latest web technologies and best practices.",
  },
  {
    title: "Developer Experience",
    description: "Great developer experience with TypeScript and modern tooling.",
  },
];