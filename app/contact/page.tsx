import ContactForm from "@/components/contact-form"
import PageTransitionLayout from "@/components/page-transition-layout"
import PageHero from "@/components/page-hero"

export default function Contact() {
  return (
    <PageTransitionLayout>
      <PageHero
        title="Contact Me"
        description="Get in touch for collaborations, opportunities, or just to say hello!"
      />
      <div className="min-h-screen p-8 overflow-auto">
        <ContactForm />
      </div>
    </PageTransitionLayout>
  )
}

