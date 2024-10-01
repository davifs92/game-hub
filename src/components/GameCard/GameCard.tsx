import React from 'react'
import { Game } from '../../hooks/useGames'
import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import PlatformIconList from '../PlataformIconList/PlatformIconList'
import CriticScore from '../CriticScore'
import getCroppedImageUrl from '../../service/image-url'
import Emojis from '../Emojis'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <>
    <Card key={game.id}>
        <Image src={getCroppedImageUrl(game.background_image)}/>
        <CardBody>
        <HStack justifyContent='space-between' marginX={2} marginBottom='2'>
        <PlatformIconList platform={game.parent_platforms.map(p => p.platform)} />
          <CriticScore metacritic={game.metacritic} />
          </HStack>
          <Heading fontSize='2xl'>{game.name}</Heading> <Emojis rating_top={game.rating_top} />
        </CardBody>
        
    </Card>

    </>
  )
}

export default GameCard