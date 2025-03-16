import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container">
          <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">Thank You!</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 flex justify-center">
              <CheckCircle className="h-24 w-24 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Your submission has been received
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Thank you for reaching out to Teachers By Choice. We have received your message and will get back to you
              as soon as possible.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/">Return to Homepage</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

