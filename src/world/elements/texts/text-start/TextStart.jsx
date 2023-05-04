import { Float, Text } from '@react-three/drei'
import * as Co from './config.json'

const position = Co.position

export function TextStart(){
    return <Float floatIntensity={ 0.25 } rotationIntensity={ 0.25 }>
        <Text
            // font="/bebas-neue-v9-latin-regular.woff"
            scale={ Co.scale }
            maxWidth={ 0.25 }
            lineHeight={ 0.75 }
            textAlign="right"
            position={ [ position.x, position.y, position.z ] }
            rotation-y={ - 0.25 }
        >
            Marble Race
            <meshBasicMaterial toneMapped={ false } />
        </Text>
    </Float>
}