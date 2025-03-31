const HomeHowItWorks = () => {
    return (
      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">How does it work ?</h2>
  
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Step 1 */}
          <div className="text-center max-w-xs">
            <img src="img1.png" alt="Group of co-owners" className="mx-auto mb-4" />
            <p className="text-gray-700">
              We form a group of <span className="font-bold">4 - 12 co-owners</span> in a 10 Km locality.
            </p>
          </div>
  
          {/* Arrow */}
          <div className="hidden md:block text-2xl">➤</div>
  
          {/* Step 2 */}
          <div className="text-center max-w-xs">
            <img src="img2.png" alt="Buying tickets" className="mx-auto mb-4" />
            <p className="text-gray-700">
              As per your <span className="font-bold">usage</span>, buy <span className="font-bold">1-3 tickets</span> of the 12 tickets to partially own the car.
            </p>
          </div>
  
          {/* Arrow */}
          <div className="hidden md:block text-2xl">➤</div>
  
          {/* Step 3 */}
          <div className="text-center max-w-xs">
            <img src="img3.png" alt="Reserve dates" className="mx-auto mb-4" />
            <p className="text-gray-700">
              <span className="font-bold">RESERVE</span> the dates on the <span className="font-bold">Prorata app</span> to use the car.
            </p>
          </div>
        </div>
  
        {/* Footer info */}
        <div className="mt-8 bg-gray-900 text-white text-center py-3 px-6 rounded-lg inline-block">
          <p className="font-bold">[1 ticket = 8.33% ownership of the car = 30 days usage per year]</p>
        </div>
      </section>
    );
  };
  
  export default HomeHowItWorks;
  