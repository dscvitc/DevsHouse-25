"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const WireframeBall = () => {
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

    // Sphere Geometry
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const sphereWireframe = new THREE.WireframeGeometry(sphereGeometry);

    // Material
    const material = new THREE.LineBasicMaterial({
      color: 0x808080, // Grey color
      opacity: 0.5,
      transparent: true,
    });
    const sphere = new THREE.LineSegments(sphereWireframe, material);
    scene.add(sphere);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Update radius based on timestamp
      const time = Date.now() * 0.001; // Convert to seconds
      const radius = 2 + 0.4 * Math.sin(time); // Radius oscillates between 0.5 and 1.5

      // Update geometry with new radius
      sphere.geometry.dispose(); // Dispose of old geometry
      const newGeometry = new THREE.SphereGeometry(radius, 32, 32);
      sphere.geometry = new THREE.WireframeGeometry(newGeometry);

      // Rotate sphere
      sphere.rotation.x += 0.001;
      sphere.rotation.y += 0.001;

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

  return <div ref={mountRef} style={{ width: "100%", height: "400px" }} />;
};

export default WireframeBall;
