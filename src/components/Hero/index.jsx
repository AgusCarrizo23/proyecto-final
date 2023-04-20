import React from "react";
import { Box, Flex, Button, Heading, Text, Image, Container } from '@chakra-ui/react'
import bgHero from '../../assets/images/bg-agus-svg.svg'
import agusHero from '../../assets/images/hero/heroFoto.png'
import Navbar from '../Napvar/index'
import { motion } from "framer-motion"



function Hero() {

  return (
    <div display="flex" flexDirection="column">



      <Flex bgColor="#060606" align="center" justify="space-between" justifyContent="center" height="3xl">

        <Box bgImage={bgHero} bgRepeat="repeat" bgSize="100%" width="full" height="3xl">

          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between" position="relative" height="xl">
            <Navbar width="100%"  justifyContent="space-around"/>
            {/* Sección izquierda */}
            <Box display="flex" flexDirection="row" width="80%">
              <Box color="white">
                <Button as={motion.button} whileHover={{scale: 1.2 , color: "black" }} bgColor="#ef4f10"   size="lg" mr={4}  >welcome!</Button>
                <Heading as="h1" size="3xl">Agustina Carrizo</Heading>
                <Text fontSize="lg" mb={8} mt={4}>Frontend Developer & web designer</Text>
                <Text fontSize="lTeg" mb={8}>
                  Soy un/a profesional altamente motivado/a con una pasión por el desarrollo de software, y creo que mi experiencia y habilidades pueden contribuir significativamente a la empresa.
                </Text>
                <Button  as={motion.button} whileHover={{scale: 1.2 , color: "black" }} bgColor="#ef4f10" size="lg" mr={4}>Hire me!</Button>
                <Button  as={motion.button} whileHover={{scale: 1.2 , color: "black" }} bgColor="#060606" size="lg" border="1px solid #fff">Explore</Button>
              </Box>
              {/* Sección derecha */}
              <Box display={{ base: 'none', md: 'block' }} maxW="sm" marginRight="10%">
             
                <Box boxShadow="xl" bgColor="white" height='400px' width='400px' borderRadius='100%' position='relative' marginTop="10%">
                  
                <motion.div whileHover={{ scale: 1.2 }}>
                  <Image src={agusHero} alt="Mi imagen" boxShadow="xl" borderRadius='100%' height='450px' width='310px' position='absolute' marginLeft='12%' marginTop="-10%" />
                  </motion.div>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </div>

  );

}

export default Hero;