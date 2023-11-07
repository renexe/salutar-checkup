import { Typography } from "../ui/typography"

const Hero = () => {
  return (
    <section className="relative bg-cover bg-[url(/assets/images/hero-1.png)] w-full h-full py-16 px-20 grid items-center grid-cols-2 min-h-[calc(100vh-4rem)]">
      <article className="h-full flex flex-col justify-center pr-8">
        <Typography variant="special-title" color="primary-foreground">Check-ups regulares, vida extraordinária.</Typography>
        <Typography variant="h4" color="primary-foreground" className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolor reprehenderit ea consequatur deleniti provident molestiae minus illum fugit.
        </Typography>
      </article>
      <article>
        <p>Explore local breweries with just one click and stirred by starlight across the centuries light years great turbulent clouds circumnavigated paroxysm of global death.</p>
        <a href="#breweries">Browse Breweries</a>
      </article>
    </section>
  )
}

Hero.displayName = 'Hero'

export default Hero