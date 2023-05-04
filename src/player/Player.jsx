import { useRapier, RigidBody } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'
import { useKeyboardControls } from '@react-three/drei'
import { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import useGame from '../stores/useGame.jsx'

export default function Player()
{   
    const body = useRef()
    const [subscribeKey, getKeys ] = useKeyboardControls()

    useFrame(() => {
        const {forward, backward, lefward, rightward} = getKeys()

        const impulse = { x: 0, y: 0, z: 0 }
        const torque = { x: 0, y: 0, z: 0 }

        // body.current.applyImpulse(impulse)
        // body.current.applyTorque(torque)
    })

    return <>
        <RigidBody  ref={body} colliders='ball' restitution={ 0.2 } friction={ 1 } position={ [0,3,0]}>
            <mesh castShadow>
                <icosahedronGeometry args={ [ 0.3, 1 ] } />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>
        </RigidBody>
    </>
}