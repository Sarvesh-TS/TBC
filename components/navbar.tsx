"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Pavan", href: "/pavan" },
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tbc.jpg-3jvmz813NVk05gfmfiBCn2yO3vJ9Rk.jpeg"
            alt="Teachers By Choice Logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="hidden font-bold text-primary sm:inline-block">Teachers By Choice</span>
        </Link>

        <nav className="hidden md:flex md:gap-5 lg:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
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

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden transition-transform duration-300 hover:scale-110"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>

        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm md:hidden">
            <div className="container flex h-16 items-center justify-between bg-background">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tbc.jpg-3jvmz813NVk05gfmfiBCn2yO3vJ9Rk.jpeg"
                  alt="Teachers By Choice Logo"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <span className="font-bold text-primary">Teachers By Choice</span>
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
            <nav className="container mt-8 grid gap-6 pb-24">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                variant="default"
                className="mt-4 transition-transform duration-300 hover:scale-105 hover:shadow-md"
              >
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

