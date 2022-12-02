import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.scss'

export default ()=> {
  return (
    <div className={styles.container}  >
        <Head>
        <title>Brutus Portfolio</title>
        <meta name="description" content="personal web page for Mudau Brutus Vhutshilo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div  className={styles.navigation}>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>

        </div>
      <div id="about" className={styles.identity}>
      <div className={styles.logoImage}>
      <Image src="/Brutus.jpeg" alt="Vercel Logo" width={100} height={100} />
      </div>
      <div className={styles.text}>
        <div className={styles.name}>Mudau Brutus Vhutshilo</div>
      
<div className={styles.description}>Fullstack Developer,Agile Developer</div>
      </div>
     </div>
     <div id="skills" className={styles.skills}>
      <div className={styles.title}>Skills</div>
      <div className={styles.row}>
        <div className={styles.left}>Programming Languages</div>

        <div className={styles.right}>JavaScript,Solidity,Html,php,java, and python</div>

      </div>
      <div className={styles.row}>
        <div className={styles.left}>Frontend</div>

        <div className={styles.right}>React js.nextjs.html,css/SCSS,Vanilla,Javascript,php,JQuery</div>

      </div>
      <div className={styles.row}>
        <div className={styles.left}>Backend</div>

        <div className={styles.right}>Node js,Express js</div>

      </div>
    

     </div>
     
     <div id="projects" className={styles.projects}>
     <div className={styles.title}>Projects</div>
     <div className={styles.row}>
        <div className={styles.left}>Blockchain Enabled E-voting</div>

        <div className={styles.right}>UJ students election voting,created with solidity,javascript,css,and html</div>

      </div>
      <div className={styles.row}>
        <div className={styles.left}>MP4 And Mp3 player</div>

        <div className={styles.right}>People can play music and watch videos. created with java</div>

      </div>
    
     </div>
     </div>
    
    /*<div className={styles.container}>
    

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            
          </span>
        </a>
      </footer>
    </div>
    */
  )
}
