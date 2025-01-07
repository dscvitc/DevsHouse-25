"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Dodecahedron = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    if (!currentMount) return;

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

    // Dodecahedron Geometry
    const dodecahedronGeometry = new THREE.DodecahedronGeometry(2.0, 0);
    const dodecahedronWireframe = new THREE.WireframeGeometry(dodecahedronGeometry);

    // Material
    const material = new THREE.LineBasicMaterial({
      color: 0x808080,
      opacity: 0.6,
      transparent: true,
    });
    const dodecahedron = new THREE.LineSegments(dodecahedronWireframe, material);
    scene.add(dodecahedron);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      dodecahedron.rotation.x += 0.005;
      dodecahedron.rotation.y += 0.005;
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

export default Dodecahedron;
