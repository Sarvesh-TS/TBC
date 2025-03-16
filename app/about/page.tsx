import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sanjana Rao",
      role: "Founder & Chief Education Officer",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sanjana.jpg-BDkEnBd1mwF8SuhBjjlO25y0IiZOOe.jpeg",
    },
    {
      name: "Rakesh Shanbhag",
      role: "Strategic Partner & Head of Operations",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rakesh.jpg-dYZCQoG32qtHOYicWLTUDO9nCmDAno.jpeg",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container">
          <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl animate-fade-in">About Us</h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Mission</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              At Teachers By Choice, we believe in nurturing young minds and building a strong foundation for future
              success. Based in Bengaluru, our tutoring services are designed to ensure that every student not only
              understands the concepts but also develops a lifelong love for learning!
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-accent py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Values</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="mt-4 text-xl font-medium text-primary">Excellence</h3>
              <p className="mt-2 text-muted-foreground">
                We strive for excellence in everything we do, from teaching methods to student support.
              </p>
            </div>

            <div className="flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="mt-4 text-xl font-medium text-primary">Personalization</h3>
              <p className="mt-2 text-muted-foreground">
                We recognize that each student is unique and tailor our approach to individual learning styles.
              </p>
            </div>

            <div className="flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="mt-4 text-xl font-medium text-primary">Growth Mindset</h3>
              <p className="mt-2 text-muted-foreground">
                We foster a growth mindset, encouraging students to embrace challenges and persist in the face of
                setbacks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Team</h2>

          <div className="mx-auto max-w-2xl space-y-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden">
                  <div className="h-full w-full transition-all duration-300 group-hover:scale-105 group-hover:border-4 group-hover:border-[#fec64f]">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={503}
                      height={670}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-medium text-primary">{member.name}</h3>
                  <p className="mt-1 text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

