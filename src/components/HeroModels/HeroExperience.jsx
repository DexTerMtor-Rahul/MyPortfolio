import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLights from "./HeroLights";
import { Astronaut } from "./Astronaut";
import { Float } from "@react-three/drei";
import { easing } from "maath";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    // <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
    //   <OrbitControls
    //     enablePan={false}
    //     enableZoom={!isTablet}
    //     maxDistance={20}
    //     minDistance={5}
    //     minPolarAngle={Math.PI / 5}
    //     maxPolarAngle={Math.PI / 2}
    //   />

    //   <HeroLights />
    //   <group
    //     scale={isMobile ? 0.7 : 1}
    //     position={[0, -3.5, 0]}
    //     rotation={[0, -Math.PI / 4, 0]}
    //   >
    //     <Room />
    //   </group>
    // </Canvas>

    <Canvas
      camera={{ position: [0, 0, isMobile ? 12 : isTablet ? 14 : 15], fov: 45 }}
    >
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <Float>
        <Astronaut
          scale={isMobile ? 0.14 : isTablet ? 0.16 : 0.25}
          position={
            isMobile ? [0, -1.8, 0] : isTablet ? [0, -1.2, 0] : [0, 0, 0]
          }
        />
      </Float>
      <Rig />
    </Canvas>
  );
};

function Rig() {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return useFrame((state, delta) => {
    const mouseMultiplier = isMobile ? 5 : isTablet ? 8 : 10;
    const baseY = isMobile ? 0.5 : isTablet ? 0.8 : 1;
    const baseZ = isMobile ? 2 : isTablet ? 2.5 : 3;

    easing.damp3(
      state.camera.position,
      [
        state.mouse.x / mouseMultiplier,
        baseY + state.mouse.y / mouseMultiplier,
        baseZ,
      ],
      0.5,
      delta
    );
  });
}

export default HeroExperience;
