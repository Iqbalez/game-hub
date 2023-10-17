import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
  return (
        <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            order by: Revelence
            </MenuButton>
        <MenuList>
             <MenuItem>Revelence</MenuItem>
             <MenuItem>Date added</MenuItem>
             <MenuItem>Name</MenuItem>
             <MenuItem>Release date</MenuItem>
             <MenuItem>Popularity</MenuItem>
             <MenuItem>Avarage rating</MenuItem>
        </MenuList>
    </Menu>
  )
} 
    
    <div>SortSelector</div>
  

export default SortSelector