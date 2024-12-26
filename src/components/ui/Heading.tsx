import React from 'react';
import Hyperboloid from './Hyperboloid'; 
import Dodecahedron from './Dodecahedron'; 
import Cubedodecahedron from './Cubedodecahedron'; 

interface HeadingProps {
  title: string;
  geometry: string;
}

const Heading: React.FC<HeadingProps> = ({ title, geometry }) => {
  const renderGeometry = () => {
    switch (geometry) {
      case 'Hyperboloid':
        return <Hyperboloid />;
      case 'Dodecahedron':
        return <Dodecahedron />;
      case 'Cubedodecahedron':
        return <Cubedodecahedron />;
      default:
        return null; // Or a default component if needed
    }
  };

  return (
    <div className="flex flex-row font-bold relative z-10 mb-8">
      <div className="flex flex-col justify-end pb-1 md:pb-3 z-10" style={{ marginTop: '40px' }}>
        <p className="text-6xl font-bold mb-8">{title}</p>
      </div>
      <div className="absolute top-5 left-0 w-full h-full flex items-center justify-center z-0">
        {renderGeometry()}
      </div>
    </div>
  );
};

export default Heading;
