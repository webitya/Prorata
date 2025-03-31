import { Link } from "react-router-dom"
import AboutFounderMessage from "../../Element/About/AbFounder"
import About3ProrataPromo from "../../Element/About/About3"
import AboutAdvisorSection from "../../Element/About/AboutAdvisor"
import AboutHeroDreamBanner from "../../Element/About/AboutHero"
import AboutHero2 from "../../Element/About/AboutHero2"
import LayoutEl from "../../Shared/LayoutEl"



const About=()=>{
    return (
        <>
        <LayoutEl>
           <AboutHeroDreamBanner/>
           <AboutHero2/>
           <About3ProrataPromo/>
           <AboutFounderMessage/>
           <AboutAdvisorSection/>
            {/* Sticky Browse Cars Button */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[50vw]">
        <Link to="/cars">
        
        <button className="w-full py-2 bg-[#DC3444] text-white cursor-pointer  font-bold rounded-lg shadow-lg hover:bg-[#DC3444] transition">
          BROWSE CARS
        </button></Link>
      </div>
        </LayoutEl>
        </>
    )
}
export default About