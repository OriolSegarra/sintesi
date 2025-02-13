import Link from "next/link"
import { Button } from "@/components/ui/button"

interface PaginationProps {
  currentPage: number
  totalItems: number
  itemsPerPage: number
  path: string
}

export default function Pagination({ currentPage, totalItems, itemsPerPage, path }: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  return (
    <nav className="flex justify-center items-center space-x-2 mt-12">
      {currentPage > 1 && (
        <Button
          variant="outline"
          asChild
          className="bg-[#1A1A1A] border-[#333333] hover:bg-[#222222] hover:border-[#444444] text-gray-200"
        >
          <Link href={`${path}?page=${currentPage - 1}`}>Previous</Link>
        </Button>
      )}
      <span className="text-sm text-gray-400">
        Page {currentPage} of {totalPages}
      </span>
      {currentPage < totalPages && (
        <Button
          variant="outline"
          asChild
          className="bg-[#1A1A1A] border-[#333333] hover:bg-[#222222] hover:border-[#444444] text-gray-200"
        >
          <Link href={`${path}?page=${currentPage + 1}`}>Next</Link>
        </Button>
      )}
    </nav>
  )
}

