import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogoutButton = () => {
  // Function to handle logout click
  const handleLogoutClick = () => {
    // Show a toast notification for logout
    toast.warn("User logged out", { position: 'top-center' });
    
    // Clear the authentication token from localStorage
    localStorage.removeItem('token');
  
    // Redirect the user to the login page after logout
    setTimeout(() => {
      window.location.href = '/'; // Change '/signin' to the correct path for your login page
    }, 1000);
  };
  

  return (
    <>
      {/* Toast Container */}
      <ToastContainer />
    <button
      onClick={handleLogoutClick}
      className="fixed bottom-4 right-4 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition duration-300 z-50"
    >
      <FontAwesomeIcon icon={faSignOutAlt} size="2xl" />
    </button>
    </>
  );
};

export default LogoutButton;
