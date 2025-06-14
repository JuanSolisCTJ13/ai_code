import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/Carousel.module.css'

export default function ProductCarousel() {
  const [images, setImages] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setImages(data.map(p => p.image)))
  }, [])

  const prev = () => setIndex((index - 1 + images.length) % images.length)
  const next = () => setIndex((index + 1) % images.length)

  if (!images.length) return null

  return (
    <div className={styles.carousel}>
      <button onClick={prev}>Prev</button>
      <Image src={images[index]} alt="Producto" width={300} height={300} />
      <button onClick={next}>Next</button>
    </div>
  )
}
