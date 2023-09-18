import bgContact from '@/public/hero-contact.webp';
import Image from 'next/image';


export default function Hero() {
    return (
        <div className="relative min-h-[300px]">
        <Image
          src={bgContact}
          alt="Descripción de la imagen"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute inset-0 flex items-center text-white bg-opacity-30 backdrop-blur-lg pl-4">
        <h2 className="text-4xl font-light   mb-4">Get in touch
        <br></br>
        And let us be your partner in excellence.</h2>
        </div>
      </div>
    );
  }