import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Home from './home'
export default function Main() {
  return (
    <><Head>
        <title ></title>
    </Head>
      <Navbar />
      <div className={styles.container}>
 
        <div className={styles.main}>
          <Home />


           
        </div>


      </div>
    </>
  )
}
