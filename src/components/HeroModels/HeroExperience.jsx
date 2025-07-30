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

    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
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
          scale={isMobile ? 0.18 : 0.25}
          position={isMobile && [0, -1.5, 0]}
        />
      </Float>
      <Rig />
    </Canvas>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default HeroExperience;
