"use client"

import Link from 'next/link'
import { formatDate } from '@/lib/utils'

interface BlogLayoutProps {
  children: React.ReactNode
  meta: {
    title: string
    date: string
    description: string
    tags: string[]
  }
}

export default function BlogLayout({ children, meta }: BlogLayoutProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12">
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
          <time dateTime={meta.date} className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {formatDate(meta.date)}
          </time>
          {meta.tags.length > 0 && (
            <div className="flex gap-2">
              {meta.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${tag}`}
                  className="px-3 py-1 bg-gray-800 rounded-full text-sm hover:bg-gray-700 transition-colors duration-200"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          {meta.title}
        </h1>
        {meta.description && (
          <p className="text-xl text-gray-400 leading-relaxed">
            {meta.description}
          </p>
        )}
      </header>
      <div className="prose prose-invert max-w-none prose-lg">
        <div className="prose-headings:text-white prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-blue-400 prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-700 prose-blockquote:border-l-blue-400 prose-blockquote:text-gray-400">
          <style jsx global>{`
            pre[class*="language-"] {
              margin: 1.5em 0;
              padding: 1.5em;
              border-radius: 0.5rem;
              overflow: auto;
              position: relative;
              background-color: #1a1a1a;
              border: 1px solid #333;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            }
            pre[class*="language-"]::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 2.5rem;
              background: #2d2d2d;
              border-bottom: 1px solid #333;
              border-radius: 0.5rem 0.5rem 0 0;
            }
            pre[class*="language-"]::after {
              content: '';
              position: absolute;
              top: 0.75rem;
              left: 1rem;
              width: 0.75rem;
              height: 0.75rem;
              border-radius: 50%;
              background: #ff5f56;
              box-shadow: 1.25rem 0 0 #ffbd2e, 2.5rem 0 0 #27c93f;
            }
            pre[class*="language-"] code {
              font-family: 'Fira Code', monospace;
              font-size: 0.9em;
              line-height: 1.5;
              padding-top: 2.5rem;
              display: block;
            }
            .token.comment,
            .token.prolog,
            .token.doctype,
            .token.cdata {
              color: #6b7280;
              font-style: italic;
            }
            .token.punctuation {
              color: #9ca3af;
            }
            .token.property,
            .token.tag,
            .token.boolean,
            .token.number,
            .token.constant,
            .token.symbol,
            .token.deleted {
              color: #ff79c6;
            }
            .token.selector,
            .token.attr-name,
            .token.string,
            .token.char,
            .token.builtin,
            .token.inserted {
              color: #50fa7b;
            }
            .token.operator,
            .token.entity,
            .token.url,
            .language-css .token.string,
            .style .token.string {
              color: #8be9fd;
            }
            .token.atrule,
            .token.attr-value,
            .token.keyword {
              color: #ff79c6;
            }
            .token.function,
            .token.class-name {
              color: #ffb86c;
            }
            .token.regex,
            .token.important,
            .token.variable {
              color: #ff79c6;
            }
            .token.important,
            .token.bold {
              font-weight: bold;
            }
            .token.italic {
              font-style: italic;
            }
          `}</style>
          {children}
        </div>
      </div>
    </article>
  )
} 