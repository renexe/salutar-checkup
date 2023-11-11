import Image from "next/image";
import { Typography } from "../ui/typography";
import { Button } from "../ui/button";

export default function SectionFeatures() {
  return (
    <section className="relative w-full mb-32">
      <div className="container space-x-4 md:space-x-0 grid grid-cols-1 md:grid-cols-2 relative">

        <Image
          src="/assets/images/features_thumb.png"
          alt="Estetoscópio e um coração"
          width={430}
          height={430}
          sizes="(max-width: 768px) 22vw, 33vw"
          className="rounded-lg"
        />


        <div className="flex flex-col gap-4 items-center">
          <Typography variant="h1" color="foreground">
            Nós cuidamos de você.
          </Typography>
          <Typography variant="h4" color="foreground">
            Confira algumas de nossas especialidades.
          </Typography>
          <div className="mt-4 flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <Button size="fit" variant="outline">Cardiologia</Button>
              <Button size="fit" variant="outline">Geriatria</Button>
            </div>
            <div className="flex gap-4">
              <Button size="fit" variant="outline">Nutricionista</Button>
              <Button size="fit" variant="outline">Doenças pulmonares</Button>
              <Button size="fit" variant="outline">Diabetes</Button>

            </div>
            <div className="flex gap-4">
              <Button size="fit" variant="outline">Pneumologista</Button>
              <Button size="fit" variant="outline">Psiquiatria</Button>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

SectionFeatures.displayName = 'SectionFeatures'