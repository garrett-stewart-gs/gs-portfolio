import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import styles from "./Portfolio.module.css";

export default function PortfolioLayout() {
  return (
    <>
      <Banner />
      <main className={styles.mainSection}>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
