import Hero from '@/app/components/Hero'
import AboutUs from '@/app/components/AboutUs'
import Services from '@/app/components/Services'
import HowWeWork from './components/HowWeWork';
import WhoAre from './components/WhoAre';
import WhoWeHelp from './components/HowWeHelp';
import WhyUs from './components/WhyUs';

export default function Home() {
  return (
    <main>
      <Hero />
      <div id='AboutUs'>
      <AboutUs></AboutUs>
      </div>
      <Services></Services>
      <HowWeWork></HowWeWork>
      <WhoAre></WhoAre>
      <WhoWeHelp></WhoWeHelp>
      <WhyUs></WhyUs>
    </main>
  );
}