import React from "react";

const ProrataAppSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 px-6 py-12">
      {/* Left Side - Video */}
      <div className="md:w-1/2 flex justify-end mt-8 md:mt-0 px-10">
        <div className="w-[250px] h-[500px] relative">
          <video
            src="/video.mp4"  // Ensure the video file is correctly placed in your public folder
            autoPlay
            loop
            muted
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Right Side - Text and App Store Buttons */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-800">Prorata App</h2>
        <p className="text-gray-700 text-2xl mt-4">
          <span className="font-bold italic">Seamless reservation</span> for convenience!
        </p>
        <p className="text-gray-700 text-2xl">
          <span className="font-bold italic">Equal distribution</span> of weekends/holidays
          amongst all the co-owners!
        </p>
        <p className="text-gray-700 text-2xl">
          <span className="font-bold italic">Paperless experience</span> as your car & personal
          documents can be accessed via app!
        </p>

        {/* App Store Buttons */}
        <div className="flex space-x-4 mt-6 justify-center md:justify-start">
          <img src="/app3.png" alt="App Store" className="h-12 cursor-pointer rounded-md" />
          <img src="/app4.png" alt="Google Play" className="h-12 cursor-pointer rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default ProrataAppSection;
