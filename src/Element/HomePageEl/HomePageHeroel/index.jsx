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
    <div className="flex flex-col md:flex-row items-center justify-between bg-black text-white px-6 py-24 md:min-h-screen">
      {/* Left Content - 40% Width on Desktop */}
      <div className="md:w-2/5 text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          Upgrade your lifestyle!
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#0593D1] mt-4">
          By only paying <span className="font-bold">8.33%</span> to buy your DREAM CAR now.
        </p>

        {/* App Buttons - Shown on larger screens */}
        <div className="hidden sm:flex flex-wrap gap-4 mt-6">
          <img src="/app1.png" alt="App Store" className="h-12 cursor-pointer rounded-md" />
          <img src="/app2.png" alt="Google Play" className="h-12 cursor-pointer rounded-md" />
        </div>
      </div>

      {/* Right Side - Video - 50% Width on Desktop */}
      <div className="md:w-1/2 flex flex-col items-center mt-8 md:mt-0">
        <div className="w-full  p-3">
          {showVideo ? (
            <iframe
              className="w-full h-52 sm:h-64 md:h-72 lg:h-80 rounded-lg shadow-lg"
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
              className="w-full h-52 sm:h-64 md:h-72 lg:h-80 rounded-lg shadow-lg cursor-pointer"
              onClick={() => setShowVideo(true)}
              onError={(e) => {
                e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
              }}
            />
          )}
        </div>

        {/* App Buttons - Visible only on small screens */}
        <div className="flex sm:hidden flex-wrap gap-4 mt-6">
          <img src="/app1.png" alt="App Store" className="h-10 cursor-pointer rounded-md" />
          <img src="/app2.png" alt="Google Play" className="h-10 cursor-pointer rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
