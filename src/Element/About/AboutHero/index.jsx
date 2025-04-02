import React from "react";
import { Typography } from "antd";
import { EyeOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const AboutHeroDreamBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center md:min-h-[80vh] min-h-[80vh ] bg-gray-200 p-6 text-center">
      <Title level={2} className="text-black">
        It all starts with a <span className="font-bold">DREAM!</span>
      </Title>
      <div className="bg-white p-4 rounded-xl shadow-lg mt-4">
        <img src="/ab.jpg" alt="Dream" className="rounded-md w-64 h-auto" />
      </div>
      <Paragraph className="mt-4 text-lg text-gray-800">
        At Prorata, our <span className="font-bold">vision</span> is to make all those <br />
        <span className="font-bold text-black">'Dreams turn into Reality'.</span>
      </Paragraph>
    </div>
  );
};

export default AboutHeroDreamBanner;
