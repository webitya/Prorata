const HomeWhyProrata = () => {
    return (
      <section className="py-12 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-8">Why Prorata ?</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Item 1 */}
          <div className="flex flex-col items-center">
            <img src="im.png" alt="Trusted Community" className="w-44 h-44 mb-2" />
            <p>
              You co-own with a <span className="text-blue-400 font-semibold">trusted community</span> of users.
            </p>
          </div>
  
          {/* Item 2 */}
          <div className="flex flex-col items-center">
            <img src="im2.png" alt="Full Tank Car" className="w-44 h-44 mb-2" />
            <p>
              You will get a <span className="text-blue-400 font-semibold">full tank car at your doorstep</span> and you have to return the <span className="text-red-400 font-semibold">full tank car to our driver</span>.
            </p>
          </div>
  
          {/* Item 3 */}
          <div className="flex flex-col items-center">
            <img src="im3.png" alt="New White Plate Car" className="w-44 h-44 mb-2" />
            <p>
              It is a <span className="text-blue-400 font-semibold">newly bought white plate car</span> from the showroom.
            </p>
          </div>
  
          {/* Item 4 */}
          <div className="flex flex-col items-center">
            <img src="im4.png" alt="Resale Value" className="w-44 h-44 mb-2" />
            <p>
              You get the <span className="text-blue-400 font-semibold">resale value</span> at the end of <span className="text-blue-400 font-semibold">5 years</span>.
            </p>
          </div>
  
          {/* Item 5 */}
          <div className="flex flex-col items-center">
            <img src="im5.png" alt="One-Time Investment" className="w-44 h-44 mb-2" />
            <p>
              It’s a <span className="text-blue-400 font-semibold">one-time investment</span>. No loan! No EMI!
            </p>
          </div>
  
          {/* Item 6 */}
          <div className="flex flex-col items-center">
            <img src="im6.png" alt="Service & Maintenance" className="w-44 h-44 mb-2" />
            <p>
              Prorata takes care of the <span className="text-blue-400 font-semibold">service, maintenance & insurance</span> of the car.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default HomeWhyProrata;
  