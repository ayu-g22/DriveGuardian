import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const LogoutButton = () => {
  // Function to handle logout click
  const handleLogoutClick = () => {
    console.log('User logged out');
    // Add your logout logic here (e.g., clear auth tokens, redirect to login)
  };

  return (
    <button
      onClick={handleLogoutClick}
      className="fixed bottom-4 right-4 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition duration-300 z-50"
    >
      <FontAwesomeIcon icon={faSignOutAlt} size="2xl" />
    </button>
  );
};

export default LogoutButton;
