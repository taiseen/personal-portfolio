import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useState, useRef, Suspense } from "react";
import * as random from "maath/random/dist/maath-random.esm";

const StarsCanvas = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 }),
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsBackground = () => {
  return (
    <div className="pointer-events-none w-full h-auto fixed inset-0 z-20">
      <Canvas camera={{ position: [0, 0, 1] }} style={{ pointerEvents: "none" }}>
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsBackground;
