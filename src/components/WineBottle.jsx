/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Johana-PS (https://sketchfab.com/Johana-PS)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/3d-wine-bottle-model-399587f06b894b00bea59ee03841dbb6
Title: 3D Wine Bottle Model
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

// scale={[0.468, 1.258, 0.468]}
//position={[0.019, 1.452, 0]}
//[0.658,1.770,0.658] [0.658,1.770,0.658]

export default function WineBottle(props) {
  const { nodes, materials } = useGLTF("/3dwine.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0.019, 1.7, 5]} scale={[1, 2.6, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Label}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3dwine.glb");