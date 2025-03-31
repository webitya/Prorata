import { Link } from "react-router-dom"
import HomeAppProrataAppSection from "../../Element/HomePageEl/HomeApp"
import HomeCompareRentingVsOwning from "../../Element/HomePageEl/HomeCompare"
import HomeFAQSection from "../../Element/HomePageEl/HomeFaqs"
import HomeFractionalCarOwnership from "../../Element/HomePageEl/HomeFractionalCars"
import HomeHowItWorks from "../../Element/HomePageEl/HomeHowItsWorks"
import HomeHeroSection from "../../Element/HomePageEl/HomePageHeroel"
import HomePhoto1 from "../../Element/HomePageEl/HomePhoto1"
import HomeSharkTank from "../../Element/HomePageEl/HomeSharkTank"
import HomeWhyProrata from "../../Element/HomePageEl/HomeWhy"
import LayoutEl from "../../Shared/LayoutEl"


const HomePage=()=>{
    return (
        <>
         <LayoutEl>
           <HomeHeroSection/>
           <HomePhoto1/>
           <HomeHowItWorks/>
           <HomeWhyProrata/>
           <HomeCompareRentingVsOwning/>
           <HomeFractionalCarOwnership/>
           <HomeAppProrataAppSection/>
           <HomeSharkTank/>
           <HomeFAQSection/>
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
export default HomePage