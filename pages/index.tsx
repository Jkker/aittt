import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AITTT</title>
        <meta
          name="description"
          content="Applied Internet Technology, Tips, and Tricks"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        AITTT
      </main>
    </>
  );
};

export default Home;
