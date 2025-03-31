import React, { useEffect, useState } from "react";

const HomeFractionalCarOwnership = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoId = "D7YU4bKnerU"; // Video ID
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  useEffect(() => {
    // Auto-play video after 3 seconds
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div className="flex flex-col items-center text-center bg-black py-12 px-6">
      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
      What is fractional car ownership?
      </h1>

      {/* Video Section */}
      
        

        <div className="flex justify-center py-10">
          {showVideo ? (
            <iframe
              width="590"
              height="350"
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

export default HomeFractionalCarOwnership;
