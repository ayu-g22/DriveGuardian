import React from 'react';
import NavHalf from './NavHalf';

const Rules = () => {
  const rulesList = [
    "Always wear a seatbelt while driving.",
    "Do not exceed the speed limits posted on the road signs.",
    "Avoid using mobile phones while driving unless using a hands-free device.",
    "Always follow traffic signals and road signs.",
    "Do not drink and drive; maintain a blood alcohol concentration (BAC) below the legal limit.",
    "Ensure proper vehicle documentation: License, Registration, Insurance, and Pollution Certificate.",
    "Yield to pedestrians at crosswalks and intersections.",
    "Maintain a safe distance from the vehicle ahead.",
    "Use indicators while turning or changing lanes.",
    "Wear a helmet while riding a two-wheeler.",
  ];

  return (
    <>
      <NavHalf />
      {/* Parent Container */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        {/* Rules Section */}
        <div className="p-8 w-full max-w-md flex flex-col items-center bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Rules & Regulations:</h2>
          <ul className="list-disc pl-6 space-y-2">
            {rulesList.map((rule, index) => (
              <li key={index} className="text-gray-800">{rule}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Rules;
