import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sanjana Rao",
      role: "Founder & Chief Education Officer",
      image: "/team/Sanjana.jpg",
    },
    {
      name: "Rakesh Shanbhag",
      role: "Strategic Partner & Head of Operations",
      image: "/team/Sanjana.jpg",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-12 md:py-16 text-primary-foreground">
        <div className="container px-4 md:px-6">
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight animate-fade-in">
            About Us
          </h1>
          <p className="mt-4 text-center text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Empowering students through personalized education since 2020
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center transition-all duration-300 hover:shadow-lg rounded-lg p-6 bg-background/50 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-primary">Our Mission</h2>
            <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
              At Teachers By Choice, we believe in nurturing young minds and building a strong foundation for future
              success. Based in Bengaluru, our tutoring services are designed to ensure that every student not only
              understands the concepts but also develops a lifelong love for learning!
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-accent py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 className="mb-8 md:mb-12 text-center text-2xl md:text-3xl font-bold tracking-tight text-primary">
            Our Values
          </h2>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center transition-all duration-300 hover:scale-105 bg-background/80 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md">
              <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="text-xl md:text-2xl font-bold">1</span>
              </div>
              <h3 className="mt-4 text-lg md:text-xl font-medium text-primary">Excellence</h3>
              <p className="mt-2 text-sm md:text-base text-muted-foreground">
                We strive for excellence in everything we do, from teaching methods to student support.
              </p>
            </div>

            <div className="flex flex-col items-center text-center transition-all duration-300 hover:scale-105 bg-background/80 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md">
              <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="text-xl md:text-2xl font-bold">2</span>
              </div>
              <h3 className="mt-4 text-lg md:text-xl font-medium text-primary">Personalization</h3>
              <p className="mt-2 text-sm md:text-base text-muted-foreground">
                We recognize that each student is unique and tailor our approach to individual learning styles.
              </p>
            </div>

            <div className="flex flex-col items-center text-center transition-all duration-300 hover:scale-105 bg-background/80 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto">
              <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="text-xl md:text-2xl font-bold">3</span>
              </div>
              <h3 className="mt-4 text-lg md:text-xl font-medium text-primary">Growth Mindset</h3>
              <p className="mt-2 text-sm md:text-base text-muted-foreground">
                We foster a growth mindset, encouraging students to embrace challenges and persist in the face of
                setbacks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <h2 className="mb-8 md:mb-12 text-center text-2xl md:text-3xl font-bold tracking-tight text-primary">
            Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden group shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <div className="h-full w-full transition-all duration-300 group-hover:scale-105">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
                <CardContent className="p-4 md:p-6 text-center">
                  <h3 className="text-lg md:text-xl font-medium text-primary">{member.name}</h3>
                  <p className="mt-1 text-sm md:text-base text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}