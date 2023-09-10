import "./App.css";
import "./styles/About.css"
import "./styles/Navbar.css"
import "./styles/Offer.css"
import "./styles/Footer.css"
import "./styles/Header.css"
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Offer from "./components/Offer/Offer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Offer />
      <Footer />
    </>
  );
}

export default App;
