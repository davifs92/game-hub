import  { useEffect, useState } from 'react'
import { SimpleGrid, Text } from '@chakra-ui/react';
import ApiClient from '../../service/ApiClient';
import useGames from '../../hooks/useGames';
import GameCard from '../GameCard/GameCard';
import GameCardSkeleton from '../GameCardSkeleton';
import GameCardContainer from '../GameCardContainer';

const GameGrid = () => {
const {data, error, isLoading} = useGames();
const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={3}>
        {error && <Text>error</Text>}
        {isLoading && skeletons.map((s) => <GameCardContainer><GameCardSkeleton key={s} /></GameCardContainer>)} 
        {data && data.map(game => 
            <GameCardContainer><GameCard key={game.id} game={game} /></GameCardContainer>
        )}
    </SimpleGrid>
  )
}

export default GameGrid

