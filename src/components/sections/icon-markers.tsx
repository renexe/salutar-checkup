import { FaFileMedical, FaHandHoldingMedical, FaHouseMedical } from 'react-icons/fa6';
import { Typography } from '../ui/typography';

type IconMarkersProps = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

const IconMarker = ({ icon: Icon, title, description }: IconMarkersProps) => (
  <div className='flex justify-center flex-col items-center p-8'>
    <Icon className="text-white text-4xl" />
    <Typography variant="h4" className="text-white mt-4 text-center">{title}</Typography>
    <Typography variant="body1" className="text-white mt-4 text-center">{description}</Typography>
  </div>
)

export default function SectionIconMarkers() {
  return (
    <section className="relative w-full py-24 bg-foreground mt-12">
      <div className="container space-x-4 md:space-x-0 grid grid-cols-1 md:grid-cols-3 relative">
        <IconMarker icon={FaFileMedical} title="Protocolos certificados" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus adipiscing elit" />
        <IconMarker icon={FaHandHoldingMedical} title="Programas personalizados" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus adipiscing elit" />
        <IconMarker icon={FaHouseMedical} title="Cuidado sem sair de casa" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus adipiscing elit" />
      </div>
    </section>
  )
}