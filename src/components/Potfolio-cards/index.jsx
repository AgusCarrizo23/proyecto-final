import React from "react";
import { Container, Heading, Card, SimpleGrid, Flex, Box, Text, Image, Stack, } from '@chakra-ui/react'


function PortfolioCards() {

    return (

        <Flex>

            <div>
                <Box maxW="xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <Stack spacing={2} align="center" mt={2}>
                        <Image boxSize="50px" objectFit="cover" src='https://images.unsplash.com/photo-1643533694234-fee2444dc7a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aW1hZ2VuJTIwc3ZnJTIwcGFyYSUyMGNhcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='image' />

                        <Box p="2">
                            <Box d="flex" alignItems="baseline">
                                <Text fontWeight="semibold" fontSize="md" mr="2">
                                    ggg
                                </Text>
                                <Text color="gray.500" fontSize="sm">
                                    gggg
                                </Text>
                            </Box>

                            <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                                ggg
                            </Box>
                        </Box>
                    </Stack>
                </Box>
            </div>


        </Flex>




    );

}

export default PortfolioCards;