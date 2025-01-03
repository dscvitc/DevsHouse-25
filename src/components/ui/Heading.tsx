import React from "react";
import Hyperboloid from "./Hyperboloid";
import Dodecahedron from "./Dodecahedron";
import Cubedodecahedron from "./Cubedodecahedron";
import Ellipsoid from "./Ellipsoid";
import Sphere from "./Sphere";
import Horizontalhyperboloid from "./HorizontalHyperboloid";
import Sphereenclosed from "./Torus";
import Heart from "./Heart";

interface HeadingProps {
  title: string;
  geometry: string;
  textClass?: string;
}

const Heading: React.FC<HeadingProps> = ({
  title, textClass,
  geometry,
}) => {
  const renderGeometry = () => {
    switch (geometry) {
      case "Hyperboloid":
        return <Hyperboloid />;
      case "Dodecahedron":
        return <Dodecahedron />;
      case "Cubedodecahedron":
        return <Cubedodecahedron />;
      case "Ellipsoid":
        return <Ellipsoid />;
      case "Sphere":
        return <Sphere />;
      case "Horizontalhyperboloid":
        return <Horizontalhyperboloid />;
      case "Sphereenclosed":
        return <Sphereenclosed />;
      case "Heart":
        return <Heart />;
      default:
        return null; // Or a default component if needed
    }
  };

  return (
    <div className="flex flex-row font-bold relative z-10 mb-8 w-full items-center justify-center">
      <div
        className="flex flex-col justify-end items-center pb-1 md:pb-3 z-10 w-full"
        style={{ marginTop: "40px" }}
      >
        <p className={"font-bold mb-8 " + (textClass ?? 'text-6xl')}>{title}</p>
      </div>
      <div className="absolute top-5 left-0 w-full h-full flex items-center justify-center z-0">
        {renderGeometry()}
      </div>
    </div>
  );
};

export default Heading;
