import styles from "./Hero.module.css";

import EmailIcon from "../icons/EmailIcon";
import GithubIcon from "../icons/GithubIcon";
import IndeedIcon from "../icons/IndeedIcon";
import ResumeIcon from "../icons/ResumeIcon";

export default function hero() {
  return (
    <section id="hero" className={styles.heroSectionContainer}>
      <main className={styles.heroSection}>
        <aside>
          <h1>Hi. I'm Garrett, a Web Developer</h1>
          <p>I have a knack for solving problems and creating user-friendly applications. My positive attitude and eagerness to learn keep me adaptable and ready for new challenges.</p>
        </aside>

        <div>
          <EmailIcon />
          <GithubIcon />
          <IndeedIcon />
          <ResumeIcon />
        </div>
      </main>
    </section>
  );
}
