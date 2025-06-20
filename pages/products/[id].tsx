import Image from 'next/image'
import type { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://fakestoreapi.com/products?limit=3')
  const products = await res.json()
  const paths = products.map(product => ({
    params: { id: product.id.toString() }
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`https://fakestoreapi.com/products/${params?.id}`)
  const product = await res.json()
  return { props: { product } }
}

interface Product {
  id: number
  image: string
  title?: string
  name?: string
  price: number | string
  description?: string
}

export default function ProductDetail({ product }: { product: Product }) {
  return (
    <div>
      <h1>{product.title || product.name}</h1>
      <Image src={product.image} alt={product.title || product.name} width={300} height={300} />
      <p>{typeof product.price === 'number' ? `$${product.price}` : product.price}</p>
      {product.description && <p>{product.description}</p>}
    </div>
  )
}
