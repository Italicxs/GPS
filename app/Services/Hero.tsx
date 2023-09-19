import bgServices from '@/public/Services.webp';
import Image from 'next/image';


export default function Hero() {
    return (
        <div className="relative min-h-[300px]">
        <Image
          src={bgServices}
          alt="Descripción de la imagen"
          fill
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-opacity-30 backdrop-blur-lg">
          <h2 className="text-4xl font-medium mb-4 uppercase">WE ARE EXPERTS IN</h2>
        </div>
      </div>
    );
  }