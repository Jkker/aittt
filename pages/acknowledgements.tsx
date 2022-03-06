import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
const DEFAULT_LAYOUT = 'PostSimple'

// @ts-ignore
export const getStaticProps: GetStaticProps<{
  legalDetails: { mdxSource: string; frontMatter: AuthorFrontMatter }
}> = async () => {
  const legalDetails = await getFileBySlug('info', 'acknowledgements')
  const { mdxSource, frontMatter } = legalDetails
  return { props: { legalDetails: { mdxSource, frontMatter } } }
}

export default function About({ legalDetails }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { mdxSource, frontMatter } = legalDetails

  return (
    <>
      <PageSEO
        title={`Acknowledgements - ${siteMetadata.title}`}
        description={siteMetadata.description}
      />
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
    </>
  )
}
