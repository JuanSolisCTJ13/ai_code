import Head from 'next/head'
import ProductCarousel from '../components/ProductCarousel'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Korean Products Store</title>
        <meta name="description" content="Best Korean products" />
      </Head>
      <main>
        <h1>Bienvenido a la Tienda Coreana</h1>
        <p>Explora nuestra selección de productos coreanos.</p>
        <ProductCarousel />
      </main>
    </div>
  )
}
