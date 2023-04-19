import React from "react";
import { Flex, Box, Button, IconButton, Menu, MenuButton, MenuList, MenuItem, Text, Image } from "@chakra-ui/react";



function Navbar() {


  return (
    <Flex alignItems="center" bgColor="transparent" py={3} color="white" width="80%" justifyContent="space-between">
      <Box>
        <Image src="https://e7.pngegg.com/pngimages/170/650/png-clipart-olympic-logo-olympic-rings-sports-olympics.png" alt="Mi Logo" boxSize="100px" objectFit="contain" />
      </Box>
      <Box>
        <Flex alignItems="center">

          <Box mx={4}><Button bgColor="transparent" _hover={{
            bgColor: "#ef4f10"
          }}>About Me</Button></Box>
          <Box mx={4}><Button bgColor="transparent" _hover={{
            bgColor: "#ef4f10"
          }}>Services</Button></Box>
          <Box mx={4}><Button bgColor="transparent" _hover={{
            bgColor: "#ef4f10"
          }}>Portfolio</Button></Box>
          <Box mx={4}><Button bgColor="transparent" _hover={{
            bgColor: "#ef4f10"
          }}>blog </Button></Box>
          <Box mx={4}><Button bgColor="transparent" _hover={{
            bgColor: "#ef4f10"
          }}>contact Us</Button></Box>
        </Flex>
      </Box>
      <Box>
        <Button bg="white" color="black" size="lg" borderRadius="lg" px="20px">Hire me!</Button>
      </Box>
    </Flex>




  );

}

export default Navbar;