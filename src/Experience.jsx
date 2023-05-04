import { Physics, Debug } from '@react-three/rapier'
import { useThree, extend } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Level from './world/Level.jsx'
import Player from './player/Player.jsx'
import Lights from './light/Lights.jsx'

extend({ OrbitControls })

export default function Experience()
{   
    const { camera, gl } = useThree()
    
    return <>
        <color args={ [ '#252731' ] } attach="background" />
        <orbitControls args={ [ camera, gl.domElement ] } />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />
        <Physics>
            <Lights />
            <Player />
            <Level />
        </Physics>
    </>
}