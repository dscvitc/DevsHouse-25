"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const HyperboloidRadialContours = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    if (!currentMount) return; // Add null check

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 50, 100); // Add fog with a black color

    // Camera
    const camera = new THREE.PerspectiveCamera(
      80,
      currentMount.clientWidth / currentMount.clientHeight,
      0.01,
      1000
    );
    camera.position.set(0, 15, 10); // Set camera position with a slight upward tilt

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Hyperboloid Geometry using BufferGeometry
    const hyperboloidGeometry = new THREE.BufferGeometry();
    const segments = 50;
    const length = 5; // Elongated length
    const fixedRadius = 10; // Fixed radius for entrance/exit

    const vertices = [];

    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      for (let j = -length; j <= length; j++) {
        const y = j; // Elongate along the y-axis
        const x = fixedRadius * Math.cosh(y / length) * Math.cos(theta);
        const z = fixedRadius * Math.cosh(y / length) * Math.sin(theta);
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
      hyperboloid.rotation.y += 0.005;

      // Rotate the camera around the y-axis
      angle += 0.001;
      camera.position.x = 35 * Math.sin(angle);
      camera.position.z = 35 * Math.cos(angle);
      camera.lookAt(new THREE.Vector3(0, 0, 0)); // Ensure the camera looks at the center of the scene

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

export default HyperboloidRadialContours;
