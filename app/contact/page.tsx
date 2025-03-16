"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, Instagram, Linkedin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Script from "next/script"

// Define a type for the window with emailjs
declare global {
  interface Window {
    emailjs: any
  }
}

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  })

  const handleChange = (e) => {
    const { id, name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id || name]: value,
    }))
  }

  const handleSelectChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      subject: value,
    }))
  }

  const handleScriptLoad = () => {
    setScriptLoaded(true)
    // Initialize EmailJS when the script is loaded
    if (window.emailjs) {
      window.emailjs.init("KMlrGueiAJb8lgmNZ")
    }
  }

  const sendEmail = async (e) => {
    e.preventDefault()

    if (!scriptLoaded || !window.emailjs) {
      toast({
        title: "Error",
        description: "Email service is not loaded yet. Please try again in a moment.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await window.emailjs.send("service_hkcdfbc", "template_n4kkfds", {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_name: "Sarvesh T S",
      })

      if (response.status === 200) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
        })

        // Reset form data
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "general",
          message: "",
        })
      }
    } catch (error) {
      console.error("Error sending email:", error)
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col">
      {/* EmailJS Script */}
      <Script
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        strategy="lazyOnload"
        onLoad={handleScriptLoad}
      />

      {/* Hero Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container">
          <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-primary-foreground/90">
            We'd love to hear from you. Reach out to us with any questions or inquiries.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="flex flex-col items-center text-center">
              <CardContent className="pt-6">
                <Phone className="mb-4 h-12 w-12 text-primary" />
                <h3 className="text-xl font-medium">Phone</h3>
                <p className="mt-2 text-muted-foreground">+91 8123520414</p>
              </CardContent>
            </Card>

            <Card className="flex flex-col items-center text-center">
              <CardContent className="pt-6">
                <Mail className="mb-4 h-12 w-12 text-primary" />
                <h3 className="text-xl font-medium">Email</h3>
                <p className="mt-2 text-muted-foreground">teachersbychoice23@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="flex flex-col items-center text-center">
              <CardContent className="pt-6">
                <Instagram className="mb-4 h-12 w-12 text-primary" />
                <h3 className="text-xl font-medium">Instagram</h3>
                <p className="mt-2 text-muted-foreground">
                  <a
                    href="https://instagram.com/teachers.by.choice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    @teachers.by.choice
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col items-center text-center">
              <CardContent className="pt-6">
                <Linkedin className="mb-4 h-12 w-12 text-primary" />
                <h3 className="text-xl font-medium">LinkedIn</h3>
                <p className="mt-2 text-muted-foreground">
                  <a
                    href="https://www.linkedin.com/company/teachers-by-choice-bengaluru/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Teachers By Choice
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-accent py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form ref={formRef} className="space-y-4" onSubmit={sendEmail}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select value={formData.subject} onValueChange={handleSelectChange}>
                        <SelectTrigger id="subject">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="enrollment">Student Enrollment</SelectItem>
                          <SelectItem value="tutor">Tutor Application</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Type your message here"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting || !scriptLoaded}>
                    {isSubmitting ? "Sending..." : scriptLoaded ? "Send Message" : "Loading..."}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">Visit Us</h2>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border shadow-sm">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3929.281150473987!2d77.5976!3d12.9223!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15060d7cdf87%3A0x4edd3a05218c7455!2sE%20End%20B%20Main%20Rd%2C%20Bengaluru%2C%20Karnataka!5e1!3m2!1sen!2sin!4v1741711064297!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-accent py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mx-auto max-w-3xl space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What are your tutoring hours?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer flexible tutoring hours on weekdays from 3 PM to 8 PM and on weekends from 10 AM to 6 PM. We
                  can also accommodate special timing requests based on availability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer online classes?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we offer both online and offline classes. Our online classes are conducted through interactive
                  platforms that ensure effective learning and engagement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I schedule a demo class?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You can schedule a free demo class by filling out the contact form on this page, calling us at +91
                  8123520414, or sending us a message on Instagram @teachers.by.choice.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What subjects do you offer tutoring for?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer tutoring for Mathematics, Science, Social Studies, English, Hindi, and Kannada for students
                  in grades 4-10 across ICSE, CBSE, and STATE boards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

