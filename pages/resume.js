import Link from 'next/link';
import styles from '../styles/Resume.module.css';

export default function ResumePage() {
  return (
    <div>
      <main className={styles.main}>
        <h1>Tucker's Resume</h1>
        <div className={styles.summary}>
        Software Engineer with 5+ years of experience Java and JavaScript, including several different frameworks, who is comfortable learning new skills to achieve a goal. Designs and implements both bug fixes and new features. Strong team member dedicated to making sure requirements are delivered timely and accurately while ensuring all team members feel included and heard throughout the process.
        </div>
        <h2>Time Line</h2>
        <div className={styles.workBlock}>
          <p className={styles.dateRange}>2017-current</p>
          <p className={styles.roleTitle}>Current Job</p>
          <p className={styles.roleDesc}>This is my current role and the responsibilities I hold here.</p>
        </div>
        <div className={styles.workBlock}>
          <p className={styles.dateRange}>2016-2017</p>
          <p className={styles.roleTitle}>Last Job</p>
          <p className={styles.roleDesc}>This is my Last job where I learned some stuff.</p>
        </div>
        <div className={styles.workBlock}>
          <p className={styles.dateRange}>2009-2017</p>
          <p className={styles.roleTitle}>School</p>
          <p className={styles.roleDesc}>Tis is where my software development life began</p>
        </div>
      </main>
    </div>
  )
}