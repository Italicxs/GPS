import Image from "next/image";
import mpContent from "@/public/mapacontent.png.webp";

export default function WhoAre() {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto text-center">
        <h1 className=" -xl font-light lg:text-2xl mb-4 text-black uppercase">WHERE WE ARE</h1>
        <div className="flex flex-wrap items-center">

          <div className="w-full md:w-1/2 md:pr-8">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-black/60 mb-4 uppercase">THE PROVINCES THAT WE SERVE</h2>
              <p className="text-lg text-black text-left p-3">
              In our company, we greatly value the proximity to our customers. Currently, we bring our gas plumbing solutions to the provinces of Panama, Panama Oeste and Darien. Our commitment is to be present in these areas, providing a close and reliable service to meet all the needs of our customers <b>in every place they need us.</b>
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-4 md:mt-0 md:max-w-md mx-auto sm:mx-0">
            <div className="bg-white p-4 rounded-sm shadow-md">
            <Image
                src={mpContent}
                alt="Map"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
