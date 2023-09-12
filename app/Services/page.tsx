import Analysis from "./Analysis";
import Cards from "./Cards";
import Cards2 from "./Cards2";
import Detection from "./Detection";
import GasInstallation from "./GasInstallation";
import Hero from "./Hero";
import Installation from "./Installation";
import Mainteinance from "./Mainteinance";
import Plans from "./Plans";

export default function Services(){
    return(
        <main>
        <Hero></Hero>
        <Cards></Cards>
        <Cards2></Cards2>
        <div id="Gas-Installation">
        <GasInstallation />
      </div>
        <div id="Analysis">
        <Analysis />
      </div>
      <div id="Design">
        <Plans />
      </div> 
      <div id="Detection">
      <Detection></Detection>
        </div>   
        <div id="Mainteinance">
        <Mainteinance></Mainteinance>
        </div>
        <div id="Install">
        <Installation></Installation>
        </div>
       </main>
    )
}
