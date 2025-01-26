import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Síntesi",
  description: "Goodbye Caos, Hello Clarity",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#1E2024] text-white`}>
        <Navbar />
        <div className="scroll-mt-24">{children}</div>
        <Footer />
      </body>
    </html>
  )
}

