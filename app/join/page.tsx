import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function JoinPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container">
          <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">Join Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-primary-foreground/90">
            Become a part of our educational community as a tutor or enroll as a student.
          </p>
        </div>
      </section>

      {/* Join Form Section */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <Tabs defaultValue="student" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="student">Join as a Student</TabsTrigger>
                <TabsTrigger value="tutor">Join as a Tutor</TabsTrigger>
              </TabsList>

              <TabsContent value="student" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-primary">Student Registration</CardTitle>
                    <CardDescription>
                      Fill out the form below to enroll as a student at Teachers By Choice.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4" action="https://formsubmit.co/sarveshts2k4@gmail.com" method="POST">
                      <input
                        type="hidden"
                        name="_subject"
                        value="New Student Registration from Teachers By Choice website"
                      />
                      {typeof window !== 'undefined' && (
                        <input type="hidden" name="_next" value={window.location.origin + "/thank-you"} />
                      )}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="student-name">Full Name</Label>
                          <Input id="student-name" placeholder="Enter your full name" name="name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="student-grade">Grade</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your grade" />
                            </SelectTrigger>
                            <SelectContent>
                              {[4, 5, 6, 7, 8, 9, 10].map((grade) => (
                                <SelectItem key={grade} value={grade.toString()}>
                                  Grade {grade}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="student-board">Board</Label>
                          <Select name="board">
                            <SelectTrigger>
                              <SelectValue placeholder="Select your board" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="icse">ICSE</SelectItem>
                              <SelectItem value="cbse">CBSE</SelectItem>
                              <SelectItem value="state">STATE</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="student-subject">Subject of Interest</Label>
                          <Select name="subject">
                            <SelectTrigger>
                              <SelectValue placeholder="Select subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mathematics">Mathematics</SelectItem>
                              <SelectItem value="science">Science</SelectItem>
                              <SelectItem value="social-studies">Social Studies</SelectItem>
                              <SelectItem value="english">English</SelectItem>
                              <SelectItem value="hindi">Hindi</SelectItem>
                              <SelectItem value="kannada">Kannada</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="student-email">Email</Label>
                          <Input id="student-email" type="email" placeholder="Enter your email" name="email" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="student-phone">Phone Number</Label>
                          <Input id="student-phone" placeholder="Enter your phone number" name="phone" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="student-message">Additional Information</Label>
                        <Textarea
                          id="student-message"
                          placeholder="Tell us more about your learning goals"
                          name="message"
                        />
                      </div>
                      <Button className="w-full" type="submit">
                        Submit Application
                      </Button>
                    </form>
                  </CardContent>
                  <CardFooter></CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="tutor" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-primary">Tutor Application</CardTitle>
                    <CardDescription>Join our team of dedicated educators at Teachers By Choice.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4" action="https://formsubmit.co/sarveshts2k4@gmail.com" method="POST">
                      <input
                        type="hidden"
                        name="_subject"
                        value="New Tutor Application from Teachers By Choice website"
                      />
                      {typeof window !== 'undefined' && (
                        <input type="hidden" name="_next" value={window.location.origin + "/thank-you"} />
                      )}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="tutor-name">Full Name</Label>
                          <Input id="tutor-name" placeholder="Enter your full name" name="name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="tutor-qualification">Highest Qualification</Label>
                          <Input
                            id="tutor-qualification"
                            placeholder="E.g., B.Sc., M.Ed."
                            name="qualification"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="tutor-subject">Subject Expertise</Label>
                          <Select name="subject">
                            <SelectTrigger>
                              <SelectValue placeholder="Select primary subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mathematics">Mathematics</SelectItem>
                              <SelectItem value="science">Science</SelectItem>
                              <SelectItem value="social-studies">Social Studies</SelectItem>
                              <SelectItem value="english">English</SelectItem>
                              <SelectItem value="hindi">Hindi</SelectItem>
                              <SelectItem value="kannada">Kannada</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="tutor-experience">Years of Experience</Label>
                          <Input
                            id="tutor-experience"
                            placeholder="Enter years of teaching experience"
                            name="experience"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="tutor-email">Email</Label>
                          <Input id="tutor-email" type="email" placeholder="Enter your email" name="email" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="tutor-phone">Phone Number</Label>
                          <Input id="tutor-phone" placeholder="Enter your phone number" name="phone" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="tutor-message">Why do you want to join Teachers By Choice?</Label>
                        <Textarea
                          id="tutor-message"
                          placeholder="Tell us about your teaching philosophy and why you want to join our team"
                          name="message"
                        />
                      </div>
                      <Button className="w-full" type="submit">
                        Submit Application
                      </Button>
                    </form>
                  </CardContent>
                  <CardFooter></CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-accent py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">Why Join Us?</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">For Students</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Personalized attention and customized learning plans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Expert tutors with proven teaching experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Flexible scheduling to fit your timetable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Regular progress tracking and feedback</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Holistic development beyond academics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">For Tutors</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Competitive compensation and growth opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Flexible working hours and location options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Professional development and training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Supportive community of educators</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Opportunity to make a meaningful impact on students' lives</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

