import { useState, useEffect } from "react";
// import "./adaptive.css";
import "./App.css";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";

import Navbar from "./components/navbar/Navbar";
import MainRoutes from "./routes/Routes";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

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
