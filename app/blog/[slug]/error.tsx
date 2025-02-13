"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Oops! Something went wrong</h1>
        <p className="text-gray-400 mb-8">We couldn't load the blog post you requested.</p>
        <div className="space-x-4">
          <Button
            onClick={() => reset()}
            variant="outline"
            className="bg-[#1A1A1A] border-[#333333] hover:bg-[#222222] text-gray-200"
          >
            Try again
          </Button>
          <Button asChild variant="outline" className="bg-[#1A1A1A] border-[#333333] hover:bg-[#222222] text-gray-200">
            <Link href="/blog">Back to blog</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

