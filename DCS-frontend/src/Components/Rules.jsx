import React from 'react';
import NavHalf from './NavHalf';
import seatbeltImage from '../images/seatbelt.jpg'; // Example image
import speedLimitImage from '../images/speed-limit.jpeg'; // Example image
import mobilePhoneImage from '../images/mobile-phone.jpg'; // Example image
import alcoholImage from '../images/alcohol.jpg'; // Example image
import helmetImage from '../images/helmet.jpg'; // Example image
import crosswalks from '../images/crossing.jpeg';
import Distamce from '../images/dist.jpg';
import document from '../images/doc.png';
import indicators from '../images/indicators.jpg';
import signals from '../images/signals.jpg';

const Rules = () => {
  const rulesList = [
    {
      text: "Always wear a seatbelt while driving.",
      image: seatbeltImage
    },
    {
      text: "Do not exceed the speed limits posted on the road signs.",
      image: speedLimitImage
    },
    {
      text: "Avoid using mobile phones while driving unless using a hands-free device.",
      image: mobilePhoneImage
    },
    {
      text: "Always follow traffic signals and road signs.",
      image: signals
    },
    {
      text: "Do not drink and drive; maintain a blood alcohol concentration (BAC) below the legal limit.",
      image: alcoholImage
    },
    {
      text: "Ensure proper vehicle documentation: License, Registration, Insurance, and Pollution Certificate.",
      image: document
    },
    {
      text: "Yield to pedestrians at crosswalks and intersections.",
      image: crosswalks
    },
    {
      text: "Maintain a safe distance from the vehicle ahead.",
      image: Distamce
    },
    {
      text: "Use indicators while turning or changing lanes.",
      image: indicators
    },
    {
      text: "Wear a helmet while riding a two-wheeler.",
      image: helmetImage
    },
  ];

  return (
    <>
      <NavHalf />
      {/* Parent Container */}
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
        {/* Rules Section */}
        <div className="p-8 w-full max-w-4xl bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-center">Traffic Rules & Precautions:</h2>
          
          {/* General Traffic Rules */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">General Traffic Rules</h3>
            <ul className="list-disc pl-6 space-y-4">
              {rulesList.map((rule, index) => (
                <li key={index} className="text-gray-800 flex items-start space-x-4">
                  {rule.image && (
                    <img
                      src={rule.image}
                      alt={`Illustration for ${rule.text}`}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  )}
                  <span>{rule.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Precautions */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Additional Precautions</h3>
            <ul className="list-disc pl-6 space-y-4">
              <li className="text-gray-800">Ensure your vehicle is in good condition before driving.</li>
              <li className="text-gray-800">Avoid driving during adverse weather conditions if possible.</li>
              <li className="text-gray-800">Keep emergency contact numbers handy.</li>
              <li className="text-gray-800">Do not drive if you are feeling drowsy or unwell.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rules;
