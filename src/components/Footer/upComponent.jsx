import React from "react";
import { Flex, Box, Text, Image, Grid, GridItem } from "@chakra-ui/react";
import logo from "../../assets/images/logo.svg"

function UpComponent() {
  return (
    <Flex
      templatecolumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
      bgColor="#060606"
      width="full"
      minHeight="300px"
      justifyContent="center"
      alignItems="center"
      color="white"
      p="20px"
      flexWrap="wrap"
      flexDirection={{ base: "column", md: "row" }}


    >
      <Box width="30%">
        <Image
          height={{ base: "50px", md: "100px" }}
          src={logo}
        />
        <Text
          width="90%"
          marginTop={{ base: "10px", md: "8%" }}
          fontSize={{ base: "xs", md: "sm" }}
        >
          Agustina carrizo Devs y Graphic
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
          templatecolumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={{ base: "20px", md: "40px" }}
          marginTop={{ base: "20px", md: "22px" }}
          width="100%"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box >
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
              Agusdev@develop.com
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
              fontSize={{ base: "sm", md: "md" }}
              fontFamily={'body'}
              color="white"
              marginBottom={{ base: "10px", md: "20px" }}>Encuentrame!</Text>
            <Text fontSize={{ base: "sm", md: "md" }}
              fontFamily={'body'}
              color="white"
              marginBottom={{ base: "10px", md: "20px" }}>balcarce 450, Tucuman, Arg</Text>
            <Text fontSize={{ base: "sm", md: "md" }}
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