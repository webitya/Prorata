import React from "react";
import { Typography } from "antd";

const { Paragraph } = Typography;

const DreamCarBanner = () => {
  return (
    <div className="flex items-center justify-around min-h-[70vh] mb-3 bg-gray-900 p-10 !text-white">
      <div className="flex-1 text-left max-w-lg">
        <Paragraph className="!text-xl !text-white">
          How often have you passed across a <span className="text-blue-400 font-bold">Mercedes</span>
          <br /> and looked at it like a far-fetched dream?
        </Paragraph>
        <Paragraph className="!text-xl mt-6 !text-white">
          Felt like you needed a <span className="text-blue-400 font-bold">premium car</span> to fetch that next client?
        </Paragraph>
        <Paragraph className="!text-xl mt-6 !text-white">
          Or wanted to drive a <span className="text-blue-400 font-bold">Thar</span> to fulfill your off-roading dreams?
        </Paragraph>
      </div>
      <div className="flex-1 flex justify-end">
        <img src="/ab2.png" alt="Vintage Car" className="w-96 h-auto" />
      </div>
    </div>
  );
};

export default DreamCarBanner;