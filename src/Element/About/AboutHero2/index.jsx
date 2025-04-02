import React from "react";
import { Typography } from "antd";

const { Paragraph } = Typography;

const DreamCarBanner = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between min-h-[50vh] md:min-h-[70vh] bg-gray-900 p-6 md:p-16 text-white">
      
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left max-w-2xl">
        <Paragraph className="!text-2xl md:text-2xl font-light !text-white leading-relaxed">
          How often have you passed across a <span className="text-blue-400 font-bold">Mercedes</span>
          <br /> and looked at it like a far-fetched dream?
        </Paragraph>
        <Paragraph className="!text-2xl md:text-2xl mt-6 font-light !text-white leading-relaxed">
          Felt like you needed a <span className="text-blue-400 font-bold">premium car</span> to fetch that next client?
        </Paragraph>
        <Paragraph className="!text-2xl md:text-2xl mt-6 font-light !text-white leading-relaxed">
          Or wanted to drive a <span className="text-blue-400 font-bold">Thar</span> to fulfill your off-roading dreams?
        </Paragraph>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0 relative">
        <img 
          src="/ab2.png" 
          alt="Vintage Car" 
          className="w-[250px] md:w-[400px] h-auto"
        />
      </div>
      
    </div>
  );
};

export default DreamCarBanner;
