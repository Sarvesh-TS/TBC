import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsPage() {
  const reviews = [
    {
      id: 1,
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NcYZtCXXRB4y52F7NIFHDp7Ok9fYZP.png",
      alt: "Review by Mythili Dasari",
    },
    {
      id: 2,
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K6ZqLTHzzWAH3lB0s3jtrbOev1v7wP.png",
      alt: "Review by Amit Hegde",
    },
    {
      id: 3,
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-H8l8t1Pl0DSgqlvWmczljCqzqbkCc2.png",
      alt: "Review by Aditi Phaneesh",
    },
    {
      id: 4,
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uHfypHeHgITHfxNxNtWDbbPqsqOKvA.png",
      alt: "Review by Anirudha P",
    },
    {
      id: 5,
      imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4FeRIFs24cDizRw4JfuiWcMA0lUePE.png",
      alt: "Review by Divya S L",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container">
          <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl animate-fade-in">Student Reviews</h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-primary-foreground/90">
            See what our students and parents have to say about their experience with Teachers By Choice.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <Card
                key={review.id}
                className="overflow-hidden group transition-all duration-300 hover:shadow-lg hover:border-[#fec64f]"
              >
                <CardContent className="p-4">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={review.imageUrl || "/placeholder.svg"}
                      alt={review.alt}
                      width={600}
                      height={200}
                      className="w-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Ready to join our community?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Experience the difference with our personalized tutoring approach.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105 hover:shadow-md">
                <Link href="/join">Enroll Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="transition-transform duration-300 hover:scale-105 hover:shadow-md"
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

