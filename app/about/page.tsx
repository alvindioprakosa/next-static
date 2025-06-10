// app/about/page.tsx (Next.js 13+ with App Router)

import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About - Next Static",
  description: "Learn more about our Next.js static site",
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
        <p className="text-xl text-gray-600">
          Learn more about our mission and technology stack
        </p>
      </section>

      <section className="prose prose-lg mx-auto">
        <h2>Our Mission</h2>
        <p>
          We are dedicated to creating high-performance, modern web applications
          using cutting-edge technologies. Our focus is on delivering the best
          possible user experience while maintaining excellent developer
          productivity.
        </p>

        <h2>Technology Stack</h2>
        <ul>
          <li>
            <strong>Next.js</strong> - React framework for production
          </li>
          <li>
            <strong>TypeScript</strong> - For type safety and better developer
            experience
          </li>
          <li>
            <strong>Tailwind CSS</strong> - For rapid UI development
          </li>
          <li>
            <strong>ESLint & Prettier</strong> - For code quality and consistency
          </li>
        </ul>

        <h2>Why Next.js?</h2>
        <p>
          Next.js provides an excellent developer experience with features like:
        </p>
        <ul>
          <li>Server-side rendering</li>
          <li>Static site generation</li>
          <li>API routes</li>
          <li>Built-in CSS support</li>
          <li>Automatic code splitting</li>
        </ul>
      </section>
    </div>
  );
}