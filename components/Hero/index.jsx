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

          <div>
            <TypingText messageStr={"Hi."} headingTypeStr={"h1"} startDelayInt={0} />
            <TypingText messageStr={"I'm"} headingTypeStr={"h1"} startDelayInt={1000} />
            <TypingText messageStr={"Garrett"} headingTypeStr={"h1"} startDelayInt={1375} />
          </div>

          <TypingText messageStr={"Full-Stack Web Developer"} headingTypeStr={"h2"} startDelayInt={3000} />

          <TypingText messageStr={"I Craft Engaging Digital Experiences And Practical Solutions For The Web"} headingTypeStr={"h3"} startDelayInt={6000} typingSpeedInt={50} />
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
