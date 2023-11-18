import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Typography } from "../ui/typography"
import { FaCircleChevronRight } from 'react-icons/fa6';

type CardProps = React.ComponentProps<typeof Card> & {
  title: string
  description: string
}

function ProgramCard({ ...props }: CardProps) {
  const { title, description } = props
  return (
    <Card className="border border-foreground bg-white cursor-pointer hover:shadow-xl" {...props}>
      <CardHeader>
        <CardTitle className="text-foreground">
          <Typography color="foreground" className="text-xl leading-6 font-semibold">
            {title}
          </Typography>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Typography variant="body1" color="foreground">
          {description}
        </Typography>
        <FaCircleChevronRight className="text-foreground text-xl" />
      </CardContent>
    </Card>
  )
}

export default function SectionPrograms() {
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
      <Typography variant="h1" color="foreground" className="text-center mb-12">Programas personalizados</Typography>
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative gap-6">
        {programs.map((program, index) => (
          <ProgramCard key={index} title={program.title} description={program.description} />
        ))}
      </div>
    </section>
  )
}

SectionPrograms.displayName = 'SectionPrograms'