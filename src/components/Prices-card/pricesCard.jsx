import React from "react";
import {
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Divider
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';




function PricesCardComponent(props) {
  return (
    <Center py={6}>
      <Box
        maxW={'250px'}
        w={'full'}
        maxH={'450px'}
        h={'full'}
        boxShadow={'2xl'}
        bgColor="#111111"
        rounded={'md'}
        overflow={'hidden'}
        padding="30px"
        marginBottom="3%"
      >
        <Stack spacing={0} align={'center'}>
          <Text fontWeight={500} fontSize={'2xl'} fontFamily={'body'} color="white">
          {props.plan} 
          </Text>
        </Stack>
        <Stack direction={'row'} justify={'center'} mt={5}>
          <Box p={2} textAlign={'center'}>
            <Text fontSize={'5xl'} fontWeight={600} color="#ef4f10">
              {props.precio}
            </Text>
          </Box>
        </Stack>
        <Divider />
        <Stack direction={'row'} justify={'center'} mt={5}>
          <Box p={2} textAlign={'center'}>
            <Text fontSize={'lg'} fontWeight={600} color="white">
              {props.descripcion}
            </Text>
          </Box>
        </Stack>
        <Button 
          w={'full'}
          h="50px"
          mt={8}
          bg="#111111"
          border="1px solid #ef4f10"
          color={'white'}
          rounded={'md'}
          _hover={{
            bgColor: "#ef4f10"
          }}
          >
          <Text fontWeight={500} fontSize={'xl'} fontFamily={'body'} color="white">
            Select Plan
          </Text>
        </Button>
      </Box>
    </Center>
  );
}

export default PricesCardComponent;
