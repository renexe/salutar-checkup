import Image from "next/image"
import { Button } from "../ui/button"
import { Typography } from "../ui/typography"

export default function Footer() {
  return (
    <div className="relative bg-foreground w-full h-48 py-12">
      <div className="container space-x-4 md:space-x-0 flex items-center relative z-20">
        <section className="grid items-center grid-cols-1 md:grid-cols-2 mt-8 md:mt-0 gap-12">
          <div className="flex flex-col">
            <Typography variant="h4" color="white" className="mb-2">Endereço</Typography>
            <Typography variant="body1" color="white">Travessa Osvaldo Cruz, 32, Centro</Typography>
            <Typography variant="body1" color="white">Guanambi - Bahia</Typography>
          </div>
          <div className="flex flex-col">
            <Typography variant="h4" color="white" className="mb-2">Contatos</Typography>
            <Typography variant="body1" color="white">Telefone: 77 99920-0892</Typography>
            <Typography variant="body1" color="white">Email: contato@salutarcheckup.com.br</Typography>
          </div>
        </section>
      </div>
    </div>
  )
}

Footer.displayName = 'Footer'