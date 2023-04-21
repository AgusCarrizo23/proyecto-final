import React from "react";
import { Box, Flex, Container, Heading } from '@chakra-ui/react';
import PricesCardComponent from "./pricesCard";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

function PricesCards() {

    return (
        <Flex bgColor="#060606"
            align="center"
            justify="space-between"
            justifyContent="center"
            py={16}
            flexDirection="column">
            <Container color="white" textAlign="center" marginTop="3%">
                <Heading>Nuestros planes de precios </Heading>
                ¡Bienvenidos a nuestros servicios! Ofrecemos una variedad de planes diseñados para satisfacer las necesidades de cada uno de nuestros clientes.
            </Container>
            <Flex display="flex"
                flexDirection={{ base: 'column', md: 'row' }}
                justifyContent="space-between"
                width="80%"
                marginTop="3%">
                <motion.div whileHover={{ scale: 1.2 }}>
                    <PricesCardComponent
                        plan='Basic'
                        precio='$19,99'
                        descripcion='Estructura de una pagina completa con diseños'
                    />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                    <PricesCardComponent
                        plan='Standard'
                        precio='$29,99'
                        descripcion='Estructura de una pagina completa con diseños'
                    />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                    <PricesCardComponent
                        plan='Premium'
                        precio='$39,99'
                        descripcion='Estructura de una pagina completa con diseños'
                    />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                    <PricesCardComponent
                        plan='Golden'
                        precio='$49,99'
                        descripcion='Estructura de una pagina completa con diseños'
                    />
                </motion.div>
            </Flex>
        </Flex>
    );

}

export default PricesCards;