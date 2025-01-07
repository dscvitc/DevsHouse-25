"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const DodecahedronInCube = () => {
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
    camera.position.z = 6;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Dodecahedron Geometry
    const dodecahedronGeometry = new THREE.DodecahedronGeometry(1.7, 0); // Decreased radius
    const dodecahedronWireframe = new THREE.WireframeGeometry(dodecahedronGeometry);

    // Dodecahedron Material
    const dodecahedronMaterial = new THREE.LineBasicMaterial({
      color: 0x808080, // Grey color
      opacity: 0.8,
      transparent: true,
    });
    const dodecahedron = new THREE.LineSegments(dodecahedronWireframe, dodecahedronMaterial);
    scene.add(dodecahedron);

    // Cube Geometry
    const cubeGeometry = new THREE.BoxGeometry(4.0, 4.0, 4.0); // Adjusted size to fit the smaller dodecahedron
    const cubeWireframe = new THREE.WireframeGeometry(cubeGeometry);

    // Cube Material
    const cubeMaterial = new THREE.LineBasicMaterial({
      color: 0x808080, // Grey color
      opacity: 0.7,
      transparent: true,
    });
    const cube = new THREE.LineSegments(cubeWireframe, cubeMaterial);
    scene.add(cube);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      dodecahedron.rotation.x += 0.005;
      dodecahedron.rotation.y += 0.005;
      cube.rotation.x += 0.005;
      cube.rotation.y += 0.005;
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

export default DodecahedronInCube;
