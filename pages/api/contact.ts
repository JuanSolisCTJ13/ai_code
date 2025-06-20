import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  const { name, email, message } = req.body || {}

  try {
    console.log('Contact form submission:', { name, email, message })
    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Error handling contact form:', err)
    return res.status(500).json({ success: false })
  }
}
