import Link from "next/link"

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight space-y-2 mb-8">
        <div>GOODBYE CAOS</div>
        <div>HELLO CLARITY</div>
      </h1>
      <Link
        href="/manifesto"
        className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-gray-200"
      >
        Read our manifesto
      </Link>
    </section>
  )
}

