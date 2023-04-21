import React, { useState } from "react";
import { Flex, Box, Button, IconButton, Menu, MenuButton, MenuList, MenuItem, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import PortfolioCards from '../Portfolio-cards';
import { useMediaQuery } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../../assets/images/logo.svg"

function Navbar() {
  const [isMobile, isTablet] = useMediaQuery(["(max-width: 30em)", "(max-width: 48em)"]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const redirectToLandingPage = () => {
    history.push('../Portfolio-cards');
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Flex alignItems="center"
      bgColor="transparent"
      py={3}
      color="white"
      width="80%"
      justifyContent="space-between">
      {(!isMobile && !isTablet) && (
        <Box>
          <Image src={logo} alt="Mi Logo" boxSize="100px" objectFit="contain" />
        </Box>
      )}
      {(isMobile || isTablet) ? (
        <Box
          bgColor="black"
          color="orange"
          fontWeight="bold">
          <Menu isOpen={isMenuOpen}
            bgColor="black"
            color="orange"
            fontWeight="bold"
          >
            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Menu" onClick={handleMenuToggle} />
            <MenuList
              bgColor="black"
              color="orange"
              fontWeight="bold"

            >

              <MenuItem color="ef4f10"
                bgColor="black"
                fontWeight="bold"
                onClick={handleMenuToggle}>Sobre mi</MenuItem>
              <MenuItem color="ef4f10"
                bgColor="black"
                fontWeight="bold"
                onClick={handleMenuToggle}>Servicios</MenuItem>
              <MenuItem color="ef4f10"
                bgColor="black"
                fontWeight="bold"
                onClick={() => { redirectToLandingPage(); setIsMenuOpen(false); }}>Portfolio</MenuItem>
              <MenuItem color="ef4f10"
                bgColor="black"
                fontWeight="bold"
                onClick={handleMenuToggle}>Blog</MenuItem>
              <MenuItem color="ef4f10"
                bgColor="black"
                fontWeight="bold"
                onClick={handleMenuToggle}>Contacto</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      ) : (
        <Box className="navbarCaja">
          <Flex alignItems="center">
            <Box mx={4}><Button bgColor="transparent" _hover={{ bgColor: "#ef4f10" }}>Sobre mi</Button></Box>
            <Box mx={4}><Button bgColor="transparent" _hover={{ bgColor: "#ef4f10" }}>Servicios</Button></Box>
            <Box mx={4}><Button onClick={redirectToLandingPage} bgColor="transparent" _hover={{ bgColor: "#ef4f10" }}>Portfolio</Button></Box>
            <Box mx={4}><Button bgColor="transparent" _hover={{ bgColor: "#ef4f10" }}>Blog</Button></Box>
            <Box mx={4}><Button bgColor="transparent" _hover={{ bgColor: "#ef4f10" }}>Contacto</Button></Box>
          </Flex>
        </Box>
      )}
      {(!isMobile && !isTablet) && (
        <Box>
          <Button as={motion.button}
            whileHover={{ scale: 1.2, color: "black" }}
            bg="white"
            color="black"
            size="md"
            borderRadius="lg"
            px="20px">Hire me!</Button>
        </Box>
      )}
    </Flex>
  );
}

export default Navbar;
