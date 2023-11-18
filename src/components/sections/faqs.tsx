import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Typography } from "../ui/typography"


export default function SectionFaqs() {
  const programs = [
    {
      title: 'Program 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus adipiscing elit',
    },
    {
      title: 'Program 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus adipiscing elit',
    },
    {
      title: 'Program 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus adipiscing elit',
    },
    {
      title: 'Program 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus adipiscing elit',
    },
    {
      title: 'Program 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus adipiscing elit',
    },
    {
      title: 'Program 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus adipiscing elit',
    },
    {
      title: 'Program 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus adipiscing elit',
    },
    {
      title: 'Program 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus adipiscing elit',
    },
  ]

  return (
    <section className="relative w-full mb-32 py-32">
      <Typography variant="h1" color="foreground" className="text-center mb-12">Perguntas frequentes</Typography>
      <div className="container px-4 md:px-40 lg:px-60">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <Typography variant="h4" color="foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
            </AccordionTrigger>
            <AccordionContent>
            <Typography variant="h5" color="foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus adipiscing elit
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus adipiscing elit
            </Typography>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <Typography variant="h4" color="foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
            </AccordionTrigger>
            <AccordionContent>
            <Typography variant="h5" color="foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus adipiscing elit
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus adipiscing elit
            </Typography>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <Typography variant="h4" color="foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
            </AccordionTrigger>
            <AccordionContent>
            <Typography variant="h5" color="foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus adipiscing elit
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus adipiscing elit
            </Typography>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

SectionFaqs.displayName = 'SectionFaqs'