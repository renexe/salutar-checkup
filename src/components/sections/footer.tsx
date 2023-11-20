import Image from "next/image"
import { Button } from "../ui/button"
import { Typography } from "../ui/typography"
import Link from "next/link"

export default function Footer() {
  return (
    <>
      <div className="relative bg-foreground w-full py-12">
        <div className="container space-x-4 md:space-x-0 flex items-center relative z-20">
          <section className="grid grid-cols-1 md:grid-cols-4 mt-8 md:mt-0 gap-12">
            <div className="flex flex-col">
              <Typography variant="h4" color="white" className="mb-2">Mapa do site</Typography>
              <Link href="/"><Typography variant="link" color="white" className="w-fit">Início</Typography></Link>
              <Link href="/"><Typography variant="link" color="white" className="w-fit">Programas</Typography></Link>
              <Link href="/"><Typography variant="link" color="white" className="w-fit">Área de atuação</Typography></Link>
              <Link href="/"><Typography variant="link" color="white" className="w-fit">Contatos</Typography></Link>
            </div>
            <div className="flex flex-col">
              <Typography variant="h4" color="white" className="mb-2">Artigos</Typography>
              <Link href="/"><Typography variant="link" color="white" className="w-fit">A importância de um checkup</Typography></Link>
              <Link href="/"><Typography variant="link" color="white" className="w-fit">Como o histórico pode ajudar</Typography></Link>
              <Link href="/"><Typography variant="link" color="white" className="w-fit">O que dizem os especialistas</Typography></Link>
              <Link href="/"><Typography variant="link" color="white" className="w-fit">Cuidar de si é viver bem</Typography></Link>
            </div>
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
      <div className="flex justify-center py-2 bg-primary w-full"><Typography color="white">© 2023 Salutar Checkup</Typography></div>
    </>
  )
}

Footer.displayName = 'Footer'