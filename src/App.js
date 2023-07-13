import { useState, useEffect, useContext } from "react";
// import "./adaptive.css";
import "./App.css";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";

import Navbar from "./components/navbar/Navbar";
import { pageContext } from "./contexts/PageContext/PageContext";
import MainRoutes from "./routes/Routes";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const { main } = useContext(pageContext);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [main]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <MainRoutes />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
