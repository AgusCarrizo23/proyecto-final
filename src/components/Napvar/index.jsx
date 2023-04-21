import React from "react";
import { Flex, Box, Button, IconButton, Menu, MenuButton, MenuList, MenuItem, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import PortfolioCards from '../Portfolio-cards';



function Navbar() {
  const redirectToLandingPage = () => {
    history.push('../Portfolio-cards');
  };


  return (
    <Flex alignItems="center" bgColor="transparent" py={3} color="white" width="80%" justifyContent="space-between">
      <Box>
        <Image src="https://e7.pngegg.com/pngimages/170/650/png-clipart-olympic-logo-olympic-rings-sports-olympics.png" alt="Mi Logo" boxSize="100px" objectFit="contain" />
      </Box>
      <Box className="navbarCaja">
        <Flex alignItems="center">

          <Box mx={4}><Button bgColor="transparent" _hover={{
            bgColor: "#ef4f10"
          }}>Sobre mi</Button></Box>
          <Box mx={4}><Button bgColor="transparent" _hover={{
            bgColor: "#ef4f10"
          }}>Servicios</Button></Box>
          <Box mx={4}>
            <Button onClick={redirectToLandingPage} bgColor="transparent" _hover={{
            bgColor: "#ef4f10"
          }}>Portfolio</Button></Box>
          <Box mx={4}><Button bgColor="transparent" _hover={{
            bgColor: "#ef4f10"
          }}>blog </Button></Box>
          <Box mx={4}><Button bgColor="transparent" _hover={{
            bgColor: "#ef4f10"
          }}>contacto</Button></Box>
        </Flex>
      </Box>
      <Box>
        <Button  as={motion.button} whileHover={{scale: 1.2 , color: "black" }} bg="white" color="black" size="lg" borderRadius="lg" px="20px">Hire me!</Button>
      </Box>
    </Flex>




  );

}

export default Navbar;