import Navbar from "../UI/organisms/Navbar";
import Home from "../sections/Home";
import About from "../sections/About";
import Pricing from "../sections/Pricing";
import Contact from "../sections/Contact";
function LandingPage() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Pricing />
      <Contact />
    </main>
  );
}

export default LandingPage;
