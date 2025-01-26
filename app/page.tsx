import Hero from "./components/Hero"
import ChatCarousel from "./components/ChatCarousel"
import BetterWay from "./components/BetterWay"
import HowWeDoIt from "./components/HowWeDoIt"
import TheResult from "./components/TheResult"
import Customers from "./components/Customers"
import Pricing from "./components/Pricing"
import CallToAction from "./components/CallToAction"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1E2024] text-white">
      <Hero />
      <ChatCarousel />
      <BetterWay />
      <HowWeDoIt />
      <TheResult />
      <Customers />
      <Pricing />
      <CallToAction />
    </div>
  )
}

