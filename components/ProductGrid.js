import styles from '../styles/ProductGrid.module.css'

const products = [
  {
    id: 1,
    name: 'Sérum de niacinamida',
    price: '$18.00',
    image: 'https://source.unsplash.com/200x200/?serum',
  },
  {
    id: 2,
    name: 'Protector solar SPF50',
    price: '$22.00',
    image: 'https://source.unsplash.com/200x200/?sunscreen',
  },
  {
    id: 3,
    name: 'Crema hidratante',
    price: '$15.50',
    image: 'https://source.unsplash.com/200x200/?moisturizer',
  },
]

export default function ProductGrid() {
  return (
    <section className={styles.grid}>
      {products.map(product => (
        <div key={product.id} className={styles.card}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p className={styles.price}>{product.price}</p>
        </div>
      ))}
    </section>
  )
}
