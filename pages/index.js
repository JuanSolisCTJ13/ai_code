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
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Korean Products Store" />
        <meta property="og:description" content="Best Korean products" />
        <meta
          property="og:image"
          content="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAAAAAA6fptVAAAADElEQVR4nGNgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII="
        />
        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Korean Products Store" />
        <meta name="twitter:description" content="Best Korean products" />
        <meta
          name="twitter:image"
          content="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAAAAAA6fptVAAAADElEQVR4nGNgYAAAAAMAAWgmWQ0AAAAASUVORK5CYII="
        />
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
