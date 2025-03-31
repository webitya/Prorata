import { LinkedinOutlined } from '@ant-design/icons';
import React from 'react';

const advisors = [
  { name: 'SUMIT JAIN', title: 'Venture Capital', image: '/t1.png', linkedin: '#' },
  { name: 'NAVEEN SARAWGI', title: 'Founder at Giga Cars, Director & CEO at Bimal Auto Agency', image: '/t2.png', linkedin: '#' },
  { name: 'PANIL SHETT', title: 'Founder at Metaman', image: '/t3.png', linkedin: '#' },
  { name: 'ANKIT RATAN', title: 'Co-Founder at SIGNZY', image: '/t4.png', linkedin: '#' },
  { name: 'ARPIT RATAN', title: 'Co-Founder at SIGNZY', image: '/t5.png', linkedin: '#' },
];

const AboutAdvisorSection = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 text-center">
      <h2 className="text-4xl font-semibold mb-8">MEET OUR ADVISORS</h2>
      <div className="flex justify-center items-center flex-wrap gap-8">
        {advisors.map((advisor, index) => (
          <div key={index} className="w-64 text-center">
            <img src={advisor.image} alt={advisor.name} className="w-40 h-40 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-bold">{advisor.name}</h3>
            <p className="text-gray-600">{advisor.title}</p>
            <a href={advisor.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block mt-2">
               <LinkedinOutlined color='black' />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutAdvisorSection;