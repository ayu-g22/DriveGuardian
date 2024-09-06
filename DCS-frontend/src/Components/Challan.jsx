import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the toastify CSS
import DCSGauge from './Slider';
import Instructions from './Scoring';

const Challan = () => {
  const navigate = useNavigate();
  const [challanData, setChallanData] = useState([]); // State to store fetched data

  // Function to fetch challan data from the backend
  const fetchChallanData = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/dashboard/challan'); // Adjust URL if needed
      const result = await response.json();
      if (result.ok) {
        const data = result.data.map(item => ({
          name: item.name,
          lastDrive: item.Last_Drive,
          challan: item.Challan,
          amount: item.Amount,
          dcsChange: item.DCS_Charge
        }));
        setChallanData(data);
        toast.success('Data fetched successfully!', { position: "top-center" }); // Show success toast
      } else {
        toast.error(`Failed to fetch data: ${result.message}`, { position: "top-center" }); // Show error toast
      }
    } catch (error) {
      toast.error(`Error fetching data: ${error.message}`, { position: "top-center" }); // Show error toast
    }
  };

  // Fetch challan data when the component mounts
  useEffect(() => {
    fetchChallanData();
  }, []);

  // Function to handle the 'Pay Dues' button click
  const handlePayDuesClick = () => {
    navigate('/pay-dues');
  };

  return (
    <div className="flex flex-col md:flex-row justify-between p-6 mt-20">
      {/* Toaster Container */}
      <ToastContainer />

      {/* Left column for the Challan table */}
      <div className="w-full md:w-4/6 p-4 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Challan History</h1>
        
        {/* Table Container */}
        <div>
          <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
            <thead>
              <tr>
                <th className="py-3 px-6 bg-gray-800 text-white text-left">Name</th>
                <th className="py-3 px-6 bg-gray-800 text-white text-left">Last Drive</th>
                <th className="py-3 px-6 bg-gray-800 text-white text-left">Challan</th>
                <th className="py-3 px-6 bg-gray-800 text-white text-left">Amount</th>
                <th className="py-3 px-6 bg-gray-800 text-white text-left">DCS Change</th>
              </tr>
            </thead>
            <tbody>
              {challanData.map((entry, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-6">{entry.name}</td>
                  <td className="py-3 px-6">{entry.lastDrive}</td>
                  <td className={`py-3 px-6 ${entry.challan ? 'text-red-500' : 'text-green-500'}`}>{entry.challan}</td>
                  <td className="py-3 px-6">{entry.amount > 0 ? `₹${entry.amount}` : '-'}</td>
                  <td className="py-3 px-6">{entry.dcsChange}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col items-center">
          <button
            onClick={handlePayDuesClick}
            className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
          >
            Pay Dues
          </button>
        </div>
      </div>

      {/* Right column for the DCS Gauge */}
      <div className="w-full md:w-2/6 p-4 mt-10 md:mt-0">
        <DCSGauge />
        <Instructions />
      </div>
    </div>
  );
};

export default Challan;
