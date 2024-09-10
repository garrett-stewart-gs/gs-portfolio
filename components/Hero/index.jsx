import styles from "./Hero.module.css";

import EmailIcon from "../icons/EmailIcon";
import GithubIcon from "../icons/GithubIcon";
import IndeedIcon from "../icons/IndeedIcon";
import ResumeIcon from "../icons/ResumeIcon";

import TypingText from "./TypingText";

export default function hero() {


  return (
    <section id="hero" className={styles.heroSectionContainer}>
      <main className={styles.heroSection}>
        <aside>
          <TypingText messageStr={"Hi. I'm Garrett"} headingType={"h1"} />

          <TypingText messageStr={"Full-Stack Web Developer"} headingType={"h2"} />

          <TypingText messageStr={"I Craft Engaging Digital Experiences And Practical Solutions For The Web"} headingType={"h3"} />
        </aside>

        <div>
          <ResumeIcon />
          <GithubIcon />
          <IndeedIcon />
          <EmailIcon />
        </div>
      </main>
    </section>
  );
}
