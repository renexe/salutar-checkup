import { Typography } from "../ui/typography"

const Hero = () => {
  return (
    <section className="relative bg-cover bg-[url(/assets/images/background_hero.jpg)] w-full py-16 px-8 grid items-center grid-cols-[repeat(auto-fit_minmax(240px,_1fr))] min-h-screen">
      <Typography variant="h1">O que faz você melhor, faz a gente melhor</Typography>
      <article>
        <p>Explore local breweries with just one click and stirred by starlight across the centuries light years great turbulent clouds circumnavigated paroxysm of global death.</p>
        <a href="#breweries">Browse Breweries</a>
      </article>
    </section>
  )
}

Hero.displayName = 'Hero'

export default Hero