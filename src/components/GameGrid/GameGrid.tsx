import  { useEffect, useState } from 'react'
import { SimpleGrid, Text } from '@chakra-ui/react';
import ApiClient from '../../service/ApiClient';
import useGames, { Platform } from '../../hooks/useGames';
import GameCard from '../GameCard/GameCard';
import GameCardSkeleton from '../GameCardSkeleton';
import GameCardContainer from '../GameCardContainer';
import { GameQuery } from '../../App';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({gameQuery}: Props) => {
const {data, error, isLoading} = useGames(gameQuery);
const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing={6} paddingY={2}>
        {error && <Text>error</Text>}
        {isLoading && skeletons.map((s) => <GameCardContainer  key={s}>
          <GameCardSkeleton />
          </GameCardContainer>)} 
        {data && data.map(game => 
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
              </GameCardContainer>
        )}
    </SimpleGrid>
  )
}

export default GameGrid

