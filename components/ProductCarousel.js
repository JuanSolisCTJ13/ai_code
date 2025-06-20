import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/Carousel.module.css'

export default function ProductCarousel() {
  const [items, setItems] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data =>
        setItems(
          data.map(p => ({ src: p.image, title: p.title || p.name }))
        )
      )
  }, [])

  const prev = () => setIndex((index - 1 + items.length) % items.length)
  const next = () => setIndex((index + 1) % items.length)

  if (!items.length) return null

  return (
    <div className={styles.carousel}>
      <button onClick={prev} aria-label="Previous image">Prev</button>
      <Image
        src={items[index].src}
        alt={items[index].title || 'Product image'}
        width={300}
        height={300}
      />
      <button onClick={next} aria-label="Next image">Next</button>
    </div>
  )
}
