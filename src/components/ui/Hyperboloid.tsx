"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const HyperboloidWormholeWireframe = () => {
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
    camera.position.z = 35;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Hyperboloid Geometry using BufferGeometry
    const hyperboloidGeometry = new THREE.BufferGeometry();
    const segments = 50;
    const length = 10; // Elongated length
    const fixedRadius = 7; // Fixed radius for entrance/exit

    const vertices = [];

    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      for (let j = -length; j <= length; j++) {
        const x = j; // Elongate along the x-axis
        const y = fixedRadius * Math.cosh(x / length) * Math.cos(theta);
        const z = fixedRadius * Math.cosh(x / length) * Math.sin(theta);
        vertices.push(x, y, z);
      }
    }

    const indices = [];

    for (let i = 0; i < segments; i++) {
      for (let j = 0; j < length * 2; j++) {
        const a = i * (length * 2 + 1) + j;
        const b = (i + 1) * (length * 2 + 1) + j;
        const c = (i + 1) * (length * 2 + 1) + j + 1;
        const d = i * (length * 2 + 1) + j + 1;
        indices.push(a, b, d, b, c, d);
      }
    }

    hyperboloidGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    hyperboloidGeometry.setIndex(indices);

    // Create wireframe
    const hyperboloidWireframe = new THREE.WireframeGeometry(hyperboloidGeometry);

    // Material
    const material = new THREE.LineBasicMaterial({
      color: 0x808080, // Grey color
      opacity: 1,
      transparent: true,
    });
    const hyperboloid = new THREE.LineSegments(hyperboloidWireframe, material);
    scene.add(hyperboloid);

    // Animation
    let angle = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the hyperboloid
      hyperboloid.rotation.x += 0.005;

      // Rotate the camera around the y-axis
      angle += 0.005;
      camera.position.x = 35 * Math.sin(angle);
      camera.position.z = 35 * Math.cos(angle);
      camera.lookAt(scene.position);

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

  return <div ref={mountRef} style={{ width: "100%", height: "450px" }} />; // Adjusted width and height
};

export default HyperboloidWormholeWireframe;
