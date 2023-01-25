import Head from "next/head";

function HomePage() {
  console.log("[Homepage] render");
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <h1>Home</h1>
      </main>
    </>
  );
}

export default HomePage;
