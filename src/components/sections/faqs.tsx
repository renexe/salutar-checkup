'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Typography } from "../ui/typography"


export default function SectionFaqs() {
  const faqs = [
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
  ]

  return (
    <section className="relative w-full mb-32 py-32">
      <Typography variant="h1" color="foreground" className="text-center mb-12">Perguntas frequentes</Typography>
      <div className="container px-4 md:px-40 lg:px-60">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg border-foreground px-4 border-b-0 last-of-type:border-b">
              <AccordionTrigger>
                <Typography variant="h4" color="foreground">{faq.question}</Typography>
              </AccordionTrigger>
              <AccordionContent>
                <Typography variant="h5" color="foreground">
                  {faq.answer}
                </Typography>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

SectionFaqs.displayName = 'SectionFaqs'