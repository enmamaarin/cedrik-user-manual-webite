import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleData {
  position: THREE.Vector3;
  basePosition: THREE.Vector3;
  velocity: THREE.Vector3;
  phase: number;
  amplitude: number;
  frequency: number;
  shapeType: number;
}

interface AntigravityInnerProps {
  particleCount: number;
  particleSize: number;
  magnetRadius: number;
  waveSpeed: number;
  waveAmplitude: number;
  color: string;
}

function AntigravityInner({
  particleCount = 300,
  particleSize = 0.4,
  magnetRadius = 8,
  waveSpeed = 0.5,
  waveAmplitude = 0.3,
  color = "#167429",
}: AntigravityInnerProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const mouseRef = useRef(new THREE.Vector2(0, 0));
  const mouse3D = useRef(new THREE.Vector3(0, 0, 0));
  const { viewport, camera } = useThree();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const particles = useMemo(() => {
    const temp: ParticleData[] = [];
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * viewport.width * 1.5;
      const y = (Math.random() - 0.5) * viewport.height * 1.5;
      const z = (Math.random() - 0.5) * 10;
      temp.push({
        position: new THREE.Vector3(x, y, z),
        basePosition: new THREE.Vector3(x, y, z),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01
        ),
        phase: Math.random() * Math.PI * 2,
        amplitude: Math.random() * waveAmplitude + 0.1,
        frequency: Math.random() * 0.5 + 0.5,
        shapeType: Math.floor(Math.random() * 4),
      });
    }
    return temp;
  }, [particleCount, viewport.width, viewport.height, waveAmplitude]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Use delta time for frame-rate independent animation
    const smoothDelta = Math.min(delta, 0.1);
    const time = state.clock.elapsedTime * waveSpeed;
    const boundsX = viewport.width * 0.9;
    const boundsY = viewport.height * 0.9;
    const driftSpeed = 0.1;
    const lerpFactor = 0.02 * (smoothDelta * 60);

    // Update mouse 3D position
    const vec = new THREE.Vector3(mouseRef.current.x, mouseRef.current.y, 0);
    vec.unproject(camera);
    const dir = vec.sub(camera.position).normalize();
    const distance = -camera.position.z / dir.z;
    mouse3D.current = camera.position.clone().add(dir.multiplyScalar(distance));

    particles.forEach((particle, i) => {
      // Slow drift so particles keep moving even without mouse interaction.
      particle.basePosition.x += particle.velocity.x * driftSpeed * smoothDelta * 60;
      particle.basePosition.y += particle.velocity.y * driftSpeed * smoothDelta * 60;

      if (particle.basePosition.x > boundsX || particle.basePosition.x < -boundsX) {
        particle.velocity.x *= -1;
        particle.basePosition.x = THREE.MathUtils.clamp(
          particle.basePosition.x,
          -boundsX,
          boundsX
        );
      }

      if (particle.basePosition.y > boundsY || particle.basePosition.y < -boundsY) {
        particle.velocity.y *= -1;
        particle.basePosition.y = THREE.MathUtils.clamp(
          particle.basePosition.y,
          -boundsY,
          boundsY
        );
      }

      // Wave motion
      const waveX = Math.sin(time + particle.phase) * particle.amplitude;
      const waveY = Math.cos(time * particle.frequency + particle.phase) * particle.amplitude;

      // Target position with wave
      const targetX = particle.basePosition.x + waveX;
      const targetY = particle.basePosition.y + waveY;
      const targetZ = particle.basePosition.z;

      // Mouse repulsion (disabled on touch devices for performance)
      const dx = particle.position.x - mouse3D.current.x;
      const dy = particle.position.y - mouse3D.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      let repelX = 0;
      let repelY = 0;

      if (dist < magnetRadius && dist > 0) {
        const force = (1 - dist / magnetRadius) * 1;
        repelX = (dx / dist) * force;
        repelY = (dy / dist) * force;
      }

      // Smooth interpolation with delta time
      particle.position.x += ((targetX + repelX) - particle.position.x) * lerpFactor;
      particle.position.y += ((targetY + repelY) - particle.position.y) * lerpFactor;
      particle.position.z += (targetZ - particle.position.z) * lerpFactor;

      // Update instance
      dummy.position.copy(particle.position);

      // Scale (simplified - no hover effect for performance)
      dummy.scale.setScalar(particleSize);

      // Simplified rotation
      dummy.rotation.x = time * 0.3 + particle.phase;
      dummy.rotation.y = time * 0.2 + particle.phase;

      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  // Handle mouse move
  const handlePointerMove = (e: THREE.Event) => {
    const event = e as unknown as { clientX: number; clientY: number };
    mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  return (
    <group onPointerMove={handlePointerMove}>
      {/* Invisible plane to capture mouse events */}
      <mesh position={[0, 0, -5]}>
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      <instancedMesh ref={meshRef} args={[undefined, undefined, particleCount]}>
        <sphereGeometry args={[1, 6, 6]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} />
      </instancedMesh>
    </group>
  );
}

interface AntigravityProps {
  particleCount?: number;
  particleSize?: number;
  magnetRadius?: number;
  waveSpeed?: number;
  waveAmplitude?: number;
  color?: string;
  className?: string;
}

export default function Antigravity({
  particleCount = 300,
  particleSize = 0.4,
  magnetRadius = 8,
  waveSpeed = 0.5,
  waveAmplitude = 0.3,
  color = "#167429",
  className = "",
}: AntigravityProps) {
  return (
    <Canvas
      className={className}
      camera={{ position: [0, 0, 50], fov: 35 }}
      style={{ background: "transparent" }}
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
      gl={{ antialias: false, powerPreference: "high-performance" }}
      onPointerMove={(e) => {
        // Propagate mouse events to the scene
        const canvas = e.target as HTMLCanvasElement;
        const rect = canvas.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        canvas.dispatchEvent(new CustomEvent("mousemove3d", { detail: { x, y } }));
      }}
    >
      <AntigravityInner
        particleCount={particleCount}
        particleSize={particleSize}
        magnetRadius={magnetRadius}
        waveSpeed={waveSpeed}
        waveAmplitude={waveAmplitude}
        color={color}
      />
    </Canvas>
  );
}
