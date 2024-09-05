import React, { useState } from 'react';
import GaugeChart from 'react-gauge-chart';

const DCSGauge = () => {
  const [dcsValue, setDCSValue] = useState(0.5); // Initialize the gauge value (0.0 to 1.0)

  // Function to convert the DCS value to a gauge scale (0.0 to 1.0)
  const getGaugeValue = () => dcsValue / 100;

  return (
    <div className="bg-white rounded-md shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Total DCS Value</h2>
      <GaugeChart
        id="dcs-gauge"
        nrOfLevels={3} // Number of levels/colors on the gauge
        colors={["#FF5F6D", "#FFC371", "#00C49F"]} // Colors for the gauge levels
        arcWidth={0.3} // Width of the gauge arc
        percent={getGaugeValue()} // Value to be displayed (0.0 to 1.0)
        needleColor="#000000" // Needle color
        textColor="#000000" // Text color
        animate={true} // Animation when the value changes
      />
      <div className="mt-4 text-center">
        {/* <input
          type="range"
          min="0"
          max="100"
          value={dcsValue}
          onChange={(e) => setDCSValue(e.target.value                                                                   )}
          className="w-full"
        /> */}
        <span className="text-lg font-semibold">{`Current DCS Value: ${dcsValue}`}</span>
      </div>
    </div>
  );
};

export default DCSGauge;
