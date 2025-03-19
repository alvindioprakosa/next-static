import Link from "next/link";

const Home = () => {
  return (
    <main>
      <h1>Homepage</h1>
      <p>This is the Homepage</p>
      <p>
        Visit the <Link href="/about">About</Link> page.
      </p>
    </main>
  );
};

export default Home;
