"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function House() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t * 0.4) * 0.4;
    group.current.position.y = Math.sin(t * 0.7) * 0.05;
  });

  // Wireframe house silhouette to echo the logo
  const houseGeo = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    // Floor square
    pts.push(new THREE.Vector3(-1, -0.6, -0.7));
    pts.push(new THREE.Vector3(1, -0.6, -0.7));
    pts.push(new THREE.Vector3(1, -0.6, 0.7));
    pts.push(new THREE.Vector3(-1, -0.6, 0.7));
    pts.push(new THREE.Vector3(-1, -0.6, -0.7));

    // Walls up
    pts.push(new THREE.Vector3(-1, 0.4, -0.7));
    pts.push(new THREE.Vector3(1, 0.4, -0.7));
    pts.push(new THREE.Vector3(1, -0.6, -0.7));

    pts.push(new THREE.Vector3(1, -0.6, 0.7));
    pts.push(new THREE.Vector3(1, 0.4, 0.7));
    pts.push(new THREE.Vector3(1, 0.4, -0.7));

    pts.push(new THREE.Vector3(-1, 0.4, -0.7));
    pts.push(new THREE.Vector3(-1, 0.4, 0.7));
    pts.push(new THREE.Vector3(1, 0.4, 0.7));

    pts.push(new THREE.Vector3(-1, 0.4, 0.7));
    pts.push(new THREE.Vector3(-1, -0.6, 0.7));

    // Roof peak
    pts.push(new THREE.Vector3(-1, 0.4, -0.7));
    pts.push(new THREE.Vector3(0, 1.0, -0.7));
    pts.push(new THREE.Vector3(1, 0.4, -0.7));

    pts.push(new THREE.Vector3(1, 0.4, 0.7));
    pts.push(new THREE.Vector3(0, 1.0, 0.7));
    pts.push(new THREE.Vector3(-1, 0.4, 0.7));

    pts.push(new THREE.Vector3(0, 1.0, -0.7));
    pts.push(new THREE.Vector3(0, 1.0, 0.7));

    const g = new THREE.BufferGeometry().setFromPoints(pts);
    return g;
  }, []);

  return (
    <group ref={group}>
      <line>
        <primitive object={houseGeo} attach="geometry" />
        <lineBasicMaterial color="#1a2238" linewidth={1} />
      </line>
      {/* Subtle terracotta glow ball above (the "paint dot") */}
      <mesh position={[0.7, 0.7, 0]}>
        <sphereGeometry args={[0.06, 24, 24]} />
        <meshBasicMaterial color="#c25e3c" />
      </mesh>
    </group>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(80 * 3);
    for (let i = 0; i < 80; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 4;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 3;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={80}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#1a2238"
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

export default function BlueprintCanvas() {
  return (
    <Canvas
      camera={{ position: [2.4, 1.2, 2.4], fov: 35 }}
      style={{ background: "transparent" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <House />
      <Particles />
    </Canvas>
  );
}
