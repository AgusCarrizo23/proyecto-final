import React from "react";
import {
    Box,
    Center,
    Text,
    Button,
    Image
} from '@chakra-ui/react';


function SeccionFinalCardComponent(props) {

    const { fecha, descripcion, imagen } = props;

    return (
        <Center py={6}>
            <Box
                maxW={'400px'}
                w={'full'}
                maxH={'450px'}
                h={'full'}
                boxShadow={'2xl'}
                bgColor="#060606"
                rounded={'md'}
                overflow={'hidden'}
                padding="30px"
            >
                <Image src={imagen} width="100%" borderRadius="5px"/>
                <Text color='white' fontSize="1rem" marginTop="10px">{fecha}</Text>
                <Text fontSize={'lg'} fontWeight={600} color="white" marginTop="10px">{descripcion}</Text>
                <Text color='#ef4f10' fontSize="1rem" marginTop="10px">Leer Mas</Text>
            </Box>
        </Center>
    );
}

export default SeccionFinalCardComponent;
