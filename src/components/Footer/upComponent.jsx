import React from "react";
import { Flex, Box, Text, Image, Grid, GridItem } from "@chakra-ui/react";

function UpComponent() {
    return (
        <Flex
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            bgColor="#060606"
            width="full"
            height="auto"
            justifyContent="center"
            alignItems="center"
            color="white"
            padding="20px"
        >
            <Box width="30%">
                <Image
                    height={{ base: "50px", md: "100px" }}
                    src="https://e7.pngegg.com/pngimages/170/650/png-clipart-olympic-logo-olympic-rings-sports-olympics.png"
                />
                <Text
                    width="90%"
                    marginTop={{ base: "10px", md: "8%" }}
                    fontSize={{ base: "xs", md: "sm" }}
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo modi
                    ex eius expedita rem tempore.
                </Text>
            </Box>
            <Box
                width="50%"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                marginTop={{ base: "20px", md: "0" }}
            >
                <Text
                    fontWeight={500}
                    fontSize={{ base: "md", md: "2xl" }}
                    fontFamily="body"
                    marginBottom={{ base: "20px", md: "0" }}
                    textAlign={{ base: "center", md: "left" }}
                >
                    Si tiene alguna consulta, no dude en ponerse en contacto conmigo
                </Text>
                <Flex
                    templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                    gap={{ base: "20px", md: "40px" }}
                    marginTop={{ base: "20px", md: "22px" }}
                    width="100%"
                >
                    <Box>
                        <Text
                            fontWeight={500}
                            fontSize={{ base: "md", md: "lg" }}
                            fontFamily="body"
                            marginBottom={{ base: "10px", md: "20px" }}
                        >
                            Enviame un correo!
                        </Text>
                        <Text
                            fontSize={{ base: "sm", md: "md" }}
                            fontFamily="body"
                            marginBottom={{ base: "10px", md: "20px" }}
                        >
                            Agusdevelop@develop.com
                        </Text>
                        <Text
                            fontSize={{ base: "sm", md: "md" }}
                            fontFamily="body"
                            marginBottom={{ base: "10px", md: "20px" }}
                        >
                            agusgraphic@gmail.com
                        </Text>
                    </Box>
                    <Box>
                        <Text
                            fontWeight={500}
                            fontSize={{ base: "md", md: "lg" }}
                            fontFamily="body"
                            marginBottom={{ base: "10px", md: "20px" }}
                        >
                            Hazme una llamada!
                        </Text>
                        <Text
                            fontSize={{ base: "sm", md: "md" }}
                            fontFamily="body"
                            
                        >
                            +381 459 7890
                        </Text>
                        <Text fontSize={{ base: "sm", md: "md" }} 
                        fontFamily={'body'} 
                        color="white"
                        marginBottom={{ base: "10px", md: "20px" }}
                         >+381 456 0987</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={500} 
                        Text fontSize={{ base: "sm", md: "md" }} 
                        fontFamily={'body'} 
                        color="white"
                        marginBottom={{ base: "10px", md: "20px" }}>Encuentrame!</Text>
                        <Text Text fontSize={{ base: "sm", md: "md" }} 
                        fontFamily={'body'} 
                        color="white"
                        marginBottom={{ base: "10px", md: "20px" }}>balcarce 450, Tucuman, Arg</Text>
                        <Text Text fontSize={{ base: "sm", md: "md" }} 
                        fontFamily={'body'} 
                        color="white"
                        marginBottom={{ base: "10px", md: "20px" }}>New York, USA</Text>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
}

export default UpComponent;