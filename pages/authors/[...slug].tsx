import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'
import fs from 'fs'
import PageTitle from '@/components/PageTitle'
import generateRss from '@/lib/generate-rss'
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '@/lib/mdx'
import { PostFrontMatter } from 'types/PostFrontMatter'
import { Toc } from 'types/Toc'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticPaths() {
  const posts = getFiles('authors')
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}
// @ts-ignore
export const getStaticProps: GetStaticProps<{
  authorDetails: { mdxSource: string; frontMatter: AuthorFrontMatter }
}> = async ({ params }) => {
  const slug = (params.slug as string[]).join('/')
  const authorDetails = await getFileBySlug<AuthorFrontMatter>('authors', slug)
  const { mdxSource, frontMatter } = authorDetails
  return { props: { authorDetails: { mdxSource, frontMatter } } }
}

export default function About({ authorDetails }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
