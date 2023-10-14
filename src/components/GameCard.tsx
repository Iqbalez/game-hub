import React from 'react'
import { Game } from './Hooks/useGames'
import { Card, CardBody, CardHeader, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
interface props {
    game: Game
}
const GameCard = ({game}: props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image} />
        <CardBody>
            <CardHeader fontSize='2xl' >{game.name}</CardHeader>
            <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)} />
        </CardBody>
    </Card>
  )
}

export default GameCard