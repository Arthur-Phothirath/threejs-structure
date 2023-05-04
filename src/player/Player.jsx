import { useRapier, RigidBody } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';
import { useKeyboardControls } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import useGame from '../stores/useGame.jsx';

export default function Player() {
  const body = useRef();
  const [subscribeKey, getKeys] = useKeyboardControls();
  const { rapier, world } = useRapier();
  const rapierWorld = world.raw();
  const restart = useGame((state) => state.restart);

  const jump = () => {
    const origin = body.current.translation();
    origin.y -= 0.31;
    const direction = new THREE.Vector3(0, -1, 0);
    // const ray = new rapier.Ray(origin, direction);
    // const hit = rapierWorld.castRay(ray, 10, true);

    // if (hit.toi < 0.15) {
    //   body.current.applyImpulse({ x: 0, y: 0.5, z: 0 });
    // }
  };

  useEffect(() => {
    subscribeKey(
      (state) => {
        return jump();
      },
      () => {
        console.log('jump');
      }
    );
  }, []);

  useFrame((state, delta) => {
    const { forward, backward, left, right } = getKeys();

    const impulse = { x: 0, y: 0, z: 0 };
    const torque = { x: 0, y: 0, z: 0 };

    const impulseStrength = 0.6 * delta;
    const torqueStrength = 0.2 * delta;

    if (forward) {
      impulse.z -= impulseStrength;
      torque.x -= torqueStrength;
      console.log('forward');
    }

    if (right) {
      impulse.x += impulseStrength;
      torque.z -= torqueStrength;
      console.log('right');
    }

    if (backward) {
      impulse.z += impulseStrength;
      torque.x += torqueStrength;
    }

    if (left) {
      impulse.x -= impulseStrength;
      torque.z += torqueStrength;
      console.log('left');
    }

    body.current.applyImpulse(impulse);
    body.current.applyTorqueImpulse(torque);

    const bodyPosition = body.current.translation();

    /**
     * Phases
     */

    if (bodyPosition.y < -4) restart();
  });

  return (
    <>
      <RigidBody ref={body} colliders="ball" restitution={0.2} linearDamping={0.5} angularDamping={0.5} friction={1} position={[0, 3, 0]}>
        <mesh castShadow>
          <icosahedronGeometry args={[0.3, 1]} />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </RigidBody>
    </>
  );
}
