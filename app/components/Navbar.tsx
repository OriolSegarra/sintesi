import Link from "next/link"
import Logo from "./Logo"

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-6 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        <div className="space-x-6">
          <Link href="/manifesto" className="text-lg font-medium text-white hover:text-gray-300">
            Manifesto
          </Link>
          <Link href="/#pricing" className="text-lg font-medium text-white hover:text-gray-300">
            Pricing
          </Link>
          <Link href="/#contact" className="text-lg font-medium text-white hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

