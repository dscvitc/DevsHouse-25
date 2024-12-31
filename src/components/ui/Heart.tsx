"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Heart = () => {
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

    // Heart shape using BufferGeometry
    const vertices: number[] = [];
    const size = 1.5;
    const step = 0.1;

    for (let x = -size; x <= size; x += step) {
      for (let y = -size; y <= size; y += step) {
        for (let z = -size; z <= size; z += step) {
          const equation =
            Math.pow(x * x + (9 / 4) * y * y + z * z - 1, 3) -
            x * x * z * z * z -
            (9 / 200) * y * y * z * z * z;
          if (equation <= 0) {
            vertices.push(x, y, z);
          }
        }
      }
    }

    if (vertices.length === 0) {
      console.error("No vertices found for the heart shape.");
      return;
    }

    const heartGeometry = new THREE.BufferGeometry();
    heartGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    const heartWireframe = new THREE.WireframeGeometry(heartGeometry);

    // Material
    const material = new THREE.LineBasicMaterial({
      color: 0x888888,
      opacity: 0.8,
      transparent: true,
    });
    const heartMesh = new THREE.LineSegments(heartWireframe, material);
    scene.add(heartMesh);

    // Rotate the heart to stand upright
    heartMesh.rotation.x = 3 * Math.PI / 2;

    // Animation
    let scaleDirection = 1;
    const animate = () => {
      requestAnimationFrame(animate);

      // Update scale
      heartMesh.scale.x += 0.005 * scaleDirection;
      heartMesh.scale.y += 0.005 * scaleDirection;
      heartMesh.scale.z += 0.005 * scaleDirection;

      // Reverse direction if scale exceeds limits
      if (heartMesh.scale.x > 1.5 || heartMesh.scale.x < 0.5) {
        scaleDirection *= -1;
      }

      camera.position.x = 5 * Math.sin(Date.now() * 0.001);
      camera.position.z = 5 * Math.cos(Date.now() * 0.001);
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

  return <div ref={mountRef} style={{ width: "100%", height: "350px" }} />;
};

export default Heart;
