import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Challan from './Components/Challan';
import SignIn from './Components/Login';
import Register from './Components/Register';
import Rules from './Components/Rules';
import Improve from './Components/Improve';
import AboutUs from './Components/AboutUs';
import Settings from './Components/Settings';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* SignIn page route */}
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/improve" element={<Improve />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/settings" element={<Settings />} />


        
        {/* Main page route */}
        <Route
          path="/dashboard"
          element={
            <div className="relative min-h-screen bg-gray-100">
              <Navbar />
              <Challan />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
