import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"

export default function AmbassadorPage() {
  const benefits = [
    "Leadership experience and skill development",
    "Certificate of recognition",
    "Exclusive networking opportunities",
    "Priority access to TBC events and workshops",
    "Mentorship from experienced educators",
    "Performance-based incentives",
  ]

  const responsibilities = [
    "Promote TBC programs in your school/college",
    "Organize and assist with educational events",
    "Provide feedback on student needs and preferences",
    "Create awareness about TBC initiatives",
    "Represent TBC at educational fairs and events",
    "Help identify potential students who could benefit from our services",
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container">
          <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl animate-fade-in">
            TBC Campus Ambassador Program
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-primary-foreground/90">
            Become a representative of Teachers By Choice in your school or college and develop valuable leadership
            skills.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Program Overview</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              The TBC Campus Ambassador Program is designed for enthusiastic students who want to make a difference in
              their educational community. As a Campus Ambassador, you'll represent Teachers By Choice, promote our
              educational initiatives, and help fellow students access quality tutoring services.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits & Responsibilities */}
      <section className="bg-accent py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg p-6">
              <h2 className="mb-6 text-2xl font-bold text-primary">Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start group">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-125 group-hover:text-[#fec64f]" />
                    <span className="transition-colors duration-300 group-hover:text-primary">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg p-6">
              <h2 className="mb-6 text-2xl font-bold text-primary">Responsibilities</h2>
              <ul className="space-y-4">
                {responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start group">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-125 group-hover:text-[#fec64f]" />
                    <span className="transition-colors duration-300 group-hover:text-primary">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Apply to Become a Campus Ambassador
          </h2>

          <div className="mx-auto max-w-3xl">
            <Card className="transition-all duration-300 hover:shadow-lg hover:border-[#fec64f]">
              <CardHeader>
                <CardTitle>Application Form</CardTitle>
                <CardDescription>
                  Fill out the form below to apply for the TBC Campus Ambassador Program.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" action="https://formsubmit.co/sarveshts2k4@gmail.com" method="POST">
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Campus Ambassador Application from Teachers By Choice website"
                  />
                  <input type="hidden" name="_next" value={window.location.origin + "/thank-you"} />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        name="name"
                        required
                        className="transition-all duration-300 focus:border-[#fec64f] focus:ring-[#fec64f]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input
                        id="age"
                        placeholder="Enter your age"
                        type="number"
                        name="age"
                        required
                        className="transition-all duration-300 focus:border-[#fec64f] focus:ring-[#fec64f]"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        required
                        className="transition-all duration-300 focus:border-[#fec64f] focus:ring-[#fec64f]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="Enter your phone number"
                        name="phone"
                        required
                        className="transition-all duration-300 focus:border-[#fec64f] focus:ring-[#fec64f]"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="school">School/College</Label>
                      <Input
                        id="school"
                        placeholder="Enter your school or college name"
                        name="school"
                        required
                        className="transition-all duration-300 focus:border-[#fec64f] focus:ring-[#fec64f]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="grade">Grade/Year</Label>
                      <Input
                        id="grade"
                        placeholder="Enter your grade or year"
                        name="grade"
                        required
                        className="transition-all duration-300 focus:border-[#fec64f] focus:ring-[#fec64f]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Leadership Experience</Label>
                    <Textarea
                      id="experience"
                      placeholder="Tell us about any leadership roles or experiences you've had"
                      name="experience"
                      required
                      className="transition-all duration-300 focus:border-[#fec64f] focus:ring-[#fec64f]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivation">Motivation</Label>
                    <Textarea
                      id="motivation"
                      placeholder="Why do you want to become a TBC Campus Ambassador?"
                      name="motivation"
                      required
                      className="transition-all duration-300 focus:border-[#fec64f] focus:ring-[#fec64f]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ideas">Ideas for Promotion</Label>
                    <Textarea
                      id="ideas"
                      placeholder="Share your ideas on how you would promote TBC in your school/college"
                      name="ideas"
                      required
                      className="transition-all duration-300 focus:border-[#fec64f] focus:ring-[#fec64f]"
                    />
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full transition-transform duration-300 hover:scale-105 hover:shadow-md">
                  Submit Application
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-accent py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Program Timeline
          </h2>

          <div className="mx-auto max-w-3xl">
            <div className="relative border-l border-primary pl-8">
              <div className="mb-12 relative transition-all duration-300 hover:translate-x-2">
                <div className="absolute -left-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:scale-110 hover:bg-[#fec64f] hover:text-primary">
                  1
                </div>
                <h3 className="text-xl font-bold text-primary">Application</h3>
                <p className="mt-2 text-muted-foreground">
                  Submit your application through the online form. Applications are reviewed on a rolling basis.
                </p>
              </div>

              <div className="mb-12 relative transition-all duration-300 hover:translate-x-2">
                <div className="absolute -left-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:scale-110 hover:bg-[#fec64f] hover:text-primary">
                  2
                </div>
                <h3 className="text-xl font-bold text-primary">Interview</h3>
                <p className="mt-2 text-muted-foreground">
                  Selected candidates will be invited for a virtual interview to discuss their application and ideas.
                </p>
              </div>

              <div className="mb-12 relative transition-all duration-300 hover:translate-x-2">
                <div className="absolute -left-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:scale-110 hover:bg-[#fec64f] hover:text-primary">
                  3
                </div>
                <h3 className="text-xl font-bold text-primary">Orientation</h3>
                <p className="mt-2 text-muted-foreground">
                  Successful applicants will attend an orientation session to learn about TBC's mission, values, and
                  programs.
                </p>
              </div>

              <div className="relative transition-all duration-300 hover:translate-x-2">
                <div className="absolute -left-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:scale-110 hover:bg-[#fec64f] hover:text-primary">
                  4
                </div>
                <h3 className="text-xl font-bold text-primary">Active Ambassadorship</h3>
                <p className="mt-2 text-muted-foreground">
                  Begin your role as a TBC Campus Ambassador with ongoing support and guidance from our team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

