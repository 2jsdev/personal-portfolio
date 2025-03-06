import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

interface ModelProps {
  position?: [number, number, number];
  scale?: number;
}

export function Model({ position = [0, 0, 0], scale = 1 }: ModelProps) {
  const modelRef = useRef<Group>(null);
  const directionRef = useRef(1);
  const rotationRef = useRef(0);

  const { scene, animations } = useGLTF("/model.glb") as { scene: Group; animations: any[] };
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      actions[Object.keys(actions)[0]]?.play();
    }
  }, [actions]);

  useFrame(() => {
    if (modelRef.current) {

      rotationRef.current += directionRef.current * 0.005;

      if (rotationRef.current >= Math.PI / 2 || rotationRef.current <= -Math.PI / 2) {
        directionRef.current *= -1;
      }

      modelRef.current.rotation.y = rotationRef.current;
    }
  });

  return <primitive ref={modelRef} object={scene} position={position} scale={scale} />;
}
