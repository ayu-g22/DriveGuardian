import React from 'react';
import logo from '../images/logo.png';
import { FaUserCircle } from 'react-icons/fa';
import { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './Modal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Fetch options from backend
    const fetchOptions = async () => {
      const response = await fetch('/api/get-driver-options'); // Adjust the endpoint as needed
      const data = await response.json();
      setOptions(['Me', ...data]); // Prepend "Me" to the list
    };

    fetchOptions();
  }, []);

  const handleTransferClick = () => {
    const userInput = prompt("Enter the amount to transfer:");
    if (userInput) {
      alert(`You have entered: ${userInput}`);
    }
  };


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogoutClick = () => {
    
    // Clear the authentication token from localStorage
    localStorage.removeItem('token');
  
    // Redirect the user to the login page after logout
      window.location.href = '/'; // Change '/signin' to the correct path for your login page
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 fixed w-full z-50 top-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Site Name */}
        <div className="flex items-center">
        <img src={logo} className="h-12 w-auto"/>
        <span className="text-lg font-semibold">DriveGuardian</span>
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex space-x-8">
        <a href="#" className="hover:text-orange-400 transition duration-300">Home</a>
          <a href="/rules" className="hover:text-orange-400 transition duration-300">Rules</a>
          <a href="/improve" className="hover:text-orange-400 transition duration-300">Improve with us</a>
          <a href="/aboutus" className="hover:text-orange-400 transition duration-300">About Us</a>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center space-x-4">
            <input 
              type="text" 
              placeholder="Search..." 
              className="px-4 py-2 rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-orange-400 rounded-3xl" 
            />
          </div>

        <div className="flex items-center ml-4">
        {/* Transfer Button */}
        <button
          onClick={handleOpenModal}
          className="mx-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ml-4"
        >
          Transfer
        </button>
        <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        options={options}
      />
          {/* Profile Icon with Dropdown */}
          <div className="relative flex items-center">
            <button onClick={toggleDropdown} className="text-white focus:outline-none">
              <FaUserCircle className="w-8 h-8" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-2 top-6 w-48 bg-white text-gray-800 border border-gray-300 rounded-lg shadow-lg z-50">
                <a href="/profile" className="block px-4 py-2 hover:bg-gray-200">Profile</a>
                <a href="/settings" className="block px-4 py-2 hover:bg-gray-200">Settings</a>
                <a href="/" onClick={handleLogoutClick} className="block px-4 py-2 hover:bg-gray-200">Logout</a>
              </div>
            )}
          </div>
        </div>
        

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => document.getElementById('mobile-menu').classList.toggle('hidden')}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="md:hidden hidden mt-4">
        <a href="#rules" className="block py-2 px-4 hover:text-orange-400">Rules</a>
        <a href="#improve" className="block py-2 px-4 hover:text-orange-400">Improve with us</a>
        <a href="#about" className="block py-2 px-4 hover:text-orange-400">About Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
