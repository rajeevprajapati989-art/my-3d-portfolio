import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points as DreiPoints, PointMaterial } from '@react-three/drei';
import { 
  Points as ThreePoints, 
  Vector3 as ThreeVector3, 
  Mesh as ThreeMesh, 
  AdditiveBlending 
} from 'three';

const ParticleField = () => {
  // Use direct ThreePoints type from three to avoid namespace resolution errors
  const ref = useRef<ThreePoints>(null!);
  
  // Generate random points for the particle field
  const sphere = useMemo(() => {
    const pts = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const r = 1.5;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      pts[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pts[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pts[i * 3 + 2] = r * Math.cos(phi);
    }
    return pts;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <DreiPoints ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#6366f1"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          blending={AdditiveBlending}
        />
      </DreiPoints>
    </group>
  );
};

const ShootingStars = () => {
    const stars = useMemo(() => {
        return Array.from({ length: 20 }).map(() => ({
            position: new ThreeVector3(
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10
            ),
            speed: 0.02 + Math.random() * 0.05
        }));
    }, []);

    return (
        <group>
            {stars.map((star, i) => (
                <MovingStar key={i} {...star} />
            ))}
        </group>
    );
}

const MovingStar = ({ position, speed }: { position: ThreeVector3, speed: number }) => {
    const meshRef = useRef<ThreeMesh>(null!);
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.position.x += speed;
            meshRef.current.position.y -= speed * 0.5;
            if (meshRef.current.position.x > 5) {
                meshRef.current.position.x = -5;
                meshRef.current.position.y = (Math.random() - 0.5) * 10;
            }
        }
    });

    return (
        <mesh ref={meshRef} position={position}>
            <sphereGeometry args={[0.01, 8, 8]} />
            <meshBasicMaterial color="#ffffff" />
        </mesh>
    );
}

const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 bg-[#020617]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <color attach="background" args={['#020617']} />
        <ambientLight intensity={0.5} />
        <ParticleField />
        <ShootingStars />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;