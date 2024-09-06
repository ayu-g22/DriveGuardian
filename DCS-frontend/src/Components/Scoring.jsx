import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const Instructions = () => {
  // State to control the visibility of the table
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the visibility state
  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-md mt-6">
      {/* Clickable header to toggle visibility */}
      <h2 
        className="text-2xl font-bold mb-4 text-gray-800 text-center cursor-pointer mb-4 flex justify-center items-center" 
        onClick={handleToggleVisibility}
      >
        Driver's Credit Score {isVisible ? <FiChevronDown 
          className={`m-2 p1-2 transform transition-transform duration-300 ${isVisible ? 'rotate-180' : 'rotate-0'}`} 
          size={20} // Icon size
        /> : <FiChevronDown 
        className={`m-2 pt-2 transform transition-transform duration-300 ${isVisible ? 'rotate-180' : 'rotate-0'}`} 
        size={20} // Icon size
      />}
      </h2>

      {/* "Show more" div with arrow */}
      <div 
        onClick={handleToggleVisibility} 
        className="text-blue-500 hover:text-blue-700 cursor-pointer mb-4 flex justify-center items-center"
      >
        
        
      </div>

      {/* Conditionally render the table with smooth slide down/up animation */}
      <div 
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isVisible ? 'max-h-screen' : 'max-h-0'}`}
      >
        <table className="min-w-full bg-white border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 text-left">DCS Range</th>
              <th className="border border-gray-300 p-2 text-left">Outcome/Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">900-1000</td>
              <td className="border border-gray-300 p-2">Elite driver status, 20% discount on insurance premiums</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">800-899</td>
              <td className="border border-gray-300 p-2">Excellent driving record, 15% discount on insurance premiums</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">700-799</td>
              <td className="border border-gray-300 p-2">Good driver, 10% discount on insurance premiums</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">600-699</td>
              <td className="border border-gray-300 p-2">Satisfactory driver, 5% discount on insurance premiums</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">501-599</td>
              <td className="border border-gray-300 p-2">0-5% discount on insurance premiums</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">500</td>
              <td className="border border-gray-300 p-2">Average Driver</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">400-499</td>
              <td className="border border-gray-300 p-2">5% increase on challan amounts</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">300-399</td>
              <td className="border border-gray-300 p-2">10% increase on challan amounts</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">200-299</td>
              <td className="border border-gray-300 p-2">20% increase on challan amounts, penalty warning</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">100-199</td>
              <td className="border border-gray-300 p-2">35% increase on challan amounts, heavy penalty rate</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Below 100</td>
              <td className="border border-gray-300 p-2">License suspension, mandatory driving course, DL suspended</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Instructions;
