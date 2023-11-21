import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <input className={styles.input} type='text' placeholder='INPUT MUSIC' />
    </main>
  )
}
