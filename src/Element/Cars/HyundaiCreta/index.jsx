import React, { useState } from "react";
import CarDetailParent from "../../../Shared/CarDetailsShared";
import LayoutEl from "../../../Shared/LayoutEl";


const HyundaiCreta  = () => {
  const [isModalVisible, setIsModalVisible] = useState(false); // Fix: State added here

  const car = {
    name: "HyundaiCreta ",
    image: "/images/car6.png",
    price: "₹18.00 lakhs",
    prorataPrice: "₹1.50 lakhs",
    amcOldPrice: "₹30,000",
    amcNewPrice: "₹15,000",
    amcTotal: "₹75,000",
  };

  const usageColumns = [
    { title: "No. of Tickets", dataIndex: "tickets", key: "tickets", align: "center" },
    { title: "No. of Days / year", dataIndex: "days", key: "days", align: "center" },
    { title: "Price", dataIndex: "price", key: "price", align: "center" },
  ];

  const usageData = [
    { key: 1, tickets: "1", days: "30 Days / year", price: "₹1.50 lakhs" },
    { key: 2, tickets: "2", days: "60 Days / year", price: "₹3.00 lakhs" },
    { key: 3, tickets: "3", days: "90 Days / year", price: "₹4.50 lakhs" },
  ];

  const comparisonColumns = [
    { title: "Metric", dataIndex: "metric", key: "metric", align: "center" },
    { title: "Co-owning Mahindra Thar", dataIndex: "coOwnership", key: "coOwnership", align: "center" },
    { title: "Renting Mahindra Thar", dataIndex: "renting", key: "renting", align: "center" },
  ];

  const comparisonData = [
    { key: 1, metric: "Price / Day", coOwnership: "₹1,000 / day", renting: "₹5,000 / day" },
    { key: 2, metric: "Number Plate", coOwnership: "White", renting: "Yellow" },
    { key: 3, metric: "Recognition", coOwnership: "Own", renting: "Rent" },
    { key: 4, metric: "Car Pickup and Drop", coOwnership: "At your doorstep", renting: "Not at your doorstep" },
    { key: 5, metric: "Car Quality", coOwnership: "New Car", renting: "Old Car" },
  ];

  return (
    <LayoutEl>

     <div className="py-20">
     <CarDetailParent
      car={car}
      usageColumns={usageColumns}
      usageData={usageData}
      comparisonColumns={comparisonColumns}
      comparisonData={comparisonData}
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible} // Fix: Passing modal state handler
    />
     </div>
    </LayoutEl>
  );
};

export default HyundaiCreta ;
