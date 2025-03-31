import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Component/HomePage";
import FAQMainSection from "./Component/FaqPage";
import BrowseCars from "./Component/BrowseCars";

// Import individual car detail components manually

import MahindraThar from "./Element/Cars/MahindraThar";
import MahindraXUV700 from "./Element/Cars/MahindraXuv700";
import ToyotaFortuner from "./Element/Cars/ToyotoFortuner";
import JeepMeridian from "./Element/Cars/JeepMeridian";
import MiniCooperS from "./Element/Cars/MinniCooperS";
import LexusNX350h from "./Element/Cars/LexusNx350h";
import AudiQ5 from "./Element/Cars/AudiQ5";
import BMWX3 from "./Element/Cars/BmwX3";
import MercedesGLA from "./Element/Cars/MercedesGla";
import HyundaiCreta from "./Element/Cars/HyundaiCreta";
import TataHarrier from "./Element/Cars/TataHarrier";
import KiaSeltos from "./Element/Cars/KiaSeltos";
import HondaCity from "./Element/Cars/HondaCity";
import VolkswagenVirtus from "./Element/Cars/VolkswagenVirtus";
import SkodaSlavia from "./Element/Cars/SkodaSlavia";
import FordEndeavour from "./Element/Cars/FordEndeavour";
import NissanMagnite from "./Element/Cars/NissianMagnite";
import RenaultKiger from "./Element/Cars/RenaultKiger";
import MarutiSwift from "./Element/Cars/MarutiSwift";
import MGHector from "./Element/Cars/MgHector";
import HyundaiVenue from "./Element/Cars/HyundaiVenue";
import About from "./Component/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faqs" element={<FAQMainSection />} />
        <Route path="/cars" element={<BrowseCars />} />
        <Route path="/about" element={<About/>} />
        {/* Manual Routes for Each Car */}
        <Route path="/cars/mahindra-thar" element={< MahindraThar/>} />
        <Route path="/cars/mahindra-xuv-700" element={<MahindraXUV700/>} />
        <Route path="/cars/jeep-meridian" element={<JeepMeridian />} />
        <Route path="/cars/toyota-fortuner" element={<ToyotaFortuner />} />
        <Route path="/cars/mini-cooper-s" element={<MiniCooperS />} />
        <Route path="/cars/lexus-nx-350h" element={<LexusNX350h />} />
        <Route path="/cars/audi-q5" element={<AudiQ5 />} />
        <Route path="/cars/bmw-x3" element={<BMWX3 />} />
        <Route path="/cars/mercedes-gla" element={<MercedesGLA />} />
        <Route path="/cars/hyundai-creta" element={<HyundaiCreta />} />
        <Route path="/cars/tata-harrier" element={<TataHarrier />} />
        <Route path="/cars/kia-seltos" element={<KiaSeltos />} />
        <Route path="/cars/honda-city" element={<HondaCity />} />
        <Route path="/cars/volkswagen-virtus" element={<VolkswagenVirtus />} />
        <Route path="/cars/skoda-slavia" element={<SkodaSlavia />} />
        <Route path="/cars/ford-endeavour" element={<FordEndeavour />} />
        <Route path="/cars/nissan-magnite" element={<NissanMagnite />} />
        <Route path="/cars/renault-kiger" element={<RenaultKiger />} />
        <Route path="/cars/maruti-swift" element={<MarutiSwift />} />
        <Route path="/cars/mg-hector" element={<MGHector />} />
        <Route path="/cars/hyundai-venue" element={<HyundaiVenue />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
