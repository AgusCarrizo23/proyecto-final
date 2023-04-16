import React from "react";
import { Box, Flex, Container, Heading, Button } from '@chakra-ui/react';
import SeccionFinalCardComponent from "./seccionFinalCard";
import img1 from '../../assets/images/seccionFinal/final1.png';
import img2 from '../../assets/images/seccionFinal/final2.png';
import img3 from '../../assets/images/seccionFinal/final3.png'

function SeccionFinal() {
    const descrip = "Descripcion bla bla bla bla bla bla bla bla bla bla bla";

    return (
        <Flex bgColor="#060606" align="center" justify="space-between" justifyContent="center" py={16} flexDirection="column">
            <Container color="white" textAlign="center" marginTop="3%">
                <Heading>Latest Blogs</Heading>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est neque debitis doloribus, quam iste corporis in quis tempore illum possimus esse. Iure sunt perferendis quia sapiente, eligendi quam repellat. Nesciunt!
            </Container>
            <Flex display="flex" flexDirection="row" justifyContent="space-between" width="84%">
                <SeccionFinalCardComponent fecha="26 de octubre, 2023" descripcion={descrip} imagen={img1}/>
                <SeccionFinalCardComponent fecha="18 de septiembre, 2013" descripcion={descrip} imagen={img2}/>
                <SeccionFinalCardComponent fecha="02 de agosto, 2003" descripcion={descrip} imagen={img3}/>
            </Flex>
            <Flex marginTop="3%">
                <Button bgColor="#ef4f10" size="lg" color="white" width="200px">Ver Todos</Button>
            </Flex>
        </Flex>

    );

}

export default SeccionFinal;