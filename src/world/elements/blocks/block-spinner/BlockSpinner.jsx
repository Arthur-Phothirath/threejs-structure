import { useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import * as Co from './config.json'

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const obstacleMaterial = new THREE.MeshStandardMaterial({ color: Co.color, metalness: 0, roughness: 1 })
const scaleBox = Co.scale

export default function BlockSpinner({position=[ 0, 0, 0 ]}){
    const obstacle = useRef()
    const [ speed ] = useState(() => (Math.random() + 0.2) * (Math.random() < 0.5 ? - 1 : 1))

    useFrame((state) =>
    {
        const time = state.clock.getElapsedTime()

        const rotation = new THREE.Quaternion()
        rotation.setFromEuler(new THREE.Euler(0, time * speed, 0))
        obstacle.current.setNextKinematicRotation(rotation)
    })

    return <RigidBody ref={ obstacle } type="kinematicPosition" position={ position } restitution={ 0.2 } friction={ 0 }>
        <mesh geometry={ boxGeometry } material={ obstacleMaterial } scale={ [ scaleBox.x, scaleBox.y, scaleBox.z ] } castShadow receiveShadow />
    </RigidBody>
}