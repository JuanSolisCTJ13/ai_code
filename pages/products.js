export default function Products() {
  const items = [
    { id: 1, name: 'Kimchi', price: '$5.99' },
    { id: 2, name: 'Korean BBQ Sauce', price: '$7.99' },
    { id: 3, name: 'Gochujang', price: '$4.50' },
  ];

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
