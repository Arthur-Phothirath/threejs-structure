import Wall from '../../bounds-block/Wall';
import { TextStart } from '../../texts/text-start/TextStart';
import TileStart from '../../tiles/tile-start/TileStart';

export default function TileCompositionStart({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <Wall position={[2.15, 0.65, 0]} />
      <TextStart />
      <TileStart />
      <Wall position={[-2.15, 0.65, 0]} />
    </group>
  );
}
