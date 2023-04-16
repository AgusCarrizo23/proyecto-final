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
             marginTop="3%"
             marginBottom="40px"
             >
                <div>
                    <Text color='white' fontSize="1rem">Mi Portafolio</Text>
                    <Heading color ='white'>Ver trabajos realizados</Heading>
                </div>
                <div>
                    <Container color= "white">Además, tengo experiencia en React y Hooks, HTML5, CSS3, JavaScript, API Rest, Git, Github y Gitlab, tengo habilidades prácticas en bibliotecas de UI como Material UI y Chakra UI.</Container>
                    <Button color="#ef4f10" bgColor="#060606">View All <ArrowForwardIcon color="#ef4f10" boxSize={4} marginLeft="5px"></ArrowForwardIcon></Button>
                </div>
            </Flex>
            <Box display="flex" justifyContent="space-between" width="80%">
                <Image src={img1}/>
                <Image src={img2}/>
                <Image src={img3} marginRight="20px"/>
            </Box>
            
{/* <div>
                <Box maxW="xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <Stack spacing={2} align="center" mt={2}>
                        <Image boxSize="50px" objectFit="cover" src='https://images.unsplash.com/photo-1643533694234-fee2444dc7a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aW1hZ2VuJTIwc3ZnJTIwcGFyYSUyMGNhcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='image' />

                        <Box p="2">
                            <Box d="flex" alignItems="baseline">
                                <Text fontWeight="semibold" fontSize="md" mr="2">
                                
                                </Text>
                                <Text color="gray.500" fontSize="sm">
                            
                                </Text>
                            </Box>

                            <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                                
                            </Box>
                        </Box>
                    </Stack>
                </Box>
            </div>*/}


        </Flex>




    );

}

export default PortfolioCards;