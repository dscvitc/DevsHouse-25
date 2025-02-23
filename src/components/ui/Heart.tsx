"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeJSComponent = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    if (!currentMount) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 70;
    camera.position.y = -27; // Move the camera down by 5 units

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparency
    renderer.setSize(window.innerWidth, window.innerHeight);
    currentMount.appendChild(renderer.domElement);

    // Torus Knot
    const torusKnotGeometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const torusKnotMaterial = new THREE.MeshBasicMaterial({
      color: 0x808080, // Grey color
      wireframe: true,
      opacity: 0.6, // Set opacity
      transparent: true, // Enable transparency
    });
    const torusKnot = new THREE.Mesh(torusKnotGeometry, torusKnotMaterial);
    scene.add(torusKnot);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate torus knot slowly
      torusKnot.rotation.x += 0.005;
      torusKnot.rotation.y += 0.005;

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

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "350px",
        marginTop: "-50px", // Move the canvas up by 50 pixels
      }}
    />
  );
};

export default ThreeJSComponent;
