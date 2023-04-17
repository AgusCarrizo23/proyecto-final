import React from "react";
import { Flex, Box, Button, IconButton, Menu, MenuButton, MenuList, MenuItem, Text , Image} from "@chakra-ui/react";



function Navbar() {


return(
  <Flex alignItems="center" justifyContent="space-between" bg="black" px={4} py={3} color="white">
      <Box>
      <Image src="https://e7.pngegg.com/pngimages/170/650/png-clipart-olympic-logo-olympic-rings-sports-olympics.png" alt="Mi Logo" boxSize="100px" objectFit="contain" />
      </Box>
      <Box>
        <Flex alignItems="center">
          
          <Box mx={4}><Text>About Me</Text></Box>
          <Box mx={4}><Text>Services</Text></Box>
          <Box mx={4}><Text>Portfolio</Text></Box>
          <Box mx={4}><Text>blog </Text></Box>
          <Box mx={4}><Text>contact Us</Text></Box>
        </Flex>
      </Box>
      <Box>
         <Button bg="#ef4f10" color="white" size="md" borderRadius="sm" px={4}>Hire me!</Button> 
      </Box>
    </Flex>

  


);

}

export default Navbar;