import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <p>This is the Home page</p>
      <p>
        Visit in <Link href="/about">About</Link> page.
      </p>
    </div>
  );
};

export default Home;
