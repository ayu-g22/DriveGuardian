import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavHalf from './NavHalf';
import femalePic from '../team/female.png' ;
import malePic from '../team/male.png';
import Navbar from './Navbar';

const AboutUs = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get token from local storage or cookies
    const token = localStorage.getItem('token');

    if (token) {
      axios.get('http://localhost:4000/api/auth', {
        headers: {
          Authorization: `Bearer ${token}`,  // Add Bearer prefix
        }
      })
      .then((response) => {
        setDashboardData(response.data);
      })
      .catch((err) => {
        setError('You are not authorized to access this page');
      });
    } else {
      setError('No token found. Please login first.');
    }
  }, []);
  return (
    <>
    {dashboardData ? (
          <Navbar />

      ) : (
        <NavHalf />

      )}
        
    <div className="bg-gray-100 min-h-screen p-24">
      <div className="container mx-auto max-w-4xl">
        {/* Introduction */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">About Us</h1>
          <p className="text-lg text-gray-700">
            Welcome to our platform, where we are revolutionizing driving behavior assessment with our innovative Driving Credit Score (DCS) system. Our DCS measures and rewards safe driving, creating a more responsible driving culture.
          </p>
        </section>

        {/* Driving Credit Score Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Driving Credit Score</h2>
          <p className="text-lg text-gray-700">
            Our Driving Credit Score (DCS) is designed to evaluate and improve driving behavior. By tracking driving patterns and behaviors, we provide a score that reflects a driver's safety and reliability. Good drivers are rewarded, while those who need improvement receive actionable feedback to help them become better drivers.
          </p>
        </section>

        {/* Team Members */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Arihant Jain', role: 'Team Lead', imgSrc: malePic },
              { name: 'Ayush Panwar', role: 'Backend Developer', imgSrc: malePic },
              { name: 'Sapna Chaudhary', role: 'Data Scientist', imgSrc: femalePic },
              { name: 'Lalit Kumar', role: 'Content Writer', imgSrc: malePic },
              { name: 'Satyam Sha', role: 'UI/UX Designer', imgSrc: malePic },
              { name: 'Ayush Gupta', role: 'Frontend Developer', imgSrc: malePic },
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img src={member.imgSrc} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Origin of the Idea */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">What Led Us to This Idea</h2>
          <p className="text-lg text-gray-700">
            Our journey began with a simple observation: driving behavior has a significant impact on road safety and insurance costs. We saw an opportunity to leverage technology to create a system that not only tracks and assesses driving behavior but also encourages safer driving practices. Our team came together with a shared vision to develop a tool that benefits both drivers and the broader community by promoting safe driving and providing valuable feedback.
          </p>
        </section>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
