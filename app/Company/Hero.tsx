import bgCompany from '@/public/hero-company.webp';
import Image from 'next/image';


export default function Hero() {
    return (
        <div className="relative min-h-[300px]">
        <Image
          src={bgCompany}
          alt="Descripción de la imagen"
          fill
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black-500 bg-opacity-30 backdrop-blur-lg">
          <h2 className="text-4xl font-light mb-4 uppercase">The Expertise of an Expert with<br></br>the proximity of a Local Company.</h2>
        </div>
      </div>
    );
  }