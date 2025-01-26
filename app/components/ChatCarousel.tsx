"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const chatCards = [
  {
    id: 1,
    title: "Managing Projects…",
    messages: [
      { sender: "You", text: "Hey Marcus, how's project X going?" },
      { sender: "Marcus", text: "I think the review was sent to the client" },
      { sender: "You", text: "Are you sure? When was it sent?" },
      { sender: "Marcus", text: "Not sure, in the last meeting the team said they'd send it after finishing" },
      { sender: "Narrator", text: "2 hours later...", isNarrator: true },
      { sender: "Marcus", text: "Turns out they forgot to send it. We'll do it right now" },
    ],
  },
  {
    id: 2,
    title: "Searching and finding information",
    messages: [
      {
        sender: "You",
        text: "Excuse me Laura, John tells me you're going on vacation tomorrow, where can I find the new brand manual?",
      },
      { sender: "Laura", text: "Of course! It's in GDrive! Just type Brand Manual or look in the Branding folder" },
      {
        sender: "Narrator",
        text: 'You\'re the founder, so you have 5 years worth of branding kits and access to 100% of the company Drive, which means you have +10 personal and shared folders called "Branding"\n\nGOOD LUCK FINDING IT!',
        isNarrator: true,
      },
    ],
  },
  {
    id: 3,
    title: "Clearly communicating and transmitting processes...",
    messages: [
      {
        sender: "You",
        text: 'Welcome Beatrix, in the operations manual you can find detailed explanations of all company processes regarding "how we do things here"',
      },
      { sender: "Narrator", text: "Beatriz (looks at you with confusion and fear)", isNarrator: true },
      { sender: "You", text: "Are you feeling okay?" },
      {
        sender: "Beatriz",
        text: "Uh... yes yes, sorry, it's just that yesterday during onboarding they told me these processes haven't been used for 9 months because they became outdated when the new CRM was introduced. Tomorrow I have a three-hour meeting scheduled with Anthony to learn everything about onboarding, and the next day I'm meeting with Cristina for the whole day to cover everything related to client management",
      },
      {
        sender: "Narrator",
        text: "You calculating that this means at least 12 hours of meetings for her plus 8 hours for Cristina and 4 hours for Anthony.",
        isNarrator: true,
      },
      { sender: "You", text: "Uh... okay, I'll talk to anthony about updating them, this can't happen again" },
    ],
  },
]

export default function ChatCarousel() {
  const [currentCard, setCurrentCard] = useState(0)

  return (
    <section className="py-24 px-4 bg-[#1E2024]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">We are Síntesi</h2>
        <p className="text-lg text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          We are Síntesi, a Catalan-origin studio based on the Galician coast that aims to calm your mind - not through
          meditation or fire breathing, but by organizing your business. If you manage people or projects, you know what
          I mean. You've likely encountered these situations:
        </p>

        <div className="relative h-[600px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <div className="bg-[#2A2D35] rounded-lg p-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold mb-4 pb-4 border-b border-gray-700">
                  {chatCards[currentCard].title}
                </h3>
                <div className="space-y-6">
                  {chatCards[currentCard].messages.map((message, index) => (
                    <div key={index} className={`flex ${message.sender !== "You" ? "justify-start" : "justify-end"}`}>
                      <div className={`max-w-[80%] ${message.isNarrator ? "w-full text-center" : ""}`}>
                        {!message.isNarrator && (
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-sm">{message.sender}</span>
                          </div>
                        )}
                        <div
                          className={`rounded-lg px-4 py-2 ${
                            message.isNarrator
                              ? "bg-transparent text-gray-400 italic font-light"
                              : message.sender === "You"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-700 text-white"
                          }`}
                        >
                          {message.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {chatCards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCard(index)}
              className={`w-3 h-3 rounded-full transition-colors ${currentCard === index ? "bg-white" : "bg-gray-600"}`}
              aria-label={`Go to chat ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

