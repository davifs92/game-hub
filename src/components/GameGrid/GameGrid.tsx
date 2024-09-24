import  { useEffect, useState } from 'react'
import { SimpleGrid, Text } from '@chakra-ui/react';
import ApiClient from '../../service/ApiClient';
import useGames, { Platform } from '../../hooks/useGames';
import GameCard from '../GameCard/GameCard';
import GameCardSkeleton from '../GameCardSkeleton';
import GameCardContainer from '../GameCardContainer';
import { Genre } from '../../hooks/useGenre';

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null; 
}

const GameGrid = ({selectedGenre, selectedPlatform}: Props) => {
const {data, error, isLoading} = useGames(selectedGenre, selectedPlatform);
const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={3} paddingY={2}>
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

