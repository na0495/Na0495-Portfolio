import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import modelSrc from "../assets/model.glb?url";

export function ThreedAvatar(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(modelSrc);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Armature|mixamo.com|Layer0"].play();
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Hips} />
          <skinnedMesh
            name="Wolf3D_Avatar_Transparent"
            geometry={nodes.Wolf3D_Avatar_Transparent.geometry}
            material={materials["Wolf3D_Avatar_Transparent.001"]}
            skeleton={nodes.Wolf3D_Avatar_Transparent.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Avatar"
            geometry={nodes.Wolf3D_Avatar.geometry}
            material={materials["Wolf3D_Avatar.002"]}
            skeleton={nodes.Wolf3D_Avatar.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences}
          />
        </group>
      </group>
    </group>
  );
}