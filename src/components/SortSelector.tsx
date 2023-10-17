import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
interface Props {
    onSelecteSortOrder: (sortOrder: string) => void;
    sortOrder: string
}
const SortSelector = ({onSelecteSortOrder, sortOrder}: Props) => {
    const sortOrders = [
        {value: '', label: 'Revelence'},
        {value: '-added', label: 'Data added'},
        {value: 'name', label: 'Name'},
        {value: '-realesed', label: 'Release data'},
        {value: '-metacritic', label: 'popularity'},
        {value: '-rating', label: 'Average rating'},
    ]
    const currentSortOrder = sortOrders.find(order => order.value === sortOrder)
  return (
        <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            order by: {currentSortOrder?.label || 'Relevence'}
            </MenuButton>
        <MenuList>
             {sortOrders.map(order => <MenuItem onClick={() => onSelecteSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
        </MenuList>
    </Menu>
  )
} 
    
    <div>SortSelector</div>
  

export default SortSelector