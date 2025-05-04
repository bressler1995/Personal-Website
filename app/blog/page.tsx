import { promises as fs } from 'fs'
import path from 'path'
import Link from 'next/link'
import { BookOpen } from 'lucide-react'
import PageHero from '@/components/page-hero'

interface BlogPost {
  slug: string
  meta: {
    title: string
    date: string
    description: string
    tags: string[]
  }
}

async function getBlogPosts(): Promise<BlogPost[]> {
  const postsDirectory = path.join(process.cwd(), 'content/blog')
  const files = await fs.readdir(postsDirectory)
  
  const posts = await Promise.all(
    files.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename)
      const content = await fs.readFile(filePath, 'utf8')
      
      // Extract frontmatter
      const metaMatch = content.match(/^---\n([\s\S]*?)\n---/)
      const meta = metaMatch ? JSON.parse(metaMatch[1]) : {}
      
      return {
        slug: filename.replace(/\.mdx$/, ''),
        meta: {
          title: meta.title || 'Untitled',
          date: meta.date || new Date().toISOString(),
          description: meta.description || '',
          tags: meta.tags || [],
        },
      }
    })
  )
  
  return posts.sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime())
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div>
      <PageHero
        title="Blog"
        description="Technical articles, tutorials, and insights about web development and software engineering."
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-6 bg-card rounded-lg hover:bg-muted transition-colors"
            >
              <h2 className="text-2xl font-bold mb-2">{post.meta.title}</h2>
              <div className="flex items-center gap-4 text-muted-foreground mb-4">
                <time dateTime={post.meta.date}>
                  {new Date(post.meta.date).toLocaleDateString()}
                </time>
                <div className="flex gap-2">
                  {post.meta.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-muted rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {post.meta.description && (
                <p className="text-muted-foreground">{post.meta.description}</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 