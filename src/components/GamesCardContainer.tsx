import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
interface Props {
   children: ReactNode;
}
const GamesCardContainer = ({children}: Props) =>{
  return (
    <Box width='300px' borderRadius={10} overflow='hidden'>
         {children}
    </Box>
  )
}

export default GamesCardContainer