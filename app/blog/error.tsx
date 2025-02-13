"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  const router = useRouter()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-background dark:bg-gray-950">
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4 text-foreground dark:text-white">Something went wrong!</h1>
        <p className="mb-6 text-muted-foreground dark:text-gray-400">We apologize for the inconvenience.</p>
        <Button
          onClick={() => router.push("/blog")}
          variant="outline"
          className="dark:bg-gray-900 dark:border-gray-800 dark:hover:bg-gray-800"
        >
          Return to blog
        </Button>
      </div>
    </div>
  )
}

