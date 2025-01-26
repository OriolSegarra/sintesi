"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Switch } from "@/components/ui/switch"

const plans = [
  {
    name: "Standard",
    price: "795",
    description: "Perfect for businesses getting started with Notion",
    features: ["One request at a time", "Renews monthly", "Cancel anytime", "All work belongs to you"],
    href: "https://buy.stripe.com/eVa5le5Dz7mX3f28wz",
  },
  {
    name: "Pro",
    price: "1395",
    description: "For businesses needing more concurrent requests",
    features: ["Two Requests at a time", "Renews monthly", "Cancel anytime", "All work belongs to you"],
    href: "https://buy.stripe.com/5kA3d6ea5bDdbLybIM",
  },
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id="pricing" className="scroll-mt-24 py-24 px-4 bg-[#1E2024]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className={`text-sm ${!isAnnual ? "text-white" : "text-gray-400"}`}>Monthly</span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} className="data-[state=checked]:bg-blue-600" />
            <span className={`text-sm ${isAnnual ? "text-white" : "text-gray-400"}`}>Annual</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-lg border border-gray-800 bg-[#1A1B1E] p-6 hover:border-gray-700 transition-colors"
            >
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{plan.price}€</span>
                  <span className="text-sm text-gray-400">per month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-gray-300">
                    <Check className="h-5 w-5 flex-shrink-0 text-blue-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-md bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 transition-colors"
              >
                Get started with {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

