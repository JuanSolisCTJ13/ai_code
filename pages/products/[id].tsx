import Image from 'next/image'
import type { GetStaticPaths, GetStaticProps } from 'next'

interface Product {
  id: number
  image: string
  title?: string
  name?: string
  price: number | string
  description?: string
}

const fallbackProducts: Product[] = [
  { id: 1, title: 'Producto coreano 1', image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=', price: 0 },
  { id: 2, title: 'Producto coreano 2', image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=', price: 0 },
  { id: 3, title: 'Producto coreano 3', image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=', price: 0 },
]

export const getStaticPaths: GetStaticPaths = async () => {
  let products = fallbackProducts

  try {
    const res = await fetch('https://fakestoreapi.com/products?limit=3')
    if (res.ok) {
      const data: unknown = await res.json()
      if (Array.isArray(data)) products = data as Product[]
    }
  } catch {
    // Use fallback paths when the external catalog is unavailable during build.
  }

  const paths = products.map((product: Product) => ({
    params: { id: product.id.toString() }
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = Number(params?.id)
  let product = fallbackProducts.find(item => item.id === id) || fallbackProducts[0]

  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    if (res.ok) {
      const data: unknown = await res.json()
      if (data && typeof data === 'object' && 'id' in data) {
        product = data as Product
      }
    }
  } catch {
    // Use fallback product when the external catalog is unavailable at build time.
  }

  return { props: { product } }
}

export default function ProductDetail({ product }: { product: Product }) {
  const productName = product.title || product.name || 'Producto coreano'

  return (
    <div>
      <h1>{productName}</h1>
      <Image src={product.image} alt={productName} width={300} height={300} />
      <p>{typeof product.price === 'number' ? `$${product.price}` : product.price}</p>
      {product.description && <p>{product.description}</p>}
    </div>
  )
}
