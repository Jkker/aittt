import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'

const DEFAULT_LAYOUT = 'PostSimple'

// @ts-ignore
export const getStaticProps: GetStaticProps<{
  legalDetails: { mdxSource: string; frontMatter: AuthorFrontMatter }
}> = async () => {
  const legalDetails = await getFileBySlug('info', 'legal')
  const { mdxSource, frontMatter } = legalDetails
  return { props: { legalDetails: { mdxSource, frontMatter } } }
}

export default function About({ legalDetails }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { mdxSource, frontMatter } = legalDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
