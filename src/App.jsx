import "./App.css";

import "./assets/styles/App.scss";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Testimonial from "./components/Testimonial";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <Main />
      <Testimonial />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
