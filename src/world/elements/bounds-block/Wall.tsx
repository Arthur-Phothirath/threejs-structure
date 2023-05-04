import React from 'react';
import * as THREE from 'three';
import * as Co from './config.json';
import { RigidBody } from '@react-three/rapier';

const scale = Co.scale;
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: Co.color, metalness: 0, roughness: 0 });

export default function Wall({ position }) {
  return (
    <RigidBody type="fixed" restitution={0.2} friction={0}>
      <mesh geometry={boxGeometry} material={material} scale={[scale.x, scale.y, scale.z]} position={position} />
    </RigidBody>
  );
}
