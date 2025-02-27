import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { BlogPost } from "@/lib/notion"

export default function BlogPostList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="space-y-12 max-w-3xl mx-auto">
      {posts.map((post) => (
        <article key={post.id} className="group relative bg-[#1A1A1A] rounded-lg p-6 transition-all hover:bg-[#222222]">
          <div className="flex items-center gap-3 mb-4">
            {post.category.map((cat, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-[#2A2A2A] text-gray-200 hover:bg-[#333333]"
              >
                {cat}
              </Badge>
            ))}
            <time dateTime={post.date} className="text-sm text-gray-400">
              {post.date}
            </time>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight mb-3 text-white">
            <Link href={`/blog/${post.slug}`} className="hover:text-gray-300 transition-colors">
              {post.title}
            </Link>
          </h2>
          <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
          >
            Read article
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </article>
      ))}
    </div>
  )
}

