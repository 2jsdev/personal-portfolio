import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Wolf3D_Body: THREE.SkinnedMesh;
    Wolf3D_Hair: THREE.SkinnedMesh;
    Wolf3D_Outfit_Bottom: THREE.SkinnedMesh;
    Wolf3D_Outfit_Footwear: THREE.SkinnedMesh;
    Wolf3D_Outfit_Top: THREE.SkinnedMesh;
    EyeLeft: THREE.SkinnedMesh;
    EyeRight: THREE.SkinnedMesh;
    Wolf3D_Head: THREE.SkinnedMesh;
    Wolf3D_Teeth: THREE.SkinnedMesh;
    Cube_plastic_0: THREE.Mesh;
    Cube593_plastic_0: THREE.Mesh;
    Cube594_fabric_red_0: THREE.Mesh;
    Cube596_fabric_red_0: THREE.Mesh;
    Cube597_fabric_red_0: THREE.Mesh;
    Cube598_fabric_red_0: THREE.Mesh;
    Cube600_fabric_black_0: THREE.Mesh;
    Cube601_fabric_black_0: THREE.Mesh;
    Cube602_plastic_0: THREE.Mesh;
    Cube603_plastic_0: THREE.Mesh;
    Cube604_plastic2_0: THREE.Mesh;
    Cube605_plastic3_0: THREE.Mesh;
    Cube606_plastic2_0: THREE.Mesh;
    Cylinder_metal_black_0: THREE.Mesh;
    Cylinder228_fabric_red_0: THREE.Mesh;
    Cylinder228_fabric_red_0001: THREE.Mesh;
    Cylinder228_fabric_red_0002: THREE.Mesh;
    Cylinder228_fabric_red_0003: THREE.Mesh;
    Cylinder229_plastic_0: THREE.Mesh;
    Cylinder231_plastic_0: THREE.Mesh;
    Cylinder232_plastic_0: THREE.Mesh;
    Cylinder233_plastic_0: THREE.Mesh;
    Cylinder234_plastic_0: THREE.Mesh;
    Cylinder235_plastic_0: THREE.Mesh;
    Cylinder236_metal_black_0: THREE.Mesh;
    Cube599_fabric_black_0: THREE.Mesh;
    Cube599_fabric_black_0001: THREE.Mesh;
    Hips: THREE.Bone;
  };
  materials: {
    ["Wolf3D_Body.001"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Hair.001"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Outfit_Bottom.001"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Outfit_Footwear.001"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Outfit_Top.001"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Eye.001"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Skin.001"]: THREE.MeshStandardMaterial;
    ["Wolf3D_Teeth.001"]: THREE.MeshStandardMaterial;
    plastic: THREE.MeshStandardMaterial;
    fabric_red: THREE.MeshStandardMaterial;
    fabric_black: THREE.MeshStandardMaterial;
    plastic2: THREE.MeshStandardMaterial;
    plastic3: THREE.MeshStandardMaterial;
    metal_black: THREE.MeshStandardMaterial;
  };
};

interface ModelProps {
  [key: string]: any;
}

const Model: React.FC<ModelProps> = (props) => {
  const mesh = useRef<any>();
  const group = useRef<any>();
  const { nodes, materials, animations } = useGLTF("/model.glb") as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useFrame(() => {
    if (mesh.current) mesh.current.rotation.y += 0.005;
  });

  useEffect(() => {
    const animation = actions["Typing"];
    animation?.play();

    return () => {
      animation?.stop();
    };
  }, []);

  return (
    <mesh ref={mesh} {...props}>
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="Armature">
            <primitive object={nodes.Hips} />
            <skinnedMesh
              name="Wolf3D_Body"
              geometry={nodes.Wolf3D_Body.geometry}
              material={materials["Wolf3D_Body.001"]}
              skeleton={nodes.Wolf3D_Body.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_Hair"
              geometry={nodes.Wolf3D_Hair.geometry}
              material={materials["Wolf3D_Hair.001"]}
              skeleton={nodes.Wolf3D_Hair.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_Outfit_Bottom"
              geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
              material={materials["Wolf3D_Outfit_Bottom.001"]}
              skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_Outfit_Footwear"
              geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
              material={materials["Wolf3D_Outfit_Footwear.001"]}
              skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            />
            <skinnedMesh
              name="Wolf3D_Outfit_Top"
              geometry={nodes.Wolf3D_Outfit_Top.geometry}
              material={materials["Wolf3D_Outfit_Top.001"]}
              skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            />
            <skinnedMesh
              name="EyeLeft"
              geometry={nodes.EyeLeft.geometry}
              material={materials["Wolf3D_Eye.001"]}
              skeleton={nodes.EyeLeft.skeleton}
              morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
              morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
            />
            <skinnedMesh
              name="EyeRight"
              geometry={nodes.EyeRight.geometry}
              material={materials["Wolf3D_Eye.001"]}
              skeleton={nodes.EyeRight.skeleton}
              morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
              morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
            />
            <skinnedMesh
              name="Wolf3D_Head"
              geometry={nodes.Wolf3D_Head.geometry}
              material={materials["Wolf3D_Skin.001"]}
              skeleton={nodes.Wolf3D_Head.skeleton}
              morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
              morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
            />
            <skinnedMesh
              name="Wolf3D_Teeth"
              geometry={nodes.Wolf3D_Teeth.geometry}
              material={materials["Wolf3D_Teeth.001"]}
              skeleton={nodes.Wolf3D_Teeth.skeleton}
              morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
              morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
            />
          </group>
          <group
            name="Sketchfab_model"
            position={[0, 0, -0.24]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1, 1, 0.99]}
          >
            <group
              name="ed509ab80a2749edac7af209b7e764bdfbx"
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.01}
            >
              <group name="RootNode">
                <group
                  name="Cube599"
                  position={[0, 92.11, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[5, 5, 71]}
                >
                  <group
                    name="Cube"
                    position={[-3.1, -4.31, -0.74]}
                    scale={[0.27, 0.27, 0]}
                  >
                    <mesh
                      name="Cube_plastic_0"
                      geometry={nodes.Cube_plastic_0.geometry}
                      material={materials.plastic}
                    />
                  </group>
                  <group
                    name="Cube593"
                    position={[-5.9, -6.91, -0.6]}
                    scale={[0.66, 0.66, 0.05]}
                  >
                    <mesh
                      name="Cube593_plastic_0"
                      geometry={nodes.Cube593_plastic_0.geometry}
                      material={materials.plastic}
                    />
                  </group>
                  <group
                    name="Cube594"
                    position={[-4.82, -7.8, -0.56]}
                    scale={[0.34, 1.07, 0.08]}
                  >
                    <mesh
                      name="Cube594_fabric_red_0"
                      geometry={nodes.Cube594_fabric_red_0.geometry}
                      material={materials.fabric_red}
                    />
                  </group>
                  <group name="Cube596">
                    <mesh
                      name="Cube596_fabric_red_0"
                      geometry={nodes.Cube596_fabric_red_0.geometry}
                      material={materials.fabric_red}
                    />
                  </group>
                  <group name="Cube597">
                    <mesh
                      name="Cube597_fabric_red_0"
                      geometry={nodes.Cube597_fabric_red_0.geometry}
                      material={materials.fabric_red}
                    />
                  </group>
                  <group name="Cube598">
                    <mesh
                      name="Cube598_fabric_red_0"
                      geometry={nodes.Cube598_fabric_red_0.geometry}
                      material={materials.fabric_red}
                    />
                  </group>
                  <group
                    name="Cube600"
                    position={[0, -8.34, -0.63]}
                    scale={[2.34, 2.34, 0.16]}
                  >
                    <mesh
                      name="Cube600_fabric_black_0"
                      geometry={nodes.Cube600_fabric_black_0.geometry}
                      material={materials.fabric_black}
                    />
                  </group>
                  <group
                    name="Cube601"
                    position={[-4.82, -7.8, -0.56]}
                    scale={[0.34, 1.07, 0.08]}
                  >
                    <mesh
                      name="Cube601_fabric_black_0"
                      geometry={nodes.Cube601_fabric_black_0.geometry}
                      material={materials.fabric_black}
                    />
                  </group>
                  <group
                    name="Cube602"
                    position={[-3.06, -2.05, -0.64]}
                    rotation={[0, 0, -0.24]}
                    scale={[1.43, 1.43, 0.1]}
                  >
                    <mesh
                      name="Cube602_plastic_0"
                      geometry={nodes.Cube602_plastic_0.geometry}
                      material={materials.plastic}
                    />
                  </group>
                  <group
                    name="Cube603"
                    position={[-3.09, -1.52, -0.36]}
                    rotation={[0, 0, -0.24]}
                    scale={[0.86, 0.86, 0.06]}
                  >
                    <mesh
                      name="Cube603_plastic_0"
                      geometry={nodes.Cube603_plastic_0.geometry}
                      material={materials.plastic}
                    />
                  </group>
                  <group
                    name="Cube604"
                    position={[-4.95, -4.71, -0.68]}
                    rotation={[0, 0, -0.24]}
                    scale={[0.07, 0.36, 0.03]}
                  >
                    <mesh
                      name="Cube604_plastic2_0"
                      geometry={nodes.Cube604_plastic2_0.geometry}
                      material={materials.plastic2}
                    />
                  </group>
                  <group
                    name="Cube605"
                    position={[-1.29, 0.42, 0.29]}
                    scale={[1.07, 1.07, 0.08]}
                  >
                    <mesh
                      name="Cube605_plastic3_0"
                      geometry={nodes.Cube605_plastic3_0.geometry}
                      material={materials.plastic3}
                    />
                  </group>
                  <group
                    name="Cube606"
                    position={[-6.37, -6.89, -0.37]}
                    scale={[0.32, 0.32, 0.02]}
                  >
                    <mesh
                      name="Cube606_plastic2_0"
                      geometry={nodes.Cube606_plastic2_0.geometry}
                      material={materials.plastic2}
                    />
                  </group>
                  <group
                    name="Cylinder"
                    position={[0.01, -4.57, -1.08]}
                    rotation={[0, 0, -0.71]}
                    scale={[0.92, 0.92, 0.03]}
                  >
                    <mesh
                      name="Cylinder_metal_black_0"
                      geometry={nodes.Cylinder_metal_black_0.geometry}
                      material={materials.metal_black}
                    />
                  </group>
                  <group
                    name="Cylinder228"
                    position={[-4.88, -7.32, -0.45]}
                    rotation={[-Math.PI / 2, 0.28, Math.PI / 2]}
                    scale={[0, 0.01, 3.56]}
                  >
                    <mesh
                      name="Cylinder228_fabric_red_0"
                      geometry={nodes.Cylinder228_fabric_red_0.geometry}
                      material={materials.fabric_red}
                    />
                    <mesh
                      name="Cylinder228_fabric_red_0001"
                      geometry={nodes.Cylinder228_fabric_red_0001.geometry}
                      material={materials.fabric_red}
                    />
                    <mesh
                      name="Cylinder228_fabric_red_0002"
                      geometry={nodes.Cylinder228_fabric_red_0002.geometry}
                      material={materials.fabric_red}
                    />
                    <mesh
                      name="Cylinder228_fabric_red_0003"
                      geometry={nodes.Cylinder228_fabric_red_0003.geometry}
                      material={materials.fabric_red}
                    />
                  </group>
                  <group
                    name="Cylinder229"
                    position={[0, -4.58, -1.02]}
                    scale={[0.7, 0.7, 0.05]}
                  >
                    <mesh
                      name="Cylinder229_plastic_0"
                      geometry={nodes.Cylinder229_plastic_0.geometry}
                      material={materials.plastic}
                    />
                  </group>
                  <group
                    name="Cylinder231"
                    position={[0.1, -4.6, -1.07]}
                    rotation={[-Math.PI / 2, 0.4, Math.PI / 2]}
                    scale={[0.04, 0.56, 0.08]}
                  >
                    <mesh
                      name="Cylinder231_plastic_0"
                      geometry={nodes.Cylinder231_plastic_0.geometry}
                      material={materials.plastic}
                    />
                  </group>
                  <group
                    name="Cylinder232"
                    position={[0, -4.6, -1.07]}
                    rotation={[1.57, 1.48, -1.57]}
                    scale={[0.04, 0.56, 0.08]}
                  >
                    <mesh
                      name="Cylinder232_plastic_0"
                      geometry={nodes.Cylinder232_plastic_0.geometry}
                      material={materials.plastic}
                    />
                  </group>
                  <group
                    name="Cylinder233"
                    position={[0.01, -4.47, -1.07]}
                    rotation={[-Math.PI / 2, -0.87, Math.PI / 2]}
                    scale={[0.04, 0.56, 0.08]}
                  >
                    <mesh
                      name="Cylinder233_plastic_0"
                      geometry={nodes.Cylinder233_plastic_0.geometry}
                      material={materials.plastic}
                    />
                  </group>
                  <group
                    name="Cylinder234"
                    position={[-0.09, -4.59, -1.07]}
                    rotation={[Math.PI / 2, -1.03, -Math.PI / 2]}
                    scale={[0.04, 0.56, 0.08]}
                  >
                    <mesh
                      name="Cylinder234_plastic_0"
                      geometry={nodes.Cylinder234_plastic_0.geometry}
                      material={materials.plastic}
                    />
                  </group>
                  <group
                    name="Cylinder235"
                    position={[-0.04, -4.66, -1.07]}
                    rotation={[Math.PI / 2, 0.24, -Math.PI / 2]}
                    scale={[0.04, 0.56, 0.08]}
                  >
                    <mesh
                      name="Cylinder235_plastic_0"
                      geometry={nodes.Cylinder235_plastic_0.geometry}
                      material={materials.plastic}
                    />
                  </group>
                  <group
                    name="Cylinder236"
                    position={[-1.77, -4.3, -0.69]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[0.01, 0.09, 1.4]}
                  >
                    <mesh
                      name="Cylinder236_metal_black_0"
                      geometry={nodes.Cylinder236_metal_black_0.geometry}
                      material={materials.metal_black}
                    />
                  </group>
                  <mesh
                    name="Cube599_fabric_black_0"
                    geometry={nodes.Cube599_fabric_black_0.geometry}
                    material={materials.fabric_black}
                  />
                  <mesh
                    name="Cube599_fabric_black_0001"
                    geometry={nodes.Cube599_fabric_black_0001.geometry}
                    material={materials.fabric_black}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </mesh>
  );
};

useGLTF.preload("/model.glb");

export default Model;
