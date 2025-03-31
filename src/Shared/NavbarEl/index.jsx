import React, { useState, useEffect } from "react";
import { Menu, Drawer, Button } from "antd";
import { HomeOutlined, QuestionCircleOutlined, CarOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all ${isSticky ? "bg-gray-900 shadow-lg" : "bg-gray-900"}`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/"><img src="/logo1.png" alt="ProRata Logo" className="h-14 w-auto mr-2" /></Link>
          {/* <span className="text-white text-lg font-semibold">PRORATA</span> */}
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-white">
          <Link to="/faqs"><span className="cursor-pointer hover:text-gray-300">FAQ’S</span></Link> 
          <Link to="/about"><span className="cursor-pointer hover:text-gray-300">ABOUT US</span></Link>
          <Link to="/cars"><button className="bg-red-600 hover:bg-red-700 cursor-pointer text-white font-semibold px-4 py-2 rounded-md">BROWSE CARS</button></Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
  <MenuOutlined className="!text-white text-2xl" onClick={() => setVisible(true)} />
</div>

      </div>

      {/* Mobile Drawer */}
      <Drawer 
        placement="top" 
        closable={true} 
        onClose={() => setVisible(false)} 
        visible={visible} 
        closeIcon={<CloseOutlined style={{ color: "white" }} />} 
        className="!bg-gray-900 text-white"
      >
        <div className="flex flex-col space-y-4 text-center p-4">
          <span className="cursor-pointer hover:text-gray-300" onClick={() => setVisible(false)}>FAQ’S</span>
          <span className="cursor-pointer hover:text-gray-300" onClick={() => setVisible(false)}>ABOUT US</span>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md" onClick={() => setVisible(false)}>BROWSE CARS</button>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;