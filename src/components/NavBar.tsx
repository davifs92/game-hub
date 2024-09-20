import { HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/Odlo_logo.png"
import ColorModeSwitch from './ColorModeSwitch/ColorModeSwitch'
const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} padding='10px'>
        <Image src={logo} boxSize="60px"></Image>
        <ColorModeSwitch />
        </HStack>
    
  )
}

export default NavBar