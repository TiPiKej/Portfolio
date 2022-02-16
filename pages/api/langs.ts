import type { NextApiRequest, NextApiResponse } from 'next'

type Language = {
  name: string,
  description?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Language[]>
) {
  res.status(200).json([
    { name: 'John Doe1', description: 'test' },
    { name: 'John Doe2', description: 'test2' },
    { name: 'John Doe3', description: 'test3' },
    { name: 'John Doe4' },
    { name: 'John Doe5', description: 'test5' }
  ])
}
