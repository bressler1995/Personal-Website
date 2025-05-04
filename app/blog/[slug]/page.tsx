import { promises as fs } from 'fs'
import path from 'path'
import BlogLayout from '@/components/blog-layout'
import MDXCompiler from '@/components/mdx-compiler'

interface BlogPost {
  content: string
  meta: {
    title: string
    date: string
    description: string
    tags: string[]
  }
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`)
    const content = await fs.readFile(filePath, 'utf8')
    
    // Extract frontmatter
    const metaMatch = content.match(/^---\n([\s\S]*?)\n---/)
    const meta = metaMatch ? JSON.parse(metaMatch[1]) : {}
    
    // Remove frontmatter from content
    const mdxContent = content.replace(/^---\n[\s\S]*?\n---/, '')
    
    return {
      content: mdxContent,
      meta: {
        title: meta.title || 'Untitled',
        date: meta.date || new Date().toISOString(),
        description: meta.description || '',
        tags: meta.tags || [],
      },
    }
  } catch (error) {
    return null
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

  const compiledContent = await MDXCompiler({ source: post.content })

  return (
    <BlogLayout meta={post.meta}>
      <div className="prose prose-invert max-w-none">
        {compiledContent}
      </div>
    </BlogLayout>
  )
} 