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
                flexDirection={{ base: "column", md: "row" }}
                justifyContent="space-between"
                width="80%"
                marginBottom="40px"
            >
                <Box>
                    <Text color='white' fontSize={{ base: "1rem", md: "1.2rem" }}>Mi Portafolio</Text>
                    <Heading color='white' fontSize={{ base: "2xl", md: "4xl" }}>Ver trabajos realizados</Heading>
                </Box>
                <Box width="50%"
                    width={{ base: "100%", md: "50%" }}
                    marginTop={{ base: "20px", md: "0" }}
                    paddingLeft={{ base: "0", md: "40px" }}>
                    <Text color="white" fontSize={{ base: "sm", md: "lg" }}>Además, tengo experiencia en React y Hooks, HTML5, CSS3, JavaScript, API Rest, Git, Github y Gitlab, tengo habilidades prácticas en bibliotecas de UI como Material UI y Chakra UI.
                    </Text>
                    <Button color="#ef4f10"
                        bgColor="#060606"
                        marginTop={{ base: "10px", md: "20px" }}
                        fontSize={{ base: "sm", md: "lg" }}>View All <ArrowForwardIcon color="#ef4f10" boxSize={4} marginLeft="5px"></ArrowForwardIcon></Button>
                </Box>
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} width="80%" margin="auto">
                <Image src={img1} />
                <Image src={img2} />
                <Image src={img3} />
            </SimpleGrid>
        </Flex>
    );

}

export default PortfolioCards;