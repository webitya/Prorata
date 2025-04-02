import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const carData = [
  { id: 1, name: "Mahindra Thar", price: "₹1.50 lakhs", ticketPrice: "1 ticket price", image: "/images/car1.png", link: "/cars/mahindra-thar" },
  { id: 2, name: "Mahindra XUV 700", price: "₹2.00 lakhs", ticketPrice: "1 ticket price", image: "/images/car2.png", link: "/cars/mahindra-xuv-700" },
  { id: 3, name: "Jeep Meridian", price: "₹3.25 lakhs", ticketPrice: "1 ticket price", image: "/images/car3.png", link: "/cars/jeep-meridian" },
  { id: 4, name: "Toyota Fortuner", price: "₹3.50 lakhs", ticketPrice: "1 ticket price", image: "/images/car4.png", link: "/cars/toyota-fortuner" },
  { id: 5, name: "MINI Cooper S", price: "₹4.00 lakhs", ticketPrice: "1 ticket price", image: "/images/car5.png", link: "/cars/mini-cooper-s" },
  { id: 6, name: "Lexus NX 350h", price: "₹6.75 lakhs", ticketPrice: "1 ticket price", image: "/images/car6.png", link: "/cars/lexus-nx-350h" },
  { id: 7, name: "Audi Q5", price: "₹5.50 lakhs", ticketPrice: "1 ticket price", image: "/images/car7.png", link: "/cars/audi-q5" },
  { id: 8, name: "BMW X3", price: "₹6.00 lakhs", ticketPrice: "1 ticket price", image: "/images/car8.png", link: "/cars/bmw-x3" },
  { id: 9, name: "Mercedes GLA", price: "₹7.25 lakhs", ticketPrice: "1 ticket price", image: "/images/car9.png", link: "/cars/mercedes-gla" },
  { id: 10, name: "Hyundai Creta", price: "₹1.75 lakhs", ticketPrice: "1 ticket price", image: "/images/car10.png", link: "/cars/hyundai-creta" },
  { id: 11, name: "Tata Harrier", price: "₹2.25 lakhs", ticketPrice: "1 ticket price", image: "/images/car11.png", link: "/cars/tata-harrier" },
  { id: 12, name: "Kia Seltos", price: "₹2.50 lakhs", ticketPrice: "1 ticket price", image: "/images/car12.png", link: "/cars/kia-seltos" },
  { id: 13, name: "Honda City", price: "₹1.90 lakhs", ticketPrice: "1 ticket price", image: "/images/car13.png", link: "/cars/honda-city" },
  { id: 14, name: "Volkswagen Virtus", price: "₹2.10 lakhs", ticketPrice: "1 ticket price", image: "/images/car14.png", link: "/cars/volkswagen-virtus" },
  { id: 15, name: "Skoda Slavia", price: "₹2.30 lakhs", ticketPrice: "1 ticket price", image: "/images/car15.png", link: "/cars/skoda-slavia" },
  { id: 16, name: "Ford Endeavour", price: "₹3.75 lakhs", ticketPrice: "1 ticket price", image: "/images/car16.png", link: "/cars/ford-endeavour" },
  { id: 17, name: "Nissan Magnite", price: "₹1.60 lakhs", ticketPrice: "1 ticket price", image: "/images/car17.png", link: "/cars/nissan-magnite" },
  { id: 18, name: "Renault Kiger", price: "₹1.55 lakhs", ticketPrice: "1 ticket price", image: "/images/car18.png", link: "/cars/renault-kiger" },
  { id: 19, name: "Maruti Suzuki Swift", price: "₹1.25 lakhs", ticketPrice: "1 ticket price", image: "/images/car19.png", link: "/cars/maruti-swift" },
  { id: 20, name: "MG Hector", price: "₹2.75 lakhs", ticketPrice: "1 ticket price", image: "/images/car20.png", link: "/cars/mg-hector" },
  { id: 21, name: "Hyundai Venue", price: "₹1.85 lakhs", ticketPrice: "1 ticket price", image: "/images/car21.png", link: "/cars/hyundai-venue" }
];

const BrowseCarsEl = () => {
  const [visibleCars, setVisibleCars] = useState(6);

  const loadMoreCars = () => {
    setVisibleCars((prev) => Math.min(prev + 3, carData.length));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 50
      ) {
        loadMoreCars();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="px-4 py-12">
      <h2 className="text-center text-3xl font-bold mb-6">Browse Cars</h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {carData.slice(0, visibleCars).map((car) => (
          <Link key={car.id} to={car.link}>
            <div className="bg-white p-4 shadow-lg rounded-lg cursor-pointer hover:shadow-2xl transition">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-56 object-cover rounded-lg"
              />
              <h3 className="mt-3 text-lg font-semibold">{car.name}</h3>
              <p className="text-gray-700">{car.price}</p>
              <p className="text-sm text-gray-500">{car.ticketPrice}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Load More Button (Visible only if more cars exist) */}
      {visibleCars < carData.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMoreCars}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default BrowseCarsEl;
