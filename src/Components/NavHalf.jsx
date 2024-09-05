import React from 'react'
import logo from '../logo.png'

const NavHalf = () => {
  return (
    <div>
      <nav className="bg-gray-800 text-white px-6 py-4 fixed w-full z-50 top-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Site Name */}
        <div className="flex items-center">
        <img src={logo} className="h-12 w-auto"/>
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex space-x-8">
          <a href="/rules" className="hover:text-orange-400 transition duration-300">Rules</a>
          <a href="#improve" className="hover:text-orange-400 transition duration-300">Improve with us</a>
          <a href="#about" className="hover:text-orange-400 transition duration-300">About Us</a>
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
    </div>
  )
}

export default NavHalf
