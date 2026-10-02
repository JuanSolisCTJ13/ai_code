import type { NextApiRequest, NextApiResponse } from 'next'

const fallbackProducts = [
  {
    id: 1,
    title: 'Producto coreano 1',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=',
    price: 0,
  },
  {
    id: 2,
    title: 'Producto coreano 2',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=',
    price: 0,
  },
  {
    id: 3,
    title: 'Producto coreano 3',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=',
    price: 0,
  },
]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch('https://fakestoreapi.com/products?limit=3')
    const data = await response.json()
    res.status(200).json(data)
  } catch (err) {
    res.status(200).json(fallbackProducts)
  }
}
