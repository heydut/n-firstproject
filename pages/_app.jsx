import Head from "next/head";
import Navbar from "../components/Navbar";
import "../styles/global.scss";

const App = ({ Component, pageProps }) => {

  return (
    <>
      <Head>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <Component {...pageProps} />
    </>
  );
};

export default App;
