import { useState } from 'react'
import styles from '../styles/Carousel.module.css'

const images = [
  'https://en.jolse.com/web/product/medium/202205/fd9cb9bce7bf8190a7f05a0f15ca1d76.jpg',
  'https://en.jolse.com/web/product/medium/202112/79fba399a097e3bc35c2c22fcf04e3d0.jpg',
  'https://en.jolse.com/web/product/medium/202103/6743b55b34a10a8d82be3251c5a85627.jpg',
]

export default function ProductCarousel() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((index - 1 + images.length) % images.length)
  const next = () => setIndex((index + 1) % images.length)

  return (
    <div className={styles.carousel}>
      <button onClick={prev}>Prev</button>
      <img src={images[index]} alt="Producto" />
      <button onClick={next}>Next</button>
    </div>
  )
}
