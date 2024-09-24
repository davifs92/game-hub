import React from 'react'
import useGenres, { Genre } from '../hooks/useGenre';
import { List, ListItem, Image, HStack, Text, Spinner, Button } from '@chakra-ui/react';
import getCroppedImageUrl from '../service/image-url';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre, onSelectGenre} : Props) => {

    const {data, isLoading, error} = useGenres();

    if(error) return null;
    if(isLoading) return <Spinner />;
    
  return (
    <List>
      {data.map(genre => (
        <ListItem key={genre.id} paddingY={1}>
            <HStack>
            <Image boxSize='32px' src={getCroppedImageUrl(genre.image_background)} borderRadius={8}/>
            <Button variant='link' fontSize='lg' fontWeight={selectedGenre?.id == genre.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
            </HStack>
            </ListItem>
      ))}
    </List>
  )
}

export default GenreList