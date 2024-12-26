"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const WireframeDecahedron = () => {
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

    // Geometry
    const geometry = new THREE.DodecahedronGeometry(2.7, 0); // Dodecahedron for decahedron-like shape
    const wireframe = new THREE.WireframeGeometry(geometry);

    // Material
    const material = new THREE.LineBasicMaterial({
      color: 0x808888,
      opacity: 0.5,
      transparent: true,
    });
    const decahedron = new THREE.LineSegments(wireframe, material);
    scene.add(decahedron);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      decahedron.rotation.x += 0.001;
      decahedron.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "350px" }} />;
};

export default WireframeDecahedron;
