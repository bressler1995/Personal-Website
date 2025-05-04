import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrismPlus from 'rehype-prism-plus'

interface MDXCompilerProps {
  source: string
}

export default async function MDXCompiler({ source }: MDXCompilerProps) {
  const { content } = await compileMDX({
    source,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        rehypePlugins: [
          [rehypePrismPlus, { ignoreMissing: true }]
        ]
      }
    },
  })

  return content
} 