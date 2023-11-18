import Image from "next/image"
import { Typography } from "../ui/typography"

export default function SectionTwoColumns() {

  return (
    <section className="relative w-full mb-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Typography variant="h2" color="foreground" className="mb-8">
              Estamos presentes em mais de 20 cidades no sudoeste da Bahia
            </Typography>
            <Typography variant="h6" color="foreground" className="max-w-[33vw]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu euismod libero, sed lobortis libero. Nam a eleifend ligula. Phasellus venenatis est leo. Nullam porta magna sit amet semper pellentesque. Suspendisse gravida mauris non ex cursus, vel varius est congue. Integer fermentum vehicula purus at venenatis. Nam tristique a odio vel pretium. Mauris blandit tristique finibus. Suspendisse potenti. Vivamus vitae arcu enim. Morbi quis rutrum ipsum. Ut feugiat mi dictum purus varius, porttitor congue erat cursus. Ut pellentesque pretium nulla.
            </Typography>
          </div>
          <div className="col-span-2 md:col-span-1 relative min-h-[60vh]">
            <Image src="/assets/images/mapa.png" alt="Um grupo de médicos" width={576} height={620} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-24">
          <div className="col-span-2 md:col-span-1 relative min-h-[60vh]">
            <Image src="/assets/images/medicos.jpeg" alt="Um grupo de médicos" fill className="object-cover rounded-lg" />
          </div>
          <div className="col-span-2 md:col-span-1">
            <Typography variant="h2" color="foreground" className="mb-8 max-w-[40vw]">
              Contamos com um time de médicos especialistas de diversas áreas
            </Typography>
            <Typography variant="h6" color="foreground" className="max-w-[33vw]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu euismod libero, sed lobortis libero. Nam a eleifend ligula. Phasellus venenatis est leo. Nullam porta magna sit amet semper pellentesque. Suspendisse gravida mauris non ex cursus, vel varius est congue. Integer fermentum vehicula purus at venenatis. Nam tristique a odio vel pretium. Mauris blandit tristique finibus. Suspendisse potenti. Vivamus vitae arcu enim. Morbi quis rutrum ipsum. Ut feugiat mi dictum purus varius, porttitor congue erat cursus. Ut pellentesque pretium nulla.
            </Typography>
          </div>
        </div>
      </div>

    </section>
  )
}

SectionTwoColumns.displayName = 'SectionPrograms'