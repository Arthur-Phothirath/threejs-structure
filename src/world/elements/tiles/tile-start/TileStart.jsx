import { RigidBody } from '@react-three/rapier'
import * as THREE from 'three'
import * as Co from './config.json'

const scaleBox = Co.scale
const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshStandardMaterial({ color: Co.color, metalness: 0, roughness: 0 })

export default function TileStart({ position = [ 0, 0, 0 ] }){
    
    return <RigidBody type="fixed" restitution={ 0.2 } friction={ 0 }>
        <mesh 
            geometry={ boxGeometry } 
            material={ material } 
            position={ [ 0, - 0.1, 0 ] } 
            scale={ [ scaleBox.x, scaleBox.y, scaleBox.z ] }  
            receiveShadow 
        />
    </RigidBody>

}