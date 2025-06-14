export default async function handler(req, res) {
  try {
    const response = await fetch('https://fakestoreapi.com/products?limit=3')
    const data = await response.json()
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' })
  }
}
