import React from "react";
import { Box, Flex, Container, Heading, Button } from '@chakra-ui/react';
import SeccionFinalCardComponent from "./seccionFinalCard";
import img1 from '../../assets/images/seccionFinal/final1.png';
import img2 from '../../assets/images/seccionFinal/final2.png';
import img3 from '../../assets/images/seccionFinal/final3.png'
import { motion } from "framer-motion";

function SeccionFinal() {


    return (
        <Flex bgColor="#060606"
            align="center"
            justify="space-between"
            justifyContent="center"
            py={16} flexDirection="column">
            <Container color="white" textAlign="center" marginTop="3%">
                <Heading>Ultimos blogs:</Heading>
                Bienvenidos a mi blog personal, donde comparto mis pensamientos y experiencias sobre una variedad de temas que me apasionan. Desde tecnología y negocios hasta estilo de vida y viajes, encontrarás una gran variedad de temas en mi blog.
            </Container>

            <Flex display="flex"
                flexDirection="row"
                justifyContent={{ base: "space-between", md: "center" }}  >
                <motion.div whileHover={{ scale: 1.2 }} >
                    <SeccionFinalCardComponent fecha="26 de octubre, 2023" descripcion="Día de finanzas!" imagen={img1} />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                    <SeccionFinalCardComponent fecha="18 de septiembre, 2013" descripcion="Día de debates.." imagen={img2} />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                    <SeccionFinalCardComponent fecha="02 de agosto, 2003" descripcion="Reunion de viernes!" imagen={img3} />
                </motion.div>
            </Flex>

            <Flex marginTop="3%">
                <Button as={motion.button}
                    whileHover={{ scale: 1.2, color: "black" }}
                    whileTap={{ scale: 0.9 }} bgColor="#ef4f10" size="lg" color="white" width="200px">Ver Todos</Button>
            </Flex>
        </Flex>

    );

}

export default SeccionFinal;