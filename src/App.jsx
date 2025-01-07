import Navbar from "./components/Nav";
import HeroComp from "./components/Hero";
import RatingComp from "./components/Rating";
import Featured from "./components/Featured";
import About from "./components/About";
import Learn from "./components/Learn";
import Ready from "./components/Ready";
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
        {/* Pricing */}
        {/* Testimonial */}
        {/* Sub footer */}
        {/* footer */}
      </div>
    </div>
  );
}

export default App;
