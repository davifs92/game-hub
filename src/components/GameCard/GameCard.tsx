import React from 'react'
import { Game } from '../../hooks/useGames'
import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import PlatformIconList from '../PlataformIconList/PlatformIconList'
import CriticScore from '../CriticScore'
import getCroppedImageUrl from '../../service/image-url'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <>
    <Card key={game.id}>
        <Image src={getCroppedImageUrl(game.background_image)}/>
        <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <HStack justifyContent='space-between' marginX={2}>
        <PlatformIconList platform={game.parent_platforms.map(p => p.platform)} />
          <CriticScore metacritic={game.metacritic} />
          </HStack>
        </CardBody>
        
    </Card>

    </>
  )
}

export default GameCard