import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Typography } from "../ui/typography"
import { FaArrowRightLong } from 'react-icons/fa6';
import Image from "next/image";
import { Button } from "../ui/button";

type CardProps = React.ComponentProps<typeof Card> & {
  title: string
  description: string
  image: string
}

function ArticleCard({ ...props }: CardProps) {
  const { title, description, image } = props
  return (
    <Card className="border border-foreground bg-white cursor-pointer hover:shadow-xl overflow-hidden border-t-0" {...props}>
      <CardHeader className="relative h-44">
        <Image
          src={image}
          alt="Imagem artigo"
          fill
          sizes="(max-width: 768px) 22vw, 33vw"
          className="object-cover"
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-foreground my-3 min-h-[50px]">
          <Typography variant="h4" color="foreground">
            {title}
          </Typography>
        </CardTitle>
        <Typography variant="body1" color="foreground">
          {description}
        </Typography>
        <div className="mt-1 w-full flex justify-end">
          <Button variant="link">Continue lendo <FaArrowRightLong className="ml-2" /></Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function SectionArticles() {
  const articles = [
    {
      title: 'A importância de um check-up',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus adipiscing elit',
      image: '/assets/images/familia01.jpeg'
    },
    {
      title: 'Como o histórico pode ajudar?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus adipiscing elit',
      image: '/assets/images/medico_tech01.jpg'
    },
    {
      title: 'O que dizem os especialistas',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus adipiscing elit',
      image: '/assets/images/medico01.jpg'
    },
    {
      title: 'Cuidar de si é viver bem',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus adipiscing elit',
      image: '/assets/images/estetoscopio_uniforme.webp'
    }
  ]

  return (
    <section className="relative w-full mb-32">
      <Typography variant="h1" color="foreground" className="text-center mb-12">Mais informações</Typography>
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative gap-6">
        {articles.map((article, index) => (
          <ArticleCard key={index} title={article.title} description={article.description} image={article.image} />
        ))}
      </div>
    </section>
  )
}

SectionArticles.displayName = 'SectionArticles'