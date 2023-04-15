import React from "react";
import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';



function PricesCard() {
  return (
    <Center py={6}>
      <Box
        maxW={'160px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Stack spacing={0} align={'center'} mt={3}>
          <Text fontWeight={500} fontSize={'2xl'} fontFamily={'body'}>
            Plan Básico
          </Text>
          <Text color={'gray.500'} fontSize={'sm'}>
            Ideal para comenzar
          </Text>
        </Stack>

        <Stack direction={'row'} justify={'center'} mt={5}>
          <Box p={2} textAlign={'center'}>
            <Text fontSize={'3xl'} fontWeight={600}>
              $50
            </Text>
            <Text fontSize={'sm'} color={'gray.500'}>
              / mes
            </Text>
          </Box>
        </Stack>

        <Box p={6}>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              5 cuentas de correo
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              2 GB de almacenamiento
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              Soporte por correo electrónico
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              Acceso a la plataforma web
            </ListItem>
          </List>

          <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
          >
            Contratar
          </Button>
        </Box>
      </Box>
    </Center>
  );
}

export default PricesCard;
