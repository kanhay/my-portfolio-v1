import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
// import Services from "./components/Services";
// import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";


export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Projects />
    {/* <Services />
    <Work /> */}
    <Contact />
    <Footer />
    </>
  );
}
