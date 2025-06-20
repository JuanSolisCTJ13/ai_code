import Link from 'next/link'
import styles from '../styles/Hero.module.css'

export default function Custom404() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>404 - Página no encontrada</h1>
        <p>No pudimos encontrar la página que buscas.</p>
        <Link href="/" className={styles.cta}>Volver al inicio</Link>
      </div>
    </section>
  )
}
