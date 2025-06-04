import styles from '../styles/Hero.module.css'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Descubre la belleza de la cosmética coreana</h1>
        <p>Productos originales, envío rápido y consejos de skincare.</p>
        <Link href="/products" className={styles.cta}>Ver novedades</Link>
      </div>
    </section>
  )
}
