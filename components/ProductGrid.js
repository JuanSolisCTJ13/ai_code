import styles from '../styles/ProductGrid.module.css'

const products = [
  {
    id: 1,
    name: 'Sérum de niacinamida',
    price: '$18.00',
    image: 'https://via.placeholder.com/200x200.png?text=Serum',
  },
  {
    id: 2,
    name: 'Protector solar SPF50',
    price: '$22.00',
    image: 'https://via.placeholder.com/200x200.png?text=Sunblock',
  },
  {
    id: 3,
    name: 'Crema hidratante',
    price: '$15.50',
    image: 'https://via.placeholder.com/200x200.png?text=Crema',
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
