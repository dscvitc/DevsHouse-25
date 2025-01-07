"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const DodecahedronWireframe: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    if (!currentMount) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75, // Field of view
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7.05; // Move the camera further back

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Dodecahedron Geometry
    const geometry = new THREE.DodecahedronGeometry(1, 0);
    const wireframe = new THREE.WireframeGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x888888 }); // Grey color
    const line = new THREE.LineSegments(wireframe, lineMaterial);
    scene.add(line);

    // Animation
    let scaleDirection = 1;
    const animate = () => {
      requestAnimationFrame(animate);

      // Update scale
      line.scale.x += 0.001 * scaleDirection;
      line.scale.y += 0.001 * scaleDirection;
      line.scale.z += 0.001 * scaleDirection;

      // Rotate on x and y axes
      line.rotation.x += 0.01;
      line.rotation.y += 0.01;

      // Reverse direction if scale exceeds limits
      if (line.scale.x > 1.5 || line.scale.x < 1) {
        scaleDirection *= -1;
      }

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

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />;
};

export default DodecahedronWireframe;
