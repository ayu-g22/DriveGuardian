// src/Rules.js
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
        <div className="pt-20 p-20 bg-green-200 w-1/2 flex flex-col items-center">
      <h2 className="text-xl font-semibold m-4">Rules:</h2>
      <ul className="list-disc pl-6 space-y-2">
        {rulesList.map((rule, index) => (
          <li key={index} className="text-gray-800">{rule}</li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Rules;
