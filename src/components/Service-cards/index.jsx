import React from "react";
import { Container, Heading, Flex, Box, Button} from '@chakra-ui/react';
import CardServiceComponent from "./CardService";
import { 
    faDesktop,
    faInfoCircle,
    faDisplay,
    faPaintBrush,
    faHouseLaptop,
    faComputer
  } from "@fortawesome/free-solid-svg-icons";






function ServiceCards() {

    return (
        <Flex display="flex" flexDirection="column" bgColor="#060606" height="xl" width="full" marginTop="6%">
            <Container color="white" textAlign="center" marginTop="3%">
                <Heading>Our Services</Heading>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est neque debitis doloribus, quam iste corporis in quis tempore illum possimus esse. Iure sunt perferendis quia sapiente, eligendi quam repellat. Nesciunt!
            </Container>
            <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" >
                <Box display="flex" flexDirection="row" justifyContent="space-between" width="70%" padding="10">
                    <CardServiceComponent
                        titulo="Web Design"
                        icon={faDesktop} />
                    <CardServiceComponent
                        titulo="Analytical Abilities"
                        icon={faInfoCircle}/>
                    
                    
                    <CardServiceComponent
                        titulo="Web Depelopement"
                        icon={faDisplay} />
                    
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="space-between" width="70%" padding="10">
                    <CardServiceComponent
                        titulo="Graphic Design"
                       icon={faPaintBrush}/>
                    
                    <CardServiceComponent
                        titulo="aplication"
                        icon={faHouseLaptop}/>
                    
                    <CardServiceComponent
                        titulo="Problem Solving"
                         icon={faComputer} />
                    
                </Box>
                <Button colorScheme="#060606" bg="#ef4f10" size="lg" mr={4}>welcome</Button>
            </Box>

        </Flex>
    );

}

export default ServiceCards;