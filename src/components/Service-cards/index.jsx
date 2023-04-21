import React from "react";
import { Container, Heading, Flex, Box, Button } from '@chakra-ui/react';
import CardServiceComponent from "./CardService";
import {
    faDesktop,
    faInfoCircle,
    faDisplay,
    faPaintBrush,
    faHouseLaptop,
    faComputer
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"






function ServiceCards() {

    return (
        <Flex display="flex"
            flexDirection="column"
            bgColor="#060606"
            height="100vh"
            width="full"
            flex="1"  >
            <Container color="white" textAlign="center" marginTop="3%">
                <Heading>Servicios</Heading>
                ¡Hola!

                Soy una desarrolladora y diseñadora gráfica con experiencia en la creación de soluciones digitales para diversas empresas. Me especializo en la creación de sitios web, aplicaciones móviles, diseños de marca y publicidad digital.
            </Container>
            <Box display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width="full" >
                <Box display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    marginTop="3%"
                    width="80%"
                    flexWrap="wrap"  >

                    <CardServiceComponent
                        titulo="Diseño web"
                        icon={faDesktop}
                    />



                    <CardServiceComponent
                        titulo="habilidades analiticas"
                        icon={faInfoCircle} />


                    <CardServiceComponent
                        titulo="Web Depelopement"
                        icon={faDisplay} />

                </Box>
                <Box display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    width="80%"
                    marginTop="3%"
                    flexWrap="wrap"
                >
                    <CardServiceComponent
                        titulo="Diseño grafico"
                        icon={faPaintBrush} />

                    <CardServiceComponent
                        titulo="aplicacion"
                        icon={faHouseLaptop} />

                    <CardServiceComponent

                        titulo="resolucion problemas"
                        icon={faComputer} />

                </Box>
                <Button as={motion.button} whileHover={{ scale: 1.2, color: "black", backgroundColor: "white" }} colorScheme="#060606" bg="#ef4f10" size="lg" marginTop="3%"  >ver todo</Button>
            </Box>

        </Flex>
    );

}

export default ServiceCards;