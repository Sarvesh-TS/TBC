import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Calendar, ClipboardCheck, BookMarked } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 text-primary-foreground">
        <div className="container flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-in">
              Nurturing Young Minds for a Brighter Future
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/90">
              Personalized tutoring services in Bengaluru for students in grades 4-10 across ICSE, CBSE, and STATE
              boards.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="transition-transform duration-300 hover:scale-105 hover:shadow-md"
              >
                <Link href="/courses">Explore Courses</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10 transition-transform duration-300 hover:scale-105 hover:shadow-md"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="transition-transform duration-500 hover:scale-105 hover:rotate-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tbc.jpg-3jvmz813NVk05gfmfiBCn2yO3vJ9Rk.jpeg"
                alt="Teachers By Choice Logo"
                width={300}
                height={300}
                className="mx-auto rounded-full bg-white/10 p-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-accent py-16">
        <div className="container">
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="text-2xl font-medium italic text-accent-foreground md:text-3xl transition-all duration-500 hover:scale-105">
              "The best thing about being a teacher is that it matters. The hardest thing about being a teacher is that
              it matters every day."
            </p>
            <footer className="mt-4 text-lg font-semibold text-accent-foreground/80">- Todd Whitaker</footer>
          </blockquote>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive educational support tailored to each student's needs
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            <Card className="flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-[#fec64f]">
              <CardContent className="pt-6">
                <BookOpen className="mb-4 h-12 w-12 text-primary transition-transform duration-500 hover:scale-110" />
                <h3 className="text-xl font-medium">1-1 Tutoring</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Personalized attention and customized learning plans
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-[#fec64f]">
              <CardContent className="pt-6">
                <Users className="mb-4 h-12 w-12 text-primary transition-transform duration-500 hover:scale-110" />
                <h3 className="text-xl font-medium">Free Demo Class</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Experience our teaching methodology before enrolling
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-[#fec64f]">
              <CardContent className="pt-6">
                <Calendar className="mb-4 h-12 w-12 text-primary transition-transform duration-500 hover:scale-110" />
                <h3 className="text-xl font-medium">Flexible Schedule</h3>
                <p className="mt-2 text-sm text-muted-foreground">Classes that fit your timetable and convenience</p>
              </CardContent>
            </Card>

            <Card className="flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-[#fec64f]">
              <CardContent className="pt-6">
                <ClipboardCheck className="mb-4 h-12 w-12 text-primary transition-transform duration-500 hover:scale-110" />
                <h3 className="text-xl font-medium">Regular Tests</h3>
                <p className="mt-2 text-sm text-muted-foreground">Continuous assessment to track progress</p>
              </CardContent>
            </Card>

            <Card className="flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-[#fec64f]">
              <CardContent className="pt-6">
                <BookMarked className="mb-4 h-12 w-12 text-primary transition-transform duration-500 hover:scale-110" />
                <h3 className="text-xl font-medium">Mentoring Sessions</h3>
                <p className="mt-2 text-sm text-muted-foreground">Guidance beyond academics for holistic development</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105 hover:shadow-md">
              <Link href="/courses">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to start your learning journey?</h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Book a free demo class today and experience our personalized teaching approach.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="transition-transform duration-300 hover:scale-105 hover:shadow-md"
              >
                <Link href="/join">Enroll Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10 transition-transform duration-300 hover:scale-105 hover:shadow-md"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

