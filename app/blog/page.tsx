import { promises as fs } from 'fs'
import path from 'path'
import Link from 'next/link'
import { BookOpen, Calendar, Tag } from 'lucide-react'
import PageHero from '@/components/page-hero'
import PageTransitionLayout from '@/components/page-transition-layout'

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
    <PageTransitionLayout>
      <div>
        <PageHero
          title="Blog"
          description="Technical articles, tutorials, and insights about web development and software engineering."
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative overflow-hidden rounded-xl bg-card border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E1235]/20 via-[#A11A98]/10 to-[#c0357a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="p-6 relative">
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.meta.date} className="text-sm">
                      {new Date(post.meta.date).toLocaleDateString()}
                    </time>
                  </div>
                  <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.meta.title}
                  </h2>
                  {post.meta.description && (
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.meta.description}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {post.meta.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-muted/50 rounded-full text-xs text-muted-foreground"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageTransitionLayout>
  )
} 