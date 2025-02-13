import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft } from "lucide-react"

// This would typically come from a CMS or database
const posts = [
  {
    slug: "finding-clarity-business-chaos",
    title: "Finding Clarity in Business Chaos: A Systematic Approach",
    date: "2024-02-13",
    author: {
      name: "Jane Doe",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    category: "Strategy",
    content: `
      <p>In today's fast-paced business environment, chaos often seems like the norm rather than the exception. However, successful organizations have learned to find clarity amidst this chaos, transforming complexity into actionable strategies. This article explores methodologies that help businesses navigate through uncertainty and emerge stronger.</p>
      
      <h2>Understanding the Nature of Business Chaos</h2>
      <p>Business chaos can stem from various sources: rapid market changes, technological disruptions, or internal organizational challenges. The first step in finding clarity is to acknowledge and understand these sources of chaos.</p>
      
      <h2>Systematic Approaches to Clarity</h2>
      <ol>
        <li><strong>Data-Driven Decision Making:</strong> Utilize data analytics to cut through the noise and identify key trends and insights.</li>
        <li><strong>Agile Methodologies:</strong> Implement agile practices to increase adaptability and responsiveness to change.</li>
        <li><strong>Strategic Simplification:</strong> Focus on core competencies and simplify complex processes to enhance efficiency.</li>
        <li><strong>Effective Communication:</strong> Establish clear communication channels to ensure alignment across all levels of the organization.</li>
      </ol>
      
      <h2>Case Study: Tech Innovators Inc.</h2>
      <p>Tech Innovators Inc. faced significant market disruption due to emerging technologies. By implementing a data-driven approach and adopting agile methodologies, they were able to pivot their product strategy and emerge as market leaders within 18 months.</p>
      
      <h2>Conclusion</h2>
      <p>Finding clarity in business chaos is not about eliminating complexity, but about developing systems and approaches that allow you to navigate through it effectively. By embracing systematic approaches, organizations can turn chaos into opportunity and drive sustainable growth.</p>
    `,
    readingTime: "5 min read",
  },
  // ... other posts
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return {}

  return {
    title: `${post.title} | Your Company Blog`,
    description: post.content.substring(0, 160) + "...",
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) notFound()

  return (
    <div className="min-h-screen bg-[#1E2024] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto pt-32 pb-24">
          <div className="mb-12">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all posts
            </Link>
          </div>

          <article className="mb-16">
            <div className="mb-12">
              <Badge variant="secondary" className="bg-[#2A2A2A] text-gray-200 mb-4">
                {post.category}
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-white mb-4">{post.title}</h1>
              <div className="flex items-center text-gray-400 mb-8">
                <Calendar className="mr-2 h-4 w-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="mx-2">•</span>
                <Clock className="mr-2 h-4 w-4" />
                <span>{post.readingTime}</span>
              </div>
              <div className="flex items-center border-b border-gray-800 pb-8">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <span className="font-medium text-gray-200">{post.author.name}</span>
              </div>
            </div>
            <div 
              className="prose prose-invert max-w-none
                prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight prose-headings:mt-12 prose-headings:mb-6
                prose-h2:text-3xl
                prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-white prose-strong:font-medium
                prose-ol:list-decimal prose-ol:text-gray-300 prose-ol:mb-6
                prose-ul:list-disc prose-ul:text-gray-300 prose-ul:mb-6
                prose-li:mb-2
                prose-a:text-white prose-a:no-underline hover:prose-a:text-gray-300
                [&>*:first-child]:mt-0
              " 
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </article>
        </div>
      </div>
    </div>
  )
}

