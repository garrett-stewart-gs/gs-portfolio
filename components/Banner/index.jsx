import Link from "next/link";

import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <nav className={styles.bannerContainer}>
      <main className={styles.banner}>
        <div>
          <Link href="#hero" scroll={true}>
            Garrett Stewart | Web Developer
          </Link>
        </div>

        <div>
          <Link href="#about" scroll={true}>
            About
          </Link>
          <Link href="#projects" scroll={true}>
            Projects
          </Link>
          <Link href="#experience" scroll={true}>
            Experience
          </Link>
          <Link href="#contact" scroll={true}>
            Contact
          </Link>
        </div>
      </main>
    </nav>
  );
}
