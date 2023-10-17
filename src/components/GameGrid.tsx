import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GamesCardContainer from './GamesCardContainer';
import useGames, { Platform } from './Hooks/useGames'
import { SimpleGrid, Text } from '@chakra-ui/react'
import { Genre } from './Hooks/useGenre';
import { GameQuery } from '../App';


export interface Props {
  gameQuery: GameQuery
 
}
const GameGrid = ({gameQuery}: Props) => {
    const {data, error, isLoading} = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6]

    
    
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding='10px' spacing={3}>
      {isLoading && skeletons.map(skeleton =>( <GamesCardContainer key={skeleton}> 
      <GameCardSkeleton/>
      </GamesCardContainer>))}
      {data.map((game)=> (
        <GamesCardContainer key={game.id}><GameCard  game={game}/></GamesCardContainer>
        
        ))}
        </SimpleGrid>
    </>
  )
  }

export default GameGrid