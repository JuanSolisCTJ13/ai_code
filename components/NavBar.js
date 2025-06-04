import Link from 'next/link'
import styles from '../styles/NavBar.module.css'

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/products">Productos</Link></li>
      </ul>
    </nav>
  )
}
