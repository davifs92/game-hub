import React from 'react'
import useGenres from '../hooks/useGenre';
import { List, ListItem, Image, HStack, Text } from '@chakra-ui/react';
import getCroppedImageUrl from '../service/image-url';



const GenreList = () => {

    const {data} = useGenres();
  return (
    <List>
      {data.map(genre => (
        <ListItem key={genre.id} paddingY={1}>
            <HStack>
            <Image boxSize='32px' src={getCroppedImageUrl(genre.image_background)} borderRadius={8}/>
            <Text fontSize='lg'>{genre.name}</Text>
            </HStack>
            </ListItem>
      ))}
    </List>
  )
}

export default GenreList