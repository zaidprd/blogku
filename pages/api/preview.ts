import { NextApiRequest, NextApiResponse } from "next"
import { getPreviewPost } from "../../lib/api"

export default async function preview(req: NextApiRequest, res: NextApiResponse) {
  const { id, slug } = req.query

  // Pastikan id & slug berupa string tunggal
  const idString = Array.isArray(id) ? id[0] : id
  const slugString = Array.isArray(slug) ? slug[0] : slug

  if (!idString && !slugString) {
    return res.status(400).json({ message: "Missing id or slug" })
  }

  // Fetch WordPress untuk cek apakah `id` atau `slug` valid
  const post = await getPreviewPost(
    idString || slugString,              // ambil salah satu yang tersedia
    idString ? "DATABASE_ID" : "SLUG"    // tentukan jenis ID
  )

  // Kalau post tidak ada, hentikan preview mode
  if (!post) {
    return res.status(401).json({ message: "Post not found" })
  }

  // Aktifkan preview mode dan redirect ke slug post
  res.setPreviewData({})
  res.writeHead(307, { Location: `/posts/${post.slug}` })
  res.end()
}
