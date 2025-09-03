import { NextApiRequest, NextApiResponse } from "next"
import { getPreviewPost } from "../../lib/api"

export default async function preview(req: NextApiRequest, res: NextApiResponse) {
  const { id, slug } = req.query

  // pastikan id & slug jadi string
  const idString = Array.isArray(id) ? id[0] : id
  const slugString = Array.isArray(slug) ? slug[0] : slug

  if (!idString && !slugString) {
    return res.status(400).json({ message: "Missing id or slug" })
  }

  const post = await getPreviewPost(
    idString || slugString,
    idString ? "DATABASE_ID" : "SLUG"
  )

  if (!post) {
    return res.status(401).json({ message: "Post not found" })
  }

  res.setPreviewData({})
  res.writeHead(307, { Location: `/posts/${post.slug}` })
  res.end()
}
