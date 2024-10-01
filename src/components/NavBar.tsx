import { HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/Odlo_logo.png"
import ColorModeSwitch from './ColorModeSwitch/ColorModeSwitch'
import SearchInput from './SearchInput'
interface Props {
  onSearch: (input : string) => void
}

const NavBar = ({onSearch} : Props) => {
  return (
    <HStack padding='10px'>
      
        <Image src={logo} boxSize="60px"></Image>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch />
        </HStack>
    
  )
}

export default NavBar