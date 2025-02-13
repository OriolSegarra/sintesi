import type { Metadata } from "next"
import BlogPostList from "@/components/BlogPostList"
import Pagination from "@/components/Pagination"

export const metadata: Metadata = {
  title: "Insights & Articles | Síntesi",
  description: "Discover insights on business transformation, system optimization, and growth strategies.",
}

const samplePosts = [
  {
    id: 1,
    title: "Finding Clarity in Business Chaos: A Systematic Approach",
    excerpt:
      "Learn how successful businesses transform complexity into clear, actionable strategies. Discover the methodologies that help organizations navigate through uncertainty.",
    date: "2024-02-13",
    slug: "finding-clarity-business-chaos",
    category: "Strategy",
  },
  {
    id: 2,
    title: "Building Scalable Systems: From Concept to Implementation",
    excerpt:
      "Explore the key principles behind creating robust business systems that scale. We share practical insights from our experience building successful enterprises.",
    date: "2024-02-10",
    slug: "building-scalable-systems",
    category: "Systems",
  },
  {
    id: 3,
    title: "The Art of Business Maintenance: Keeping Systems Alive",
    excerpt:
      "Maintaining business systems is as crucial as building them. Discover how to nurture and evolve your systems for long-term success.",
    date: "2024-02-07",
    slug: "art-of-business-maintenance",
    category: "Growth",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#1E2024] text-white">
      <div className="max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
          <p className="text-xl text-gray-400 mb-12">
            Insights on business transformation, system optimization, and growth strategies.
          </p>
          <BlogPostList posts={samplePosts} />
        </div>
      </div>
    </div>
  )
}

