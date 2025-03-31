import { Card } from "antd";
import { RightOutlined } from "@ant-design/icons";

const faqs = [
  "Who will be owning the cars?",
  "Who pays for regular servicing?",
  "How much does PRORATA charge?",
  "Can I take a car loan or EMI?",
  "How many days do I get the car in a year?",
  "Can I sell my ownership shares?",
];

const FAQSection = () => {
  return (
    <div className="flex flex-col items-center py-20 bg-white">
      <h2 className="text-3xl font-semibold text-gray-900 mb-10">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-900 text-white flex justify-between items-center px-6 py-4 rounded-full w-full cursor-pointer hover:bg-gray-800 transition">
            <span className="text-sm font-medium">{faq}</span>
            <RightOutlined className="!text-red-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;