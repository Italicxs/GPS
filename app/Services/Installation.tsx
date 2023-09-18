import Image from "next/image";
import mpContent from "@/public/Stove.webp";
import Link from "next/link";

export default function Installation() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h1 className="text-xl lg:text-2xl font-light mb-4 text-black uppercase">INSTALLATIONS</h1>
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full md:w-1/2 md:pr-8">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-black/60 mb-4 uppercase">STOVE & FIREPLACE INSTALLATION</h2>
              <p className="text-lg text-black text-left p-3">
              Want to add warmth to your space? Specializing in gas plumbing and gas appliance installation, we offer everything from gas stoves and fireplaces to create cozy environments, to gas dryers for a more efficient laundry room. Trust our expertise to bring comfort to your home or business.              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:pr-8 md:mt-0 md:max-w-md mx-auto sm:mx-0">
            <div className="bg-white p-4 rounded-sm shadow-md">
            <div className="relative h-60">
                <Image
                  src={mpContent}
                  alt="Map"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-sm"
                />
              </div>
            </div>
          </div>
        </div>
        <Link href="/Contact">
        <button className="bg-blue-500 text-white px-4 py-2 mt-10 rounded-lg text-sm sm:text-base md:text-lg lg:text-xl">
            Contact Us
        </button>
        </Link>
      </div>
    </div>
  );
}
