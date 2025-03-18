import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check } from "lucide-react"

export default function CoursesPage() {
  const subjects = ["Mathematics", "Science", "Social Studies", "English", "Hindi", "Kannada"]

  const services = [
    {
      title: "1-1 Tutoring",
      description: "Personalized one-on-one sessions tailored to the student's learning pace and style.",
      features: [
        "Customized learning plans",
        "Focused attention on weak areas",
        "Regular progress reports",
        "Flexible scheduling",
      ],
    },
    {
      title: "Free Demo Class",
      description: "Experience our teaching methodology before committing to regular classes.",
      features: [
        "No obligation trial session",
        "Assessment of student's current level",
        "Introduction to our teaching approach",
        "Q&A with the tutor",
      ],
    },
    {
      title: "Flexible Schedule",
      description: "Classes that fit your timetable and convenience.",
      features: [
        "Weekend and weekday options",
        "Morning and evening slots",
        "Rescheduling flexibility",
        "Holiday accommodations",
      ],
    },
    {
      title: "Regular Tests",
      description: "Continuous assessment to track progress and identify areas for improvement.",
      features: ["Weekly quizzes", "Monthly assessments", "Mock exams", "Detailed performance analysis"],
    },
    {
      title: "Mentoring Sessions",
      description: "Guidance beyond academics for holistic development.",
      features: [
        "Study skills development",
        "Time management techniques",
        "Exam preparation strategies",
        "Stress management guidance",
      ],
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container">
          <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl animate-fade-in">
            Courses & Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-primary-foreground/90">
            Comprehensive educational support for students in grades 4-10 across ICSE, CBSE, and STATE boards.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Courses</h2>

          <div className="mx-auto max-w-4xl">
            <Tabs defaultValue="subjects" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="subjects" className="transition-all duration-300 hover:bg-primary/10">
                  Subjects
                </TabsTrigger>
                <TabsTrigger value="grades" className="transition-all duration-300 hover:bg-primary/10">
                  Grades
                </TabsTrigger>
                <TabsTrigger value="boards" className="transition-all duration-300 hover:bg-primary/10">
                  Boards
                </TabsTrigger>
              </TabsList>

              <TabsContent value="subjects" className="mt-6">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {subjects.map((subject) => (
                    <Card
                      key={subject}
                      className="transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-[#fec64f]"
                    >
                      <CardContent className="flex items-center p-6">
                        <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Check className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-lg font-medium">{subject}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="grades" className="mt-6">
                <Card className="transition-all duration-300 hover:shadow-lg hover:border-[#fec64f]">
                  <CardHeader>
                    <CardTitle>Grades 4-10</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We offer tutoring services for students from grade 4 to grade 10, covering all subjects in the
                      curriculum. Our teaching methods are adapted to suit the age group and learning requirements of
                      each grade level.
                    </p>
                    <div className="mt-4 grid grid-cols-7 gap-2">
                      {[4, 5, 6, 7, 8, 9, 10].map((grade) => (
                        <div
                          key={grade}
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 hover:scale-110 "
                        >
                          {grade}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="boards" className="mt-6">
                <div className="grid gap-4 md:grid-cols-3">
                  {["ICSE", "CBSE", "STATE"].map((board) => (
                    <Card
                      key={board}
                      className="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-[#fec64f]"
                    >
                      <CardHeader>
                        <CardTitle>{board}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Comprehensive coverage of the {board} curriculum with specialized tutors familiar with the
                          board's examination pattern and requirements.
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-8 rounded-lg bg-accent p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <h3 className="text-xl font-medium text-primary">Available Modes</h3>
              <div className="mt-4 flex flex-wrap gap-4">
                <div className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:scale-105 ">
                  Online Classes
                </div>
                <div className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:scale-105">
                  Offline Classes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-accent py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Services</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="h-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-[#fec64f]"
              >
                <CardHeader>
                  <CardTitle className="text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

