import React from 'react'
import { Game } from './Hooks/useGames'
import { Card, CardBody, CardHeader, Image } from '@chakra-ui/react'
interface props {
    game: Game
}
const GameCard = ({game}: props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image} />
        <CardBody>
            <CardHeader fontSize='2xl' >{game.name}</CardHeader>
        </CardBody>
    </Card>
  )
}

export default GameCard