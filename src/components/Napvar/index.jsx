import React from "react";
import { Flex, Box, Button, IconButton, Menu, MenuButton, MenuList, MenuItem, Text , Image} from "@chakra-ui/react";



function Navbar() {


return(
  <Flex alignItems="center" justifyContent="space-between" bg="#ccc" px={4} py={3}>
      <Box>
      <Image src="https://images.unsplash.com/photo-1624172541682-14675a0db485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bG9nbyUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Mi Logo" boxSize="50px" objectFit="contain" />
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
         <Button bg="#4CAF50" color="white" size="md" borderRadius="sm" px={4}>Hire me!</Button> 
      </Box>
    </Flex>

  


);

}

export default Navbar;