import React from 'react';

const AboutFounderMessage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 text-center">
      <h2 className="text-4xl font-semibold mb-8">MESSAGE FROM THE FOUNDER</h2>
      <div className="flex flex-col items-center">
        <img src="/ab4.png" alt="Founder Sanjeev Jain" className="w-48 h-48 rounded-full border-4 border-red-500 mb-4" />
        <h3 className="text-2xl font-bold">SANJEEV JAIN <span className="bg-white text-black px-2 py-1 rounded">in</span></h3>
        <p className="text-lg">FOUNDER & CEO</p>
      </div>

      <div className="bg-white text-black rounded-lg p-8 mt-8 max-w-4xl mx-auto text-left">
        <p><strong>Dear Valued Users,</strong></p>
        <p>It is with great pleasure that I welcome you to Prorata, a revolutionary platform designed to upgrade your lifestyle and transform the way you own and experience cars. As the Founder and CEO of Prorata, I am honored to introduce you to our innovative concept that is reshaping the future of car ownership in India.</p>
        <p>As per our research, there are 40 Million car owners in India, out of which 95% own only basic cars of INR 10 Lacs and below. Only 2 Million people own premium, luxury, and off-road cars worth over INR 20 Lacs+. We are targeting these 38 Million car owners who wish to upgrade their lifestyle with premium, luxury, and off-road cars at just 8.33% ownership cost.</p>
        <p>At Prorata, we believe cars are not only for commute; they represent lifestyle, personality, and passion. Everyone deserves to own and experience their dream car at the right age. We identified two major problems: the affordability of money and the affordability of time to own premium and luxury cars.</p>

        <h4 className="font-bold mt-4">Some of our use cases:</h4>
        <ul className="list-disc list-inside">
          <li>If you own a 5-seater car, you may need a 7-seater car occasionally.</li>
          <li>If you enjoy traveling and road trips, an off-roading car like Mahindra Thar, Jeep Wrangler, or Defender may be ideal occasionally.</li>
          <li>If you have a strong social circle, luxury cars like Mercedes, BMW, or Audi suit your status.</li>
          <li>If you travel for business regularly, a car in your work city is essential for occasional needs.</li>
          <li>Car enthusiasts can own 6-8 different cars to fulfill their aspirations.</li>
          <li>A second car for family members for occasional use, ideal for gifting experiences like a Mini Cooper ride.</li>
          <li>If you work remotely or are uncertain about settling in a city, occasional car use is more practical.</li>
          <li>Business professionals and creators benefit from premium cars that reflect their personality.</li>
          <li>City workers who frequently visit their hometowns need a premium car for trips.</li>
          <li>NRIs visiting India a few times a year may need a car for their stay.</li>
        </ul>

        <p>Our platform connects individuals within a 10 km radius to form co-owner groups. By collaborating with community members, you can enjoy the benefits of car ownership without the burdens of sole responsibility.</p>
        <p>We envision users having 1-2 cars for daily commute and 2-3 different cars for leisure and lifestyle purposes. Our mission is to build a trusted platform where usage and costs are allocated on a prorated basis. Our smart mobile application ensures fair allocation of weekends, holidays, and expenses like Fastag, traffic challans, or accidental costs.</p>
        <p>We maintain transparency by avoiding profits from car sales and purchases. Our commitment is to build a trusted community and add more lifestyle-enhancing products. Join us on this journey to fulfill your dream car aspiration now.</p>
        <p>Thank you for choosing Prorata.</p>
        <p className="mt-6 font-bold">Warm regards,</p>
        <p>Sanjeev Jain</p>
        <p>Founder and CEO, Prorata</p>
      </div>
    </div>
  );
};

export default AboutFounderMessage;