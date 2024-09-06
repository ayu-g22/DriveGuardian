// Modal.js
import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, options }) => {
  const [selectedOption, setSelectedOption] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
      <h1 className="text-center text-xl font-bold mb-4 text-black">Transfer your keys</h1>
        <h2 className="text-md font-bold mb-4 text-black">Q1: Who is driving the car?</h2>
        <select 
          value={selectedOption} 
          onChange={(e) => setSelectedOption(e.target.value)} 
          className="border p-2 rounded mb-4 w-full"
        >
          <option value="">Select...</option>
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
        <button 
          onClick={onClose} 
          className="bg-blue-500 text-white p-2 rounded mr-2"
        >
          Submit
        </button>
        <button 
          onClick={onClose} 
          className="bg-gray-500 text-white p-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
