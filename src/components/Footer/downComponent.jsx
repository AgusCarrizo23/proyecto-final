import React from "react";
import { Flex, Box, Text } from '@chakra-ui/react'


function DownComponent() {
    return (
        <Flex bgColor="#ef4f10" width={'full'} height="100px" justifyContent="center">
            <Box display="flex" justifyContent="space-between" width="80%" alignItems="center">
                <Text fontSize={'lg'} fontWeight={600} color="white">@2019 all rights rederved</Text>
                <Box display="flex" flexDirection="row" width="30%" justifyContent="space-between">
                    <Text fontSize={'lg'} fontWeight={600} color="white">@icon</Text>
                    <Text fontSize={'lg'} fontWeight={600} color="white">@icon</Text>
                    <Text fontSize={'lg'} fontWeight={600} color="white">@icon</Text>
                    <Text fontSize={'lg'} fontWeight={600} color="white">@icon</Text>
                    <Text fontSize={'lg'} fontWeight={600} color="white">@icon</Text>
                </Box>
            </Box>
        </Flex>
    );
}

export default DownComponent;