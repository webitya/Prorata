import React from "react";
import { Button, Table, Modal } from "antd";

const CarDetailParent = ({ car, usageColumns, usageData, comparisonColumns, comparisonData, isModalVisible, setIsModalVisible }) => {
  return (
    <div className="mx-auto p-6 bg-white">
      {/* Image & Details Layout */}
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Left: Car Image with Button */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img src={car.image} alt={car.name} className="w-96 h-auto rounded-lg" />
          <Button 
            className="!bg-black px-6 py-3 mt-4 rounded-full !text-white text-lg font-semibold"
            onClick={() => setIsModalVisible(true)}
          >
            Rent vs Co-ownership
          </Button>
        </div>

        {/* Right: Car Details */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold uppercase">{car.name}</h1>
          <p className="text-lg"><span className="font-semibold">On-road price:</span> {car.price}</p>
          <p className="text-lg"><span className="font-semibold">Prorata One-ticket price:</span> {car.prorataPrice}</p>
          <p className="text-lg">
            <span className="font-semibold">AMC Charges:</span>{" "}
            <span className="text-red-500 line-through">{car.amcOldPrice}</span>{" "}
            <span className="font-semibold">{car.amcNewPrice} / year</span>
          </p>
          <p className="font-semibold text-gray-800">Total AMC for 5 years: {car.amcTotal}</p>

          {/* App Store & Play Store Links */}
          <div className="flex space-x-4 mt-4">
            <img src="/app3.png" alt="App Store" className="w-32 cursor-pointer rounded-md hover:opacity-80" />
            <img src="/app4.png" alt="Google Play" className="w-32 cursor-pointer rounded-md hover:opacity-80" />
          </div>
        </div>
      </div>

      {/* Usage Table */}
      <h2 className="text-2xl font-semibold text-center my-6">NEED MORE USAGE PER YEAR?</h2>
      <Table 
        columns={usageColumns} 
        dataSource={usageData} 
        pagination={false} 
        bordered 
        className="shadow-lg"
      />

      {/* Rent vs Co-ownership Modal */}
      <Modal 
        title="Rent vs Co-ownership" 
        open={isModalVisible} 
        onCancel={() => setIsModalVisible(false)} 
        footer={null}
      >
        <Table 
          columns={comparisonColumns} 
          dataSource={comparisonData} 
          pagination={false} 
          bordered 
          className="shadow-lg"
        />
      </Modal>
    </div>
  );
};

export default CarDetailParent;
