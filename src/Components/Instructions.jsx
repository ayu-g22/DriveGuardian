import React from 'react';

const Instructions = () => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Driving Rules and Regulations in India</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li className="mb-2">Always wear a seatbelt while driving.</li>
        <li className="mb-2">Do not exceed the speed limits posted on the road signs.</li>
        <li className="mb-2">Avoid using mobile phones while driving unless using a hands-free device.</li>
        <li className="mb-2">Always follow traffic signals and road signs.</li>
        <li className="mb-2">Do not drink and drive; maintain a blood alcohol concentration (BAC) below the legal limit.</li>
        <li className="mb-2">Ensure proper vehicle documentation: License, Registration, Insurance, and Pollution Certificate.</li>
        <li className="mb-2">Yield to pedestrians at crosswalks and intersections.</li>
        <li className="mb-2">Maintain a safe distance from the vehicle ahead.</li>
        <li className="mb-2">Use indicators while turning or changing lanes.</li>
        <li className="mb-2">Wear a helmet while riding a two-wheeler.</li>
      </ul>
    </div>
  );
};

export default Instructions;
