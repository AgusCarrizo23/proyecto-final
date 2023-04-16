import React from "react";
import { Flex } from '@chakra-ui/react'
import UpComponent from "./upComponent";
import DownComponent from "./downComponent";


function Footer() {
    return (
        <Flex flexDirection="column">
            <UpComponent />
            <DownComponent />
        </Flex>
    );
}

export default Footer;