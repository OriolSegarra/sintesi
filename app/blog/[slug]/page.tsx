import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { getAllPublished, getPostContent } from "@/lib/notion"
import MarkdownRenderer from "@/components/MarkdownRenderer"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const posts = await getAllPublished()
  const post = posts.find((p) => p.slug === params.slug)
  
  if (!post) return {}

  return {
    title: `${post.title} | Síntesi Blog`,
    description: post.description,
  }
}

export async function generateStaticParams() {
  const posts = await getAllPublished()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const posts = await getAllPublished()
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) notFound()

  // Obtener el contenido del post como Markdown
  const markdownContent = await getPostContent(post.id)

  // Datos de ejemplo para completar la información que falta de Notion
  const postDetails = {
    ...post,
    author: {
      name: "Oriol Segarra",
      avatar: "/assets/avatar.png",
    },
    readingTime: "5 min read",
  }

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
              <div className="flex flex-wrap gap-2 mb-4">
                {postDetails.category.map((cat, index) => (
                  <Badge 
                    key={index}
                    variant="secondary" 
                    className="bg-[#2A2A2A] text-gray-200 hover:bg-[#333333]"
                  >
                    {cat}
                  </Badge>
                ))}
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white mb-4">{postDetails.title}</h1>
              <div className="flex items-center text-gray-400 mb-8">
                <Calendar className="mr-2 h-4 w-4" />
                <time dateTime={postDetails.date}>
                  {postDetails.date}
                </time>
                <span className="mx-2">•</span>
                <Clock className="mr-2 h-4 w-4" />
                <span>{postDetails.readingTime}</span>
              </div>
              <div className="flex items-center border-b border-gray-800 pb-8">
                <Image
                  src={postDetails.author.avatar}
                  alt={postDetails.author.name}
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <span className="font-medium text-gray-200">{postDetails.author.name}</span>
              </div>
            </div>
            
            {/* Renderizar el contenido de Notion como Markdown */}
            <MarkdownRenderer content={markdownContent} />
          </article>
        </div>
      </div>
    </div>
  )
}


