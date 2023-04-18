import React from "react";
import { Box, Flex, Button, Heading, Text, Image, Container } from '@chakra-ui/react'
import bgHero from '../../assets/images/bg-agus-svg.svg'
import agusHero from '../../assets/images/hero/heroFoto.png'
import Navbar from '../Napvar/index'


function Hero() {

  return (
    <div display="flex" flexDirection="column">
      <div>
        <Navbar />
      </div>
      <div>


        <Flex bgColor="#060606" align="center" justify="space-between" justifyContent="center" py={16}>

          <Image src={bgHero} position="absolute" width="100%" bgColor="#060606" marginTop="21%"/>

          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" width="80%" position="relative" >
            {/* Sección izquierda */}
            <Box color="white" maxW="xl" mr={16}>
              <Button bgColor="#ef4f10" size="lg" mr={4}>welcome!</Button>
              <Heading as="h1" size="3xl">Agustina Carrizo</Heading>
              <Text fontSize="lg" mb={8} mt={4}>Frontend Developer & web designer</Text>
              <Text fontSize="lTeg" mb={8}>
                Soy un/a profesional altamente motivado/a con una pasión por el desarrollo de software, y creo que mi experiencia y habilidades pueden contribuir significativamente a la empresa.
              </Text>
              <Button bgColor="#ef4f10" size="lg" mr={4}>Hire me!</Button>
              <Button bgColor="#060606" size="lg" border="1px solid #fff">Explore</Button>
            </Box>
            {/* Sección derecha */}
            <Box maxW="sm" marginRight="10%">
              <Box boxShadow="xl" bgColor="white" height='400px' width='400px' borderRadius='100%' position='relative' marginTop="10%">
                <Image src={agusHero} alt="Mi imagen" boxShadow="xl" borderRadius='100%' height='450px' width='310px' position='absolute' marginLeft='12%' marginTop="-10%" />
              </Box>
            </Box>
          </Box>
        </Flex>
      </div>
      </div>
      );

}

      export default Hero;