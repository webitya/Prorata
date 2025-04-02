import React from "react";

const CompareRenting = () => {
  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-2xl font-bold text-center mb-4">
        Let's compare Renting with <br /> Co-owning a car!
      </h2>
      <div className="flex md:flex-row flex-col items-center gap-10">
        <img src="girl.png" alt="Comparison Girl" className="w-72" />
        <div>
          <div className="flex justify-center gap-2 mb-2">
            <button className="bg-red-500 text-white px-4 py-1 rounded">Features</button>
            <button className="bg-red-500 text-white px-4 py-1 rounded">Prorata</button>
            <button className="bg-red-500 text-white px-4 py-1 rounded">Rent</button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["Price", "Convenient", "Quality", "Number Plate", "Recognition"].map((feature, index) => (
              <React.Fragment key={index}>
                <div className="bg-gray-800 text-white px-4 py-2 rounded text-center">{feature}</div>
                <div className="bg-gray-600 text-white px-4 py-2 rounded text-center">
                  {index === 0 ? "X" : index === 3 ? "White" : index === 4 ? "Own" : "High"}
                </div>
                <div className="bg-gray-300 text-black px-4 py-2 rounded text-center">
                  {index === 0 ? "5X" : index === 3 ? "Yellow" : index === 4 ? "Rent" : "Low"}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareRenting;