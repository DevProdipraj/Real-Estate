import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Projects from "./component/Projects";
import Testimonials from "./component/Testimonials";

function App() {
  return (
    <>
      <Header />
      <About />
      <Projects /> 
      <Testimonials/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
