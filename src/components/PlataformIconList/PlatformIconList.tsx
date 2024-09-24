import React from 'react'
import { HStack, Icon } from '@chakra-ui/react'
import { Platform } from '../../hooks/useGames'
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md"
import { SiNintendo } from "react-icons/si"
import { BsGlobe } from "react-icons/bs"
import { IconType } from 'react-icons'

interface Props {
    platform: Platform[]
}

const PlatformIconList = ({platform}: Props) => {
    const iconsMap : {[key: string] : IconType}= {
        playstation: FaPlaystation,
        xbox: FaXbox,
        pc: FaWindows,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        nintendo: SiNintendo,
        web: BsGlobe,
        ios: MdPhoneIphone,
    }

  return (
    <HStack marginY={1}>
            {platform.map((platform) => <Icon key={platform.id} as={iconsMap[platform.slug]} color='gray.500'/>)}

    </HStack>
  )
}

export default PlatformIconList