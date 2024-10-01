import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
    selectedSortOrder: string;
    onChangeSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({selectedSortOrder, onChangeSortOrder} : Props) => {
    const sortOrders = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Date added'},
        {value: 'name', label: 'Name'},
        {value: '-released', label: 'Released'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average Rating'}
    ]

  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown />}>
       Order By: {sortOrders.find(({value}) => value === selectedSortOrder)?.label || 'Relevance' }
    </MenuButton>
    <MenuList>
       {sortOrders.map(sortOrder => 
       <MenuItem key={sortOrder.value} value={sortOrder.value} onClick={() => onChangeSortOrder(sortOrder.value)}>
        {sortOrder.label}
        </MenuItem>)}
    </MenuList>
</Menu>
  )
}

export default SortSelector