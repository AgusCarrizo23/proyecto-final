import React from "react";
import { Box, Flex, Button, Heading, Text, Image } from '@chakra-ui/react'
import bgHero from '../../assets/images/bg-agus-svg.svg'
import agusHero from '../../assets/images/agus-hero.png'


function Hero() {

  return (
    <div>
      <Flex bgColor="#060606" align="center" justify="space-between" justifyContent="center" py={16}>
        
        <Image src={bgHero} position="absolute" width="100%" bgColor="#060606"/>

        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" width="80%" position="relative">
        {/* Sección izquierda */}
        <Box color="white" maxW="xl" mr={16}>
          <Button bgColor="#ef4f10" size="lg" mr={4}>welcome</Button>
          <Heading as="h1" size="3xl">Agustina Carrizo</Heading>
          <Text fontSize="lg" mb={8} mt={4}>Frontend Developer</Text>
          <Text fontSize="lg" mb={8}>
            Texto de ejemplo que explica la propuesta de valor de tu producto o servicio. Puede ser más largo o más corto, según tus necesidades.
          </Text>
          <Button bgColor="#ef4f10" size="lg" mr={4}>Botón 1</Button>
          <Button bgColor="#060606" size="lg" border="1px solid #fff">Botón 2</Button>
        </Box>
        {/* Sección derecha */}
        <Box maxW="sm" marginRight="10%">
          <Image src={agusHero} alt="Mi imagen" boxShadow="xl" borderRadius="100%" bgColor="white"/>
        </Box> 
        </Box>
      </Flex>
    </div>
  );

}

export default Hero;