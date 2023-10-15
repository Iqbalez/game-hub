
import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react'
import useGenres, { Genre } from './Hooks/useGenre'
import getCroppedImageUrl from '../services/imageCrop'


const GenreList = () => {

const {data} = useGenres()

  return (
   <List>
    {data.map(genre => <ListItem key={genre.id} paddingY='5px'>
      <HStack>
         <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
         <Text fontSize='lg'>{genre.name}</Text>
      </HStack>
      </ListItem>)}
   </List>
  )
}

export default GenreList