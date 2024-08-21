import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.aboutSectionContainer}>
      <main className={styles.aboutSection}>
        <h1>Introduction</h1>
        <p>I enjoy creating web applications that practical and visually stunning... etc. </p>
        <div>Fullstack Web Developer</div>
        <div>ReactJS Developer</div>
        <div>Entrepreneur... soon</div>
      </main> 
    </section>
  );
}
