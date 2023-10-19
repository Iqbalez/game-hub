import React from 'react'
import { Game } from './Hooks/useGames'
import { Card, CardBody, CardHeader, HStack, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './criticScore'
import getCroppedImageUrl from '../services/imageCrop'
import Emoji from './Emoji'
interface props {
    game: Game
}
const GameCard = ({game}: props) => {
  return (
    <Card>
        <Image  src={getCroppedImageUrl (game.background_image)} />
        <CardBody>
            
            <HStack justifyContent= 'space-between' marginBottom={3}>
            <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)} />
            <CriticScore score={game.metacritic} />
            </HStack>
            <CardHeader fontSize='2xl'>{game.name}<Emoji rating={game.rating_top} /></CardHeader>
        </CardBody>
    </Card>
  )
}

export default GameCard