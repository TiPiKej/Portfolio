import type { NextApiRequest, NextApiResponse } from 'next'

type Page = {
  name: string,
  url: string,
  thumbnailUrl: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Page[]>
) {
  res.status(200).json([
    { name: 'John Doe', url: 'test', thumbnailUrl: 'testUrl' },
    { name: 'John Doe', url: 'test', thumbnailUrl: 'testUrl' },
    { name: 'John Doe', url: 'test', thumbnailUrl: 'testUrl' },
    { name: 'John Doe', url: 'test', thumbnailUrl: 'testUrl' }
  ])
}
