import Image from "next/image"

export default function BetterWay() {
  return (
    <section className="py-24 px-4 bg-[#1E2024]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">There's a better way</h2>
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-800/40">
          {/* Glass effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Glow effect */}
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-gray-700/20 to-gray-800/20 opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative grid md:grid-cols-2 gap-24">
            <div className="p-12 space-y-6">
              <div className="flex items-center gap-6">
                <div className="bg-transparent">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Notion-logo.svg-z41booFN1HhtPVfLZQJWrVqlUWTcp4.png"
                    alt="Notion Logo"
                    width={40}
                    height={40}
                    className="opacity-80"
                  />
                </div>
                <span className="text-2xl font-semibold">Notion</span>
              </div>
              <p className="text-gray-300 text-lg">
                Yes, I know all the gurus say "it's not the bow but the archer." But sometimes the bow can help improve
                your shot. Let me tell you:
              </p>
              <p className="text-gray-300 text-lg">Notion helps you work with a systems thinking approach.</p>
              <p className="text-gray-300 text-lg">
                The axe doesn't make the lumberjack, but the best sharpened axe combined with proper training on how to
                use it is unstoppable.
              </p>
              <p className="text-gray-300 text-lg">And that's what we're going to do.</p>
            </div>

            <div className="relative h-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/use-case-screenshot-wiki-fELtF8v78nXvE6yHvfZxuShEO6nJ3K.gif"
                alt="Notion Team Workspace Example"
                width={1200}
                height={800}
                className="absolute top-0 right-0 h-full w-auto object-cover rounded-r-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

