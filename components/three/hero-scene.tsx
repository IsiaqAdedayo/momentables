"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function organicNoise(x: number, y: number, z: number) {
  return (
    Math.sin(x * 1.7 + y * 1.1) * 0.5 +
    Math.sin(y * 2.4 + z * 1.6 + 1.3) * 0.3 +
    Math.sin(z * 3.2 + x * 2.7 + 2.1) * 0.2
  );
}

function createGem(detail: number, amplitude: number) {
  const geometry = new THREE.IcosahedronGeometry(1.28, detail);
  const position = geometry.attributes.position;
  const vertex = new THREE.Vector3();

  for (let i = 0; i < position.count; i += 1) {
    vertex.fromBufferAttribute(position, i);
    const noise = organicNoise(vertex.x * 1.9, vertex.y * 1.9, vertex.z * 1.9);
    const ripple = Math.sin(vertex.y * 6.4 + vertex.x * 2.2) * 0.014;
    const scale = 1 + noise * amplitude + ripple;
    position.setXYZ(i, vertex.x * scale, vertex.y * scale, vertex.z * scale);
  }

  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  return geometry;
}

function StudioEnvironment() {
  const { scene } = useThree();

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const base = ctx.createLinearGradient(0, 0, 0, 512);
    base.addColorStop(0, "#2b1b5e");
    base.addColorStop(0.45, "#0a0714");
    base.addColorStop(1, "#040308");
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, 1024, 512);

    const softbox = (
      x: number,
      y: number,
      radius: number,
      color: string,
      alpha: number,
    ) => {
      const glow = ctx.createRadialGradient(x, y, 0, x, y, radius);
      glow.addColorStop(0, color);
      glow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.globalAlpha = alpha;
      ctx.fillStyle = glow;
      ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
      ctx.globalAlpha = 1;
    };

    softbox(190, 90, 120, "#ffffff", 0.9);
    softbox(660, 100, 330, "#ff2d78", 0.95);
    softbox(980, 320, 300, "#39ffe0", 0.85);
    softbox(380, 430, 380, "#5b21b6", 0.9);
    softbox(120, 350, 240, "#0ea5e9", 0.55);

    const texture = new THREE.CanvasTexture(canvas);
    texture.mapping = THREE.EquirectangularReflectionMapping;
    texture.colorSpace = THREE.SRGBColorSpace;
    scene.environment = texture;

    return () => {
      scene.environment = null;
      texture.dispose();
    };
  }, [scene]);

  return null;
}

function ParticleField() {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 1500;
    const array = new Float32Array(count * 3);
    let seed = 11;
    const random = () => {
      seed = (seed * 16807) % 2147483647;
      return seed / 2147483647;
    };

    for (let i = 0; i < count; i += 1) {
      const radius = 2.6 + random() * 5.6;
      const theta = random() * Math.PI * 2;
      const phi = Math.acos(2 * random() - 1);
      array[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      array[i * 3 + 1] = radius * Math.cos(phi) * 0.7;
      array[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta) * 0.55;
    }

    return array;
  }, []);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.elapsedTime * 0.025;
    points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.06) * 0.06;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.016}
        color="#ded4ff"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function Scene({ animate }: { animate: boolean }) {
  const gem = useRef<THREE.Mesh>(null);
  const pebble = useRef<THREE.Mesh>(null);
  const group = useRef<THREE.Group>(null);
  const rings = useRef<THREE.Group>(null);

  const { size } = useThree();
  const isMobile = size.width < 768;

  const geometry = useMemo(() => createGem(isMobile ? 5 : 7, 0.09), [isMobile]);
  const pebbleGeometry = useMemo(() => createGem(3, 0.16), []);

  useFrame((state, delta) => {
    const t = animate ? state.clock.elapsedTime : 1.6;

    if (group.current) {
      const targetX = isMobile ? 0.95 : 3.05;
      const targetY = isMobile ? 1.62 : 0.92;
      const scroll =
        typeof window !== "undefined"
          ? Math.min(1, window.scrollY / Math.max(1, window.innerHeight))
          : 0;

      group.current.position.x +=
        (targetX + state.pointer.x * 0.18 - group.current.position.x) *
        Math.min(1, delta * 2.4);
      group.current.position.y +=
        (targetY + state.pointer.y * 0.14 - scroll * 1.5 - group.current.position.y) *
        Math.min(1, delta * 2.4);
      group.current.rotation.y +=
        (state.pointer.x * 0.28 - group.current.rotation.y) *
        Math.min(1, delta * 1.5);
      group.current.rotation.x = state.pointer.y * 0.08;
    }

    if (gem.current) {
      gem.current.rotation.y = t * 0.18;
      gem.current.rotation.x = Math.sin(t * 0.24) * 0.12 + 0.1;
      gem.current.position.y = Math.sin(t * 0.55) * 0.05;
      gem.current.scale.setScalar(isMobile ? 0.44 : 0.68);
    }

    if (pebble.current) {
      pebble.current.rotation.y = -t * 0.3;
      pebble.current.rotation.z = t * 0.12;
      pebble.current.position.y = Math.sin(t * 0.8 + 1) * 0.08;
    }

    if (rings.current) {
      rings.current.rotation.z = t * 0.04;
      rings.current.rotation.x = 0.95 + Math.sin(t * 0.12) * 0.08;
    }
  });

  return (
    <>
      <StudioEnvironment />

      <ambientLight intensity={0.25} />
      <directionalLight position={[4, 5, 3]} intensity={1.3} color="#ffd6e6" />
      <directionalLight position={[-5, 2, 1]} intensity={0.9} color="#8fffe4" />
      <directionalLight position={[0, -4, 3]} intensity={0.7} color="#9b7bff" />

      <group ref={group}>
        <mesh ref={gem} geometry={geometry}>
          <meshPhysicalMaterial
            color="#ffffff"
            metalness={1}
            roughness={0.12}
            envMapIntensity={1.35}
            clearcoat={1}
            clearcoatRoughness={0.12}
            iridescence={1}
            iridescenceIOR={1.32}
            iridescenceThicknessRange={[120, 620]}
          />
        </mesh>

        <mesh
          ref={pebble}
          geometry={pebbleGeometry}
          position={[1.35, -1.35, -0.9]}
          scale={0.34}
        >
          <meshPhysicalMaterial
            color="#dfe9ff"
            metalness={1}
            roughness={0.1}
            envMapIntensity={1.4}
            iridescence={0.8}
            iridescenceIOR={1.4}
            iridescenceThicknessRange={[200, 800]}
          />
        </mesh>

        <group ref={rings}>
          <mesh rotation={[0.4, 0.2, 0]}>
            <torusGeometry args={[1.85, 0.003, 8, 220]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.16} />
          </mesh>
          <mesh rotation={[0.9, -0.4, 0.3]}>
            <torusGeometry args={[2.2, 0.0025, 8, 220]} />
            <meshBasicMaterial color="#ffc7de" transparent opacity={0.1} />
          </mesh>
        </group>
      </group>

      <ParticleField />
    </>
  );
}

export default function HeroScene({ animate = true }: { animate?: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 6.4], fov: 42 }}
      frameloop={animate ? "always" : "demand"}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0 }}
      aria-hidden
    >
      <Scene animate={animate} />
    </Canvas>
  );
}
