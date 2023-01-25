import Navbar from "../components/Navbar";

const App = ({ Component, pageProps }) => {
  console.log("[App] render");
  return (
    <div>
      <>
        <header>
          <Navbar />
        </header>
        <Component {...pageProps} />
      </>
    </div>
  );
};

export default App;
