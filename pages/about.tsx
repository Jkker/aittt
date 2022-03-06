import { getAllFilesFrontMatter, getFiles } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { AuthorFrontMatter } from 'types/AuthorFrontMatter'
import Link from '@/components/Link'
import Avatar from '@/components/AvatarImage'
export const getStaticProps: GetStaticProps<{
  authors
}> = async () => {
  const authors = await getAllFilesFrontMatter('authors')

  return { props: { authors } }
}

const AuthorInfo = ({ name, avatar, occupation }) => {
  return (
    <Link href={`/authors/${name}`}>
      <div className="flex flex-col items-center gap-2 rounded-md p-6 shadow-md transition hover:shadow-lg dark:bg-gray-800">
        {/* <span className={color + ' ' + 'h-12 w-full rounded-t-md'}></span> */}
        <Avatar name={name} avatar={avatar} />
        <h3 className="text-center text-lg font-bold ">{name}</h3>
        <p className="text-center text-gray-500 dark:text-gray-400">{occupation ?? 'Staff'}</p>
      </div>
    </Link>
  )
}

export default function Post({ authors }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={`About - ${siteMetadata.title}`} description={siteMetadata.description} />
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Staff
        </h1>
        <div className="grid gap-8 pt-8 sm:grid-cols-2 md:grid-cols-3">
          {authors.map((author) => (
            <AuthorInfo {...author} key={author.name} />
          ))}
        </div>
      </div>
      {/* <pre>{JSON.stringify(authors, null, 2)}</pre> */}
      {/* <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      /> */}
    </>
  )
}
