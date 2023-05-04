import { useMemo } from 'react'
import BlockAxe from "../../blocks/block-axe/BlockAxe";
import BlockLimbo from "../../blocks/block-limbo/BlockLimbo";
import BlockSpinner from "../../blocks/block-spinner/BlockSpinner";
import TileObstacle from "../../tiles/tile-obstacle/TileObstacle";

export default function TileCompositionObstacle({
    position = [0, 0, 0],
    count = 5,
    types = [ BlockAxe, BlockSpinner, BlockLimbo],
    tilesType = [ TileObstacle ],
    seed = 0
}){
    const tilesCompo = useMemo(() =>
    {
        const blocks = []
        const tiles = []

        for(let i = 0; i < count; i++)
        {
            const type = types[ Math.floor(Math.random() * types.length) ]
            const tile = tilesType[tilesType.length - 1]
            blocks.push(type)
            tiles.push(tile)
        }

        return [blocks, tiles]
    }, [ count, types, tilesType, seed ])

    return <group position={[0, -0.1, 0]}>
        { tilesCompo[0].map((Block, index) => <Block key={ index } position={ [ 0, 0.3, - (index + 1) * 4 ] }/>) }
        { tilesCompo[1].map((Tile, index) => <Tile key={ index } position={ [ 0, 0, - (index + 1) * 4 ] }/>) }
    </group>
}