import { FaThumbsUp } from "react-icons/fa6";
import { GiBullseye } from "react-icons/gi";
import { FaRegFaceMeh } from "react-icons/fa6";
import { Box } from "@chakra-ui/react";

interface Props {
    rating_top: number;
}

const Emojis = ({rating_top} : Props) => {

  return (
    <Box marginTop={1}>
      {rating_top >= 5 ? <FaThumbsUp size='25px'/> : rating_top >= 4 ? <GiBullseye size='25px'/> : <FaRegFaceMeh size='25px'/>}
    </Box>
  )
}

export default Emojis