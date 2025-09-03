import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allPosts, preview }) {
  const edges = allPosts?.edges || []
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`yajodoh ${CMS_NAME} Blog`}</title>
      </Head>
      <Container>
        <Intro />
        {heroPost ? (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        ) : (
          <p style={{ color: 'red' }}>Tidak ada postingan tersedia.</p>
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  try {
    const allPosts = await getAllPostsForHome(preview)

    return {
      props: { allPosts, preview },
      revalidate: 10,
    }
  } catch (error) {
    console.error('Error fetching posts:', error)

    return {
      props: { allPosts: { edges: [] }, preview },
      revalidate: 10,
    }
  }
}