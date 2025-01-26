import { Search, Wrench, Heart } from "lucide-react"

const steps = [
  {
    icon: Search,
    label: "Understand",
    title: "Find clarity in chaos",
    description:
      "Why things are happening the way they are now? Find the key points and make sure to reduce it. Notion is the right tool for it.",
  },
  {
    icon: Wrench,
    label: "Build",
    title: "Create your system",
    description: "From by piece we'll build your new workspace that's easy and friendly to use.",
  },
  {
    icon: Heart,
    label: "Maintain",
    title: "Keep growing together",
    description:
      "Like the good relations, systems need care. We'll help you make sure this marriage works even through the storms, and delivers on results.",
  },
]

export default function HowWeDoIt() {
  return (
    <section className="py-24 px-4 bg-[#1E2024]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">How we do it</h2>
        <p className="text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          We are entrepreneurs, we have build and scaled businesses in the past. We know how to go from Chaos to
          Clarity, and we want to help you achieve it as well
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-800/40"
            >
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Glow effect */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-gray-700/20 to-gray-800/20 opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />

              {/* Content */}
              <div className="relative">
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-400">{step.label}</span>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>

                {/* Arrow */}
                <div className="absolute right-8 top-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Icon at bottom */}
              <div className="relative mt-auto">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg">
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-gray-700/30 to-gray-800/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <step.icon className="relative h-8 w-8 text-gray-400 transition-colors duration-500 group-hover:text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

