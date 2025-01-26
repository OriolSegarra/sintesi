import Image from "next/image"

export default function TheResult() {
  const features = ["Projects and tasks", "Company wiki", "Operations Manual", "Resource and inspiration library"]

  return (
    <section className="py-24 px-4 bg-[#1E2024]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">The result</h2>

        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-800/40">
          {/* Glass effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Glow effect */}
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-gray-700/20 to-gray-800/20 opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative grid md:grid-cols-2 gap-24">
            <div className="p-12 space-y-8">
              <h3 className="text-3xl font-bold">The Workspace</h3>

              <p className="text-gray-300 text-lg">
                The end result of our work will be a functional workspace for all your team to use and enjoy. Such
                workspaces encompass everything your company needs on a daily basis and to plan for the future, such as:
              </p>

              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="mr-2 text-lg">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="text-gray-300 text-lg">
                If we follow the process we've designed, your entire company will dance in unison.
              </p>
            </div>

            <div className="relative h-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tuT5zkhAVGg1ukReXEa47bl8PX0CKD.png"
                alt="Notion Workspace Example"
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

