import Head from 'next/head'
import Image from 'next/image'


import Bio from '../components/sectionOne/index'
import Nav from '../components/nav/index'
import styles from '../styles/Home.module.css'

import Buritica from '../public/img/buritica1.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Buritca</title>
        <meta name="Buritica" content="Generated by create next app" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      
      <main>
        
        <div className={styles.buritica_img_container}>
          <Image
            alt="buritica_img"
            className={styles.buritica_img}
            src={Buritica}
          />
        </div>
        <div className={styles.nav_container}>
          <Nav className={styles.nav}/>
        </div>
        <Bio/>
        
      </main>
      <style jsx>{`
        
      `}</style>

      
      
    </div>
  )
}
