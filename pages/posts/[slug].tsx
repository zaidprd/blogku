import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'

type PostPageProps = {
  preview?: boolean
  data: any
}

export default function PostPage({ preview, data }: PostPageProps) {
  const router = useRouter()

  if (!router.isFallback && !data?.post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <article>
      <h1>{data?.post?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data?.post?.content ?? '' }} />
    </article>
  )
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false, previewData }) => {
  // 🔑 pastikan slug selalu string
  const slug = Array.isArray(params?.slug) ? params?.slug[0] : params?.slug || ""

  const data = await getPostAndMorePosts(slug, preview, previewData)

  return {
    props: {
      preview,
      data,
    },
    revalidate: 10, // ISR: regenerate halaman tiap 10 detik
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }: any) => `/posts/${node.slug}`) || [],
    fallback: 'blocking',
  }
}
