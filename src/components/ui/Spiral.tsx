"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ConnectedNodesSphere = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    if (!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Create sphere geometry for nodes
    const geometry = new THREE.SphereGeometry(3, 32, 32);
    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
      opacity: 0.09, // Adjust opacity here (0.0 - 1.0)
      transparent: true, // Enable transparency
    });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Add lines connecting random nodes
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x888888 });
    const lineGeometry = new THREE.BufferGeometry();
    const positions = [];
    const vertices = geometry.attributes.position.array;
    for (let i = 0; i < vertices.length; i += 6) {
      positions.push(vertices[i], vertices[i + 1], vertices[i + 2]);
    }
    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.y += 0.002;
      lineMesh.rotation.y += 0.002;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "350px" }} />;
};

export default ConnectedNodesSphere;
