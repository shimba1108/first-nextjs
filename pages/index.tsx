import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useAuthentication } from '../hooks/authentication'
import Link from "next/link"


export default function Home() {
  const {user} = useAuthentication()
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/page2">
        <a>Page2</a>
      </Link>

      <p>{user?.uid || "未ログイン"}</p>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
