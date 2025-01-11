import Navbar from "./components/Nav";
import HeroComp from "./components/Hero";
import RatingComp from "./components/Rating";
import Featured from "./components/Featured";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Learn from "./components/Learn";
import Ready from "./components/Ready";
import Testimonial from "./components/Testimonial";
import Outro from "./components/Outro";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <div class="body">
        <HeroComp />
        <RatingComp />
        <Featured />
        <About />
        <Learn />
        <Ready />
        <Pricing />
        <Testimonial />
        <Outro />
        <Footer />
      </div>
    </div>
  );
}

export default App;
