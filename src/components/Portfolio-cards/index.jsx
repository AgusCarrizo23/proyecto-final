import React from "react";
import { Container, Heading, Card, SimpleGrid, Flex, Box, Text, Image, Stack, Button, } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import img1 from '../../assets/images/portfolio/portfolio-img1.png'
import img2 from '../../assets/images/portfolio/portfolio-img2.png'
import img3 from '../../assets/images/portfolio/portfolio-img3.png'


function PortfolioCards() {

    return (
        <Flex bgColor="#060606" align="center" justify="space-between" justifyContent="center" py={16} flexDirection="column">
            <Flex
             display="flex"
             justifyContent="space-between"
             width="80%"
             marginBottom="40px"
             >
                <Box>
                    <Text color='white' fontSize="1rem">Mi Portafolio</Text>
                    <Heading color ='white'>Ver trabajos realizados</Heading>
                </Box>
                <Box width="50%">
                    <Box color= "white">Además, tengo experiencia en React y Hooks, HTML5, CSS3, JavaScript, API Rest, Git, Github y Gitlab, tengo habilidades prácticas en bibliotecas de UI como Material UI y Chakra UI.</Box>
                    <Button color="#ef4f10" bgColor="#060606">View All <ArrowForwardIcon color="#ef4f10" boxSize={4} marginLeft="5px"></ArrowForwardIcon></Button>
                </Box>
            </Flex>
            <Box display="flex" justifyContent="space-between" width="80%">
                <Image src={img1}/>
                <Image src={img2}/>
                <Image src={img3} />
            </Box>
        </Flex>
    );

}

export default PortfolioCards;