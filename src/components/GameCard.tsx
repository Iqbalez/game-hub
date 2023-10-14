import React from 'react'
import { Game } from './Hooks/useGames'
import { Card, CardBody, CardHeader, HStack, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './criticScore'
interface props {
    game: Game
}
const GameCard = ({game}: props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image} />
        <CardBody>
            <CardHeader fontSize='2xl' >{game.name}</CardHeader>
            <HStack justifyContent= 'space-between'>
            <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)} />
            <CriticScore score={game.metacritic} />
            </HStack>
            
        </CardBody>
    </Card>
  )
}

export default GameCard