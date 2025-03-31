import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoId = "D7YU4bKnerU"; // Extracted video ID
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  useEffect(() => {
    // Automatically show video after 3 seconds
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return (
    <div className="flex flex-col min-h-[90vh] md:flex-row items-center justify-between bg-black text-white px-6 py-20">
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-semibold">Upgrade your lifestyle!</h1>
        <p className="text-3xl md:text-4xl text-blue-400 mt-4">
          By only paying <span className="font-bold">8.33%</span> to buy your DREAM CAR now.
        </p>
        {/* App Buttons */}
        <div className="flex space-x-4 mt-6 justify-center md:justify-start">
          <img src="/app1.png" alt="App Store" className="h-12 cursor-pointer rounded-md" />
          <img src="/app2.png" alt="Google Play" className="h-12 cursor-pointer rounded-md" />
        </div>
      </div>

      {/* Right Side - YouTube Video */}
      <div className="md:w-1/2 mt-8 md:mt-0 p-3 flex justify-center">
        {showVideo ? (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <img
            src={thumbnailUrl}
            alt="YouTube Video Thumbnail"
            className="w-[560px] h-[315px] rounded-lg shadow-lg cursor-pointer"
            onClick={() => setShowVideo(true)}
            onError={(e) => {
              e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            }}
          />
        )}
      </div>
    </div>
  );
};

export default HeroSection;
