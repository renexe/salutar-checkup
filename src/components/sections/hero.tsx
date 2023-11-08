import { MainLoginForm } from "../forms/main-login-form"
import { Button } from "../ui/button"
import { Typography } from "../ui/typography"

const Hero = () => {
  return (
    <div className="relative bg-cover w-full bg-[url(/assets/images/hero-1.png)] min-h-[calc(100vh-4rem)] after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-primary/30 after:z-10">
      <div className="container space-x-4 md:space-x-0 min-h-[calc(100vh-4rem)] flex items-center relative z-20">
        <section className="grid items-center grid-cols-1 md:grid-cols-2 mt-8 md:mt-0">
          <article className="flex flex-col justify-center md:pr-8 pb-8 ">
            <Typography variant="special-title" color="primary-foreground" className="break-words hyphens-manual">Check-ups regulares, vida extraordi&shy;ná&shy;ria.</Typography>
            <Typography variant="h4" color="primary-foreground" className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolor reprehenderit ea consequatur deleniti provident molestiae minus illum fugit.
            </Typography>
            <Button className="mt-8">Saiba mais</Button>
          </article>
          <div className="hidden md:flex justify-end md:justify-center h-full w-full items-center">
            <div className="bg-primary/60 border border-primary-accent w-[333px] h-[399px] backdrop-blur-lg flex flex-col items-center gap-6 p-4">
              <Typography variant="h4" color="primary-foreground">Área de usuário</Typography>
              <MainLoginForm />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

Hero.displayName = 'Hero'

export default Hero