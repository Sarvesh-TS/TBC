import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tbc.jpg-3jvmz813NVk05gfmfiBCn2yO3vJ9Rk.jpeg"
                alt="Teachers By Choice Logo"
                width={48}
                height={48}
                className="rounded-full bg-white p-1"
              />
              <span className="text-lg font-bold">Teachers By Choice</span>
            </div>
            <p className="mt-2 text-sm text-primary-foreground/80">
              Nurturing young minds and building a strong foundation for future success.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:underline">
                  Courses & Services
                </Link>
              </li>
              <li>
                <Link href="/join" className="hover:underline">
                  Join Us
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:underline">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/courses" className="hover:underline">
                  1-1 Tutoring
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:underline">
                  Group Classes
                </Link>
              </li>
              <li>
                <Link href="/ambassador" className="hover:underline">
                  Campus Ambassador Program
                </Link>
              </li>
              <li>
                <Link href="/join" className="hover:underline">
                  Become a Tutor
                </Link>
              </li>
              <li>
                <Link href="/join" className="hover:underline">
                  Enroll as a Student
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 8123520414</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4" />
                <a
                  href="https://instagram.com/teachers.by.choice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @teachers.by.choice
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                <a
                  href="https://www.linkedin.com/company/teachers-by-choice-bengaluru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Teachers By Choice
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/KENn5wxASzy1caWc8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Jayanagar 4th T Block, Bengaluru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/70">
          <p>© {new Date().getFullYear()} Teachers By Choice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

