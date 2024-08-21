import Banner from "./../../components/Banner";
import Splash from "./../../components/Splash";
import About from "./../../components/About";
import Experience from "./../../components/Experience";
import Projects from "./../../components/Projects";
import Contact from "./../../components/Contact";

export default function PortfolioLayout() {
  return (
    <>
      <Banner />
      <Splash />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}