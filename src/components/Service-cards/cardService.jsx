import React from "react";
import { Flex, Box, Text } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CardServiceComponent(props) {
    
    return (
        <Box
            bg='#111111'
            height={{ base: "auto", md: "70px" }}
            width={{ base: "100%", md: "30%" }}
            color="white"
            padding={{ base: "4", md: "10" }}
            margin={{ base: "2", md: "0" }}
            borderRadius="xl"
            display="flex"
            alignItems="center"
            justifyContent={{ base: "space-between", md: "flex-start" }}
            
        >
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                backgroundColor="#060606"
                width={{ base: "8", md: "10" }}
                height={{ base: "8", md: "10" }}
                borderRadius="100"
                marginRight={{ md: "4" }}
                
            >
                <FontAwesomeIcon color="#ef4f10" icon={props.icon} />
            </Box>
            <Box
                flexGrow="1"
                marginLeft={{ md: "4" }}
                marginRight={{ base: "4", md: "0" }}
                
            >
                <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight={600} color="white">{props.titulo}</Text>
            </Box>
            <ArrowForwardIcon color="#ef4f10" boxSize={{ base: 6, md: 10 }}></ArrowForwardIcon>
        </Box>
    );
}

export default CardServiceComponent;
