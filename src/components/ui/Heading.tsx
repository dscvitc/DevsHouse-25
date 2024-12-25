// components/Heading.js
import React from 'react';
import WireframeBall from './WireframeBall'; // Adjust the path as necessary

const Heading = ({ title }) => {
  return (
    <div className="flex flex-row font-bold relative z-10 mb-8">
      <div className="flex flex-col justify-end pb-1 md:pb-3 z-10" style={{ marginTop: '40px' }}> {/* Adjust margin as needed */}
        <p className="text-6xl font-bold mb-8">{title}</p>
      </div>
      <div className="absolute top-5 left-0 w-full h-full flex items-center justify-center z-0">
        <WireframeBall />
      </div>
    </div>
  );
};

export default Heading;
