import styles from '../styles/Resume.module.css';

const positions = [
  {
    name: 'Reinsurance Group of America',
    title: 'Senior Software Engineer',
    dateRange: '2017-current',
    details: [
      'Java, JavaScript, CSS, HTML, React, Node.js, Go, Groovy, Jenkins, Docker, RESTful services, Oracle SQL, git, sonarcube, JUnit, JMockit, IntelliJ, Agile',
      'Maintain and implement new functionality for an admin application used by local offices',
      'Create new and migrated existing User Interfaces to single-page- application using React',
      'Phased migration from monolith legacy application to micro-services using Node and Go',
      'Improve test coverage using TDD, JUnit, and JMockit',
      'Create and modify Dockerfiles and Jenkinsfiles to create and build artifacts for deploying to a docker stack',
      'Create and Update Jenkins jobs to build and deploy',
      'Design and story board new features from requirements',
      'Work with team members to estimate, groom, and point stories',
      'Investigate and resolve production issues by debugging both backend and frontend code',
      'Work with business partners to prioritize work'
    ]
  },
  {
    name: 'Bunge North America',
    title: 'Software Developer Intern',
    dateRange: '2016-2017',
    details: [
      'Use a Java backend with JSP, HTML, CSS, JavaScript frontend to maintain existing and create new features on a website run on SAP Portal',
      'Create and maintain RESTful web services with Spring and use AJAX calls in JavaScript to access endpoints',
      'Build user management application with JavaScript framework OpenUI5 frontend and REST endpoints for the backend. Also migrated Data from RMDBS to MongoDB',
      'Use JMS to send Email and SMS notifications to admins and end users',
      'Developed code in Eclipse IDE, used Subversion version control, built projects using Maven',
      'Use Splunk as a monitoring tool to view server logs to debug reported issues',
      'Work in a team environment with weekly status meetings to discuss current projects and plan future development'
    ]
  },
  {
    name: 'Southern Illinois University Edwardsville',
    title: 'Computer Science',
    dateRange: '2009-2017'
  }
];

export default function ResumePage() {
  return (
    <div>
      <main className={styles.main}>
        <h1>Tucker&apos;s Resume</h1>
        <div className={styles.summary}>
          Software Engineer with 5+ years of experience Java and JavaScript, including several different frameworks, who is comfortable learning new skills to achieve a goal. Designs and implements both bug fixes and new features. Strong team member dedicated to making sure requirements are delivered timely and accurately while ensuring all team members feel included and heard throughout the process.
        </div>
        <h2>Time Line</h2>
        {positions.map((position, index) => 
          <div key={index} className={styles.workBlock}>
            <p className={styles.dateRange}>{position.dateRange}</p>
            <p className={styles.company}>{position.name}</p>
            <p className={styles.roleTitle}>{position.title}</p>
            <p className={styles.roleDesc}>
              <ul>
                {position.details?.map((detail, index) => 
                  <li key={index}>{detail}</li>
                )}
              </ul>
            </p>
          </div>
        )}
      </main>
    </div>
  )
}