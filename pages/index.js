import Head from 'next/head'
import ProductCarousel from '../components/ProductCarousel'
import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Korean Products Store</title>
        <meta name="description" content="Best Korean products" />
      </Head>
      <main>
        <Hero />
        <h2>Productos en tendencia</h2>
        <ProductGrid />
        <ProductCarousel />
        <section id="contacto">
          <h2>Contáctanos</h2>
          <p>Escríbenos a contacto@example.com</p>
        </section>
      </main>
    </div>
  )
}
