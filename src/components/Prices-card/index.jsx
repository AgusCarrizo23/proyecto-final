import React from "react";
import { Box, Flex, Container, Heading } from '@chakra-ui/react';
import PricesCardComponent from "./pricesCard";
import { PlusSquareIcon } from "@chakra-ui/icons";

function PricesCards() {

    return (
        <Flex display="flex" flexDirection="column" bgColor="#060606" height="xxl" width="full" marginTop="6%">
            <Container color="white" textAlign="center" marginTop="3%">
                <Heading>Our Affordable Pricing Plans</Heading>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est neque debitis doloribus, quam iste corporis in quis tempore illum possimus esse. Iure sunt perferendis quia sapiente, eligendi quam repellat. Nesciunt!
            </Container>
            <Container display="flex" flexDirection="row" justifyContent="center" width="100%">
                <PricesCardComponent
                plan= 'Basic'
                precio= '$19,99'
                descripcion='Estructura de una pagina completa con'
                 />
                <PricesCardComponent 
                 plan= 'Standard'
                 precio= '$29,99'
                 descripcion='Estructura de una pagina completa con diseños'
                 />
                <PricesCardComponent
                 plan= 'Premium'
                 precio= '$39,99'
                 descripcion='Estructura de una pagina completa con diseños'
                />
                <PricesCardComponent
                 plan= 'Golden'
                 precio= '$49,99'
                 descripcion='Estructura de una pagina completa con diseños'
                />
            </Container>
        </Flex>
    );

}

export default PricesCards;