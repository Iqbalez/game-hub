import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GamesCardContainer from './GamesCardContainer';
import useGames from './Hooks/useGames'
import { SimpleGrid, Text } from '@chakra-ui/react'


const GameGrid = () => {
    const {data, error, isLoading} = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6]

    
    
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding='10px' spacing={3}>
      {isLoading && skeletons.map(skeleton =>( <GamesCardContainer> <GameCardSkeleton key={skeleton}/></GamesCardContainer>))}
      {data.map((game)=> (
        <GameCard key={game.id} game={game}/>
        ))}
        </SimpleGrid>
    </>
  )
  }

export default GameGrid