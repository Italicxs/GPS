import bgProcesses from '@/public/Processes.jpg';
import Image from 'next/image';
import Form from '@/app/Contact/ContactForm'

export default function Processes(){
    return(
        <main>
             <div className="relative min-h-[300px]">
        <Image
          src={bgProcesses}
          alt="Descripción de la imagen"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-opacity-30 backdrop-blur-lg">
        </div>
      </div>
      <div className="bg-transparent py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-light mb-6 text-[#4A60A1] text-center uppercase">
        BUSSINESS PROCESSES
        </h1>

        <div className="text-lg text-black p-4 text-left">
        At GPS, excellence in every step of the process is our promise. Although we are a new company, our team has over 15 years of experience in the field. We start by listening carefully to your needs and visions, bringing each idea to life through advanced technology and expert experience.
          <br />
          <br />
          Our team works passionately to create customized solutions that not only meet your expectations, but far exceed them. From meticulous planning to flawless execution, every detail is taken care of with the goal of providing you with exceptional results. Your satisfaction is our priority, and every project is an opportunity to demonstrate our commitment to quality and innovation.
          <br />
          <br />
          With GPS, you are in the hands of dedicated professionals who will transform your concepts into tangible realities. Together, we will make every step of the process an inspiring and rewarding experience. Trust us to make your visions a reality and take your project to the next level. It doesnt matter if its a small or ambitious project; we are here to exceed your expectations and leave a lasting mark on every step we take with you.
          <br/>
          <br/>
          At GPS, excellence in every project is our standard. From planning to execution, we turn your ideas into reality. Ready to start building and transforming? 
        <br></br><strong>Contact us now and materialize your dreams with us!</strong>
          </div>
          <Form></Form>
              </div>
          </div>

        </main>
    )
}