import Image from "next/image"
import { Button } from "../ui/button"
import { Typography } from "../ui/typography"

const Hero = () => {
  return (
    <div className="relative min-h-screen pt-8">
      <div className="container space-x-4 md:space-x-0 min-h-[calc(100vh-4rem)] flex items-center relative z-20">
        <section className="grid items-center grid-cols-1 md:grid-cols-2 mt-8 md:mt-0">
          <article className="flex flex-col justify-center md:pr-8 gap-4">
            <Typography variant="special-title" color="foreground" className="break-words hyphens-manual">Check-ups regulares, vida extraordi&shy;ná&shy;ria.</Typography>
            <Typography variant="h4" color="foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolor reprehenderit ea consequatur.
            </Typography>
            <div className="mt-2">
              <Button size="lg" >Saiba mais</Button>
            </div>
          </article>
          <div className="flex justify-center w-full h-full">
            <Image
              src="/assets/images/hero_image.webp"
              alt="Estetoscópio e um coração"
              width={380}
              height={412}
              sizes="(max-width: 768px) 22vw, 33vw"
            />
          </div>
        </section>
      </div>
    </div>
  )
}

Hero.displayName = 'Hero'

export default Hero