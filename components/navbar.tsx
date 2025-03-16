"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Courses & Services", href: "/courses" },
  { name: "Join Us", href: "/join" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Campus Ambassador", href: "/ambassador" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tbc.jpg-3jvmz813NVk05gfmfiBCn2yO3vJ9Rk.jpeg"
            alt="Teachers By Choice Logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="hidden text-lg font-bold text-primary sm:inline-block">Teachers By Choice</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 lg:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Button
          asChild
          variant="default"
          className="hidden md:inline-flex transition-transform duration-300 hover:scale-105 hover:shadow-md"
        >
          <Link href="/contact">Contact Us</Link>
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden transition-transform duration-300 hover:scale-110"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg md:hidden">
            <div className="container bg-white mx-auto px-4 py-4 h-[100vh] ">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tbc.jpg-3jvmz813NVk05gfmfiBCn2yO3vJ9Rk.jpeg"
                    alt="Teachers By Choice Logo"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <span className="text-lg font-bold text-primary">Teachers By Choice</span>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="transition-transform duration-300 hover:scale-110"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="mt-8 flex flex-col items-center gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-xl font-medium text-muted-foreground transition-all duration-300 hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  asChild
                  variant="default"
                  className="mt-6 w-full max-w-xs transition-transform duration-300 hover:scale-105 hover:shadow-md"
                >
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Contact Us
                  </Link>
                </Button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}