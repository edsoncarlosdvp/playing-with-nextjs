import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import LoginNextAuth from './login-next-auth'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Application</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" />
      </Head>
      <main>
        <LoginNextAuth />
      </main>
    </div>
  )
}
