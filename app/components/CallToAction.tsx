export default function CallToAction() {
  return (
    <section id="contact" className="scroll-mt-24 py-32 px-4 bg-[#1E2024]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-800/40">
          {/* Glass effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Glow effect */}
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-gray-700/20 to-gray-800/20 opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative p-16 space-y-8">
            <h2 className="text-4xl font-bold">Ready to bring clarity to your business?</h2>
            <p className="text-xl text-gray-300">Book a 15 minute free call and let's discuss how we can help you</p>
            <div className="pt-4">
              <a
                href="https://calendar.app.google/e6fPP3HtGj8Mxbr77"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-black transition-colors hover:bg-gray-200"
              >
                Book a free call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

