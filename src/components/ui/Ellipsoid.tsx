"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const EllipsoidWireframe = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    if (!currentMount) return; // Add null check

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Ellipsoid Geometry (using SphereGeometry and scaling)
    const ellipsoidGeometry = new THREE.SphereGeometry(1, 32, 32);
    ellipsoidGeometry.scale(1, 2, 1); // Scale to form an ellipsoid

    const ellipsoidWireframe = new THREE.WireframeGeometry(ellipsoidGeometry);

    // Material
    const material = new THREE.LineBasicMaterial({
      color: 0x808080, // Grey color
      opacity: 0.5,
      transparent: true,
    });
    const ellipsoid = new THREE.LineSegments(ellipsoidWireframe, material);
    scene.add(ellipsoid);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      ellipsoid.rotation.x += 0.001;
      ellipsoid.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      if (currentMount && renderer.domElement.parentNode === currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "350px" }} />;
};

export default EllipsoidWireframe;
