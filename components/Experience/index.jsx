import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={styles.experienceSectionContainer}>
      <main className={styles.experienceSection}>
        <article>
          <h1>Jun 2024 - Present</h1>
          <div>
            <h1>Self-Study</h1>
            <h2>Fullstack Web Development Bootcamp</h2>
            <ul>
              <li>NextJS</li>
              <li>HTMX</li>
              <li>Typescript</li>
            </ul>
          </div>
        </article>

        <article>
          <h1>Jan 2024 - Jun 2024</h1>
          <div>
            <h1>Lighthouse Labs</h1>
            <h2>Fullstack Web Development Bootcamp</h2>
            <ul>
              <li>Graduated...</li>
              <li>final project</li>
              <li>midterm project</li>
              <li>some technologies learned</li>
            </ul>
          </div>
        </article>

        <article>
          <h1>Jun 2022 - Sep 2024</h1>
          <div>
            <h1>Fresh Air Cinema</h1>
            <h2>Operations Manager</h2>
            <ul>
              <li>Ensure operational readiness by maintaining or arranging testing and repair for 6 AV equipment kits, 6 vehicles, and 7 trailers</li>
              <li>Recruit, train, and manage 12 event staff to fulfill up to 6 events per day, each summer</li>
              <li>Implement strategic allocation of company assets and personnel during multi-event days ensuring all 6 crews are equipped for success</li>
            </ul>
          </div>
        </article>

        <article>
          <h1>Jun 2018 - Jun 2022</h1>
          <div>
            <h1>Fresh Air Cinema</h1>
            <h2>Event Coordinator</h2>
            <ul>
              <li>Coordinate logistics between clients and Fresh Air Media for 30 events per week, ensuring smooth operations</li>
              <li>Communicate rapidly via email and phone to manage outstanding concerns for individual events throughout the month-long planning stage</li>
              <li>Organize and compile event details for staff to successfully execute events across Alberta and Saskatchewan</li>
            </ul>
          </div>
        </article>

        <article>
          <h1>Sep 2016 - Apr 2018</h1>
          <div>
            <h1>Red Deer Polytechnic</h1>
            <h2>Electrical Engineering Technology</h2>
            <ul>
              <li>Introducted to the world of programming using C++</li>
              <li>Troubleshooting and solving operational problems, mathematical problems</li>
              <li>Organize and compile event details for staff to successfully execute events across Alberta and Saskatchewan</li>
            </ul>
          </div>
        </article>

      </main>
    </section>
  );
}
