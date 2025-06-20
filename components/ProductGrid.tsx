import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/ProductGrid.module.css'
import Link from "next/link"

interface Product {
  id: number
  image: string
  title?: string
  name?: string
  price: number | string
  description?: string
}

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then((data: Product[]) => setProducts(data))
  }, [])

  return (
    <section className={styles.grid}>
      {products.map((product: Product) => (
        <Link key={product.id} href={`/products/${product.id}`} className={styles.card}>
          <Image src={product.image} alt={product.title || product.name} width={200} height={200} />
          <h3>{product.title || product.name}</h3>
          <p className={styles.price}>
            {typeof product.price === 'number' ? `$${product.price}` : product.price}
          </p>
        </Link>
      ))}
    </section>
  )
}

