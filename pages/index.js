import Head from 'next/head'
import { useState } from 'react'
import ProductCarousel from '../components/ProductCarousel'
import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Mensaje"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Enviar</button>
          </form>
          {status === 'success' && <p>Gracias por tu mensaje.</p>}
          {status === 'error' && (
            <p>Hubo un error al enviar el mensaje.</p>
          )}
        </section>
      </main>
    </div>
  )
}
