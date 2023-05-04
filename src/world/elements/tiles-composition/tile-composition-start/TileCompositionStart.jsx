import { TextStart } from "../../texts/text-start/TextStart";
import TileStart from "../../tiles/tile-start/TileStart";

export default function TileCompositionStart({position = [0, 0, 0]}){
    return <group position={position}>
        <TextStart />
        <TileStart />
    </group>
}