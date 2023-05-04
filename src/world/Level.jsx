import TileCompositionObstacle from './elements/tiles-composition/tile-composition-obstacle/TileCompositionObstacle';
import TileCompositionStart from './elements/tiles-composition/tile-composition-start/TileCompositionStart';
import { useControls } from 'leva';

export default function Level() {
  const { ObstacleNumber } = useControls({
    ObstacleNumber: {
      value: 3,
      min: 1,
      max: 10,
      step: 1,
    },
  });
  // const ObstacleNumber = 3

  return (
    <>
      <TileCompositionStart />
      <TileCompositionObstacle count={ObstacleNumber} />
    </>
  );
}
