import { Badge } from '@chakra-ui/react';
import React from 'react'

interface Props {
    metacritic: number;
}


const CriticScore = ({metacritic}: Props) => {
    const color = metacritic > 85 ? 'green' : metacritic > 60 ? 'yellow' : '';
  return (
<>
<Badge colorScheme={color} fontSize='14px'>{metacritic}</Badge>
</>  
)
}

export default CriticScore