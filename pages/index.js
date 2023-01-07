import { Box, Card, CardContent, CardHeader, CardMedia } from '@mui/material';
import Head from 'next/head'
import styles from '../styles/Home.module.css';

export default function Home() {
  const skills = [
    {
      name: 'Java',
      imageSrc: '/java.png',
      desc: 'I have more than 6 years of professional Experience using Java.'
    },
    {
      name: 'JavaScript',
      imageSrc: '/javascript.png',
      desc: 'I have more than 6 years of professional Experience using JavaScript.'
    },
    {
      name: 'React',
      imageSrc: '/react.png',
      desc: 'Professional experience migrating legacy application to React. Work on personal projects, including the projects listed below.'
    }
  ];

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Hello. I am Tucker Bichsel.</h1>
        <div className={styles.experiences} >
          {skills.map(skill =>
            <>
              <div className={styles.skillName}>
                {skill.name}
                <Box
                  component="img"
                  sx={{
                    marginTop: '20px',
                    width: '20%'
                  }}
                  alt="Java"
                  src={skill.imageSrc}
                />
              </div>
              <div>{skill.desc}</div>
            </>
          )}
        </div>
        <h2 className={styles.projectsTitle}>Personal Projects</h2>
        <div className={styles.projects}>
          <Card className={styles.projectCard} >
            <CardHeader className={styles.cardHeader}
              title="DVC Calculator" />
            <CardMedia className={styles.cardImage}
              component="img"
              image="/dvcCalc.png"
              alt="DVC Calc"
            />
            <CardContent>This is a calculator to plan disney trips. <a className='link' href="https://dvc-calc.tucker-dev.com">DVC Calculator</a></CardContent>
          </Card>
          <Card className={styles.projectCard}>
            <CardHeader className={styles.cardHeader}
              title="Memory Social" />
            <CardMedia className={styles.cardImage}
              component="img"
              image="/memorySocial.png"
              alt="Merory Social"
            />
            <CardContent>This is a social media application where the posts do not live forever and instead turn into memories. <a className='link' href="https://memory-social.tucker-dev.com">Memory Social</a></CardContent>
          </Card>
        </div>
        <div className={styles.footer}>
          <p className={styles.footerLeft}>Tucker Bichsel</p>
          <p className={styles.footerRight}>2023</p>
        </div>
      </main>
    </>
  )
}
