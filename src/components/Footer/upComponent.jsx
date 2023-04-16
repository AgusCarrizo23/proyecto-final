import React from "react";
import { Flex, Box, Text, Image } from '@chakra-ui/react'

function UpComponent() {
    return (
        /* agregar al flez contenedor para que quede todo al margen alignItems="center" */
        <Flex bgColor="#060606" width={'full'} height="200px" justifyContent="center">
            <Box width="30%">
                <Image height="100px" src="https://e7.pngegg.com/pngimages/170/650/png-clipart-olympic-logo-olympic-rings-sports-olympics.png" />
                <Text color="white" width="90%">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo modi ex eius expedita rem tempore.</Text>
            </Box>
            <Box width="50%" color="white" justifyContent="center" display="flex" flexDirection="column">
                <Text fontWeight={500} fontSize={'2xl'} fontFamily={'body'} color="white">
                    Si tiene alguna consulta, no dude en ponerse en contacto conmmigo
                </Text>
                <Flex height="90%" width="100%" justifyContent="space-between" marginTop="22px">
                    <Box width="34%">
                        <Text fontWeight={500} fontSize={'lg'} fontFamily={'body'} color="white">Sent Mail</Text>
                        <Text fontSize={'sm'} fontFamily={'body'} color="white" marginTop="10px">contacto@contact.com</Text>
                        <Text fontSize={'sm'} fontFamily={'body'} color="white" marginTop="10px">contacto@contact.com</Text>
                    </Box>
                    <Box width="34%">
                        <Text fontWeight={500} fontSize={'lg'} fontFamily={'body'} color="white">Make Call</Text>
                        <Text fontSize={'sm'} fontFamily={'body'} color="white" marginTop="10px">+123 456 7890</Text>
                        <Text fontSize={'sm'} fontFamily={'body'} color="white" marginTop="10px">+123 456 7890</Text>
                    </Box>
                    <Box width="34%">
                        <Text fontWeight={500} fontSize={'lg'} fontFamily={'body'} color="white">Get in Touch</Text>
                        <Text fontSize={'sm'} fontFamily={'body'} color="white" marginTop="10px">123/A, Hamburguer City</Text>
                        <Text fontSize={'sm'} fontFamily={'body'} color="white" marginTop="10px">New York, USA</Text>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
}

export default UpComponent;