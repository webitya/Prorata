import React from "react";

const HomePhoto1 = () => {
  return (
    <section className="bg-gray-200 py-12 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-6 text-center">
        ProRata Pitch On Shark Tank India Season 3
      </h2>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center md:p-0 p-3">
        {/* Left Side - Main Image */}
        <div className="flex justify-center h-full">
          <img
            src="/photo1.png"
            alt="ProRata on Shark Tank India"
            className=" shadow-lg  md:max-w-[590px] mx-w-[90vw] object-cover md:min-h-[430px] min-h-auto "
          />
        </div>

        {/* Right Side - Text and Shark Tank India Image */}
        <div className="bg-gray-900 text-white p-6  max-w-md text-center flex flex-col justify-center min-h-[400px]">
          <p className="text-lg !text-left">
            <span className="font-bold">Thanks a ton to  SHARKS Peyush Bansal  Anupam Mittal for driving us crazy with your support.</span>
           
          </p>
          <p className="mt-4 !text-left">
            We will surely revolutionize the way we own and experience cars.
          </p>
          <p className="mt-4 font-semibold">AS SEEN ON</p>
          <div className="flex justify-center mt-4">
            <img
              src="/sharklogo.png"
              alt="Shark Tank India"
              className="rounded-lg shadow-md max-w-xs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePhoto1;