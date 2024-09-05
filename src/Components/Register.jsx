import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import logo from '../logo.png';
import bg from '../bg.png'
import NavHalf from './NavHalf';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isVehicleRegistered, setIsVehicleRegistered] = useState('no');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [dlNumber, setDlNumber] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      name,
      email,
      phoneNumber,
      isVehicleRegistered,
      vehicleNumber,
      dlNumber,
    });
  };

  const handleSignInRedirect = () => {
    navigate('/'); // Redirect to the sign-in page
  };

  return (
    <>
      <NavHalf />
      <div className="flex justify-center items-center min-h-screen bg-gray-100" style={{
      backgroundImage: `url(${bg})`, // Set the background image
    }}>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mt-20">
        <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Vehicle Registered */}
          <fieldset className="mb-4">
            <legend className="block text-gray-700 text-sm font-bold mb-2">Is Vehicle Registered?</legend>
            <div className="flex items-center">
              <input
                id="vehicleYes"
                type="radio"
                name="vehicleRegistered"
                value="yes"
                checked={isVehicleRegistered === 'yes'}
                onChange={() => setIsVehicleRegistered('yes')}
                className="mr-2"
              />
              <label htmlFor="vehicleYes" className="text-gray-700">Yes</label>
            </div>
            <div className="flex items-center">
              <input
                id="vehicleNo"
                type="radio"
                name="vehicleRegistered"
                value="no"
                checked={isVehicleRegistered === 'no'}
                onChange={() => setIsVehicleRegistered('no')}
                className="mr-2"
              />
              <label htmlFor="vehicleNo" className="text-gray-700">No</label>
            </div>
          </fieldset>

          {/* Vehicle Number and DL Number */}
          {isVehicleRegistered === 'yes' && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vehicleNumber">
                  Vehicle Number
                </label>
                <input
                  id="vehicleNumber"
                  type="text"
                  value={vehicleNumber}
                  onChange={(e) => setVehicleNumber(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          )}

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dlNumber">
                  Driving License Number
                </label>
                <input
                  id="dlNumber"
                  type="text"
                  value={dlNumber}
                  onChange={(e) => setDlNumber(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Sign In Link */}
          <div className="mb-4 text-center">
            <button
              type="button"
              onClick={handleSignInRedirect}
              className="text-blue-500 hover:underline"
            >
              Already a user? Sign In
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 bg-gray-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Register;
