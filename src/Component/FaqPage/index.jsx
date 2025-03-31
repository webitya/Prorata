import { useState } from "react";
import { Collapse } from "antd";
import LayoutEl from "../../Shared/LayoutEl";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const faqData = [
  {
    category: "Ownership",
    faqs: [
      { question: "Who will be owning the cars?", answer: "The cars are owned by the company." },
      { question: "Can I sell my ownership shares?", answer: "Yes, you can sell your shares anytime." },
      { question: "What happens if I want to exit?", answer: "You can exit by selling your shares." },
      { question: "Are there any restrictions on ownership?", answer: "No, ownership is flexible and transferable." },
      { question: "Can I add a co-owner?", answer: "Yes, co-owners can be added as per company policy." },
    ],
  },
  {
    category: "Financials",
    faqs: [
      { question: "How much does PRORATA charge?", answer: "PRORATA charges a small subscription fee." },
      { question: "Can I take a car loan or EMI?", answer: "Yes, you can avail a loan or EMI options." },
      { question: "Are there any hidden charges?", answer: "No, all charges are transparent and disclosed upfront." },
      { question: "What is the refund policy?", answer: "Refunds are provided based on specific conditions." },
      { question: "How do I make payments?", answer: "Payments can be made online via multiple methods." },
    ],
  },
  {
    category: "Usage",
    faqs: [
      { question: "How many days do I get the car in a year?", answer: "You can use the car for a fixed number of days per year." },
      { question: "Who pays for regular servicing?", answer: "The servicing costs are covered in the subscription." },
      { question: "Can I use the car for commercial purposes?", answer: "No, the car is for personal use only." },
      { question: "What happens if the car breaks down?", answer: "A replacement car will be provided in case of breakdown." },
      { question: "Is roadside assistance included?", answer: "Yes, 24/7 roadside assistance is included." },
    ],
  },
  {
    category: "Insurance",
    faqs: [
      { question: "Is insurance included?", answer: "Yes, comprehensive insurance is included in the plan." },
      { question: "What does the insurance cover?", answer: "It covers accidental damages, theft, and third-party liabilities." },
      { question: "Do I need to pay for insurance separately?", answer: "No, it is part of the subscription." },
      { question: "How do I file an insurance claim?", answer: "You can file a claim via our support portal." },
      { question: "Are there any deductibles?", answer: "Yes, minimal deductibles may apply depending on the case." },
    ],
  },
  {
    category: "Maintenance",
    faqs: [
      { question: "Who handles maintenance?", answer: "Maintenance is managed by our service team." },
      { question: "How often is servicing required?", answer: "Servicing is scheduled based on usage and mileage." },
      { question: "What if I damage the car?", answer: "Minor damages are covered, but major damages may have costs." },
      { question: "Are tires and batteries covered?", answer: "Yes, they are covered under normal wear and tear." },
      { question: "Do I need to visit a specific service center?", answer: "Yes, we have partnered service centers for maintenance." },
    ],
  },
  {
    category: "Support",
    faqs: [
      { question: "How can I contact support?", answer: "You can reach us via email or phone 24/7." },
      { question: "What is the response time?", answer: "We aim to respond within 24 hours." },
      { question: "Can I request a callback?", answer: "Yes, you can schedule a callback through the app." },
      { question: "What if I have a complaint?", answer: "Complaints can be raised through our grievance system." },
      { question: "Do you offer multilingual support?", answer: "Yes, we provide support in multiple languages." },
    ],
  },
];

const FAQMainSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(faqData[0].category);

  return (
    <LayoutEl>
      <div className="flex flex-col items-center py-24 bg-gray-100 text-gray-900">
        <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="flex w-full max-w-5xl bg-gray-200 rounded-lg shadow-lg overflow-hidden">
          {/* Left Side - Categories */}
          <div className="w-1/3 p-4 bg-white border-r border-gray-300">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            {faqData.map((category) => (
              <div
                key={category.category}
                className={`p-3 cursor-pointer flex justify-between items-center text-lg font-medium rounded-lg transition-all duration-300 ${
                  selectedCategory === category.category
                    ? "bg-black text-white"
                    : "text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setSelectedCategory(category.category)}
              >
                {category.category}
                {selectedCategory === category.category && <RightOutlined className="text-white" />}
              </div>
            ))}
          </div>

          {/* Right Side - FAQs */}
          <div className="w-2/3 p-6 bg-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{selectedCategory}</h3>
            <Collapse accordion expandIconPosition="right" className="bg-white rounded-lg shadow">
              {faqData
                .find((cat) => cat.category === selectedCategory)
                ?.faqs.map((faq, index) => (
                  <Collapse.Panel 
                    header={<span className="text-gray-800 font-medium">{faq.question}</span>} 
                    key={index} 
                    className="bg-white border-b border-gray-300"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </Collapse.Panel>
                ))}
            </Collapse>
          </div>
        </div>
      </div>
       {/* Sticky Browse Cars Button */}
       <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[50vw]">
        <Link to="/cars">
        
        <button className="w-full py-2 bg-[#DC3444] text-white cursor-pointer  font-bold rounded-lg shadow-lg hover:bg-[#DC3444] transition">
          BROWSE CARS
        </button></Link>
      </div>
    </LayoutEl>
  );
};

export default FAQMainSection;
