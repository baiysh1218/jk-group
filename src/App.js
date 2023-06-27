import "./adaptive.css";
import "./App.css";
import Footer from "./components/footer/Footer";

import Navbar from "./components/navbar/Navbar";
import MainRoutes from "./routes/Routes";

function App() {
  return (
    <>
      <Navbar />

      <MainRoutes />
      <Footer />
    </>
  );
}

export default App;
