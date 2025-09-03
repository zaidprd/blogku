import { NextApiRequest, NextApiResponse } from 'next'
import { getPreviewPost } from '../../lib/api'

export default async function preview(req: NextApiRequest, res: NextApiResponse) {
  const { secret, id, slug } = req.query

  // Cek token preview
  if (secret !== process.env.WORDPRESS_PREVIEW_SECRET || (!id && !slug)) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // Pastikan slug dan id dalam bentuk string
  const postId = Array.isArray(id) ? id[0] : id
  const postSlug = Array.isArray(slug) ? slug[0] : slug

  // Ambil data post dari WordPress
  const post = await getPreviewPost(
    postId || postSlug,
    postId ? 'DATABASE_ID' : 'SLUG'
  )

  // Jika post tidak ada, hentikan preview
  if (!post) {
    return res.status(401).json({ message: 'Post not found' })
  }

  // Set preview mode
  res.setPreviewData({})

  // Redirect ke halaman post
  res.writeHead(307, { Location: `/posts/${post.slug}` })
  res.end()
}
