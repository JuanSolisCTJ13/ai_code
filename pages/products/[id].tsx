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

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://fakestoreapi.com/products?limit=3')
  const products: Product[] = await res.json()
  const paths = products.map((product: Product) => ({
    params: { id: product.id.toString() }
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`https://fakestoreapi.com/products/${params?.id}`)
  const product: Product = await res.json()
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
