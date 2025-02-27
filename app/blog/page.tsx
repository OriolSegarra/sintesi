import type { Metadata } from "next"
import BlogPostList from "@/components/BlogPostList"
import Pagination from "@/components/Pagination"
import { getAllPublished } from "@/lib/notion"

export const metadata: Metadata = {
  title: "Insights & Articles | Síntesi",
  description: "Discover insights on business transformation, system optimization, and growth strategies.",
}

export default async function BlogPage() {
  const posts = await getAllPublished()

  if (!posts || posts.length === 0) {
    return <div className="text-4xl">No Blog Posts Found</div>
  }

  return (
    <div className="min-h-screen bg-[#1E2024] text-white">
      <div className="max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
          <p className="text-xl text-gray-400 mb-12">
            Insights on business transformation, system optimization, and growth strategies.
          </p>
          <BlogPostList posts={posts} />
        </div>
      </div>
    </div>
  )
}
