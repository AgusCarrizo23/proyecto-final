import { useState } from "react";
import {
   Box,
   FormControl,
   FormLabel,
   Input,
   Textarea,
   Button,
   Flex,
   Heading,
   Image
} from "@chakra-ui/react";
import ImgForm from '../../assets/images/formulario/ImgForm.jpg'
import TelegramIcon from '@mui/icons-material/Telegram';



function Formulario() {
   const [nombre, setNombre] = useState("");
   const [email, setEmail] = useState("");
   const [asunto, setAsunto] = useState("");
   const [mensaje, setMensaje] = useState("");




   return (


      <Flex display="flex" flexDirection="column" bgColor="#060606" height="xl">
         <Box position="relative" height="70px" width="full" mx="auto">
            <Image src={ImgForm} height="xl" width="80%" mx="auto" borderRadius=" 100px 15px 15px 15px" marginTop="-2%" />
            <Box position="absolute" top="0" left="0" bottom="0" right="0" zIndex="1" >
               <Heading textAlign="center" color="#ef4f10">Déjame tu correo para recibir más info!</Heading>
               <Box maxWidth="500px" mx="auto" bgColor="#060606" color="white" width="90%"  borderRadius=" 30px 18px 18px 18px" marginTop="2%">
                  <form action="https://formsubmit.co/agustina.carrizo2012@gmail.com" method="POST">
                     <FormControl id="nombre" isRequired marginLeft="2%" marginRight="14%" paddingTop="11px" paddingRight="4%">
                        <FormLabel>Nombre</FormLabel>
                        <Input
                           type="text"
                           placeholder="Ingresa tu nombre"
                           value={nombre}
                           onChange={(event) => setNombre(event.target.value)}
                           name="nombre"
                           bgColor="white"
                           color="black"
                        />
                     </FormControl>
                     <FormControl id="email" isRequired marginTop="16px" marginLeft="2%" paddingRight="4%">
                        <FormLabel>Email</FormLabel>
                        <Input
                           type="email"
                           placeholder="Ingresa tu email"
                           value={email}
                           onChange={(event) => setEmail(event.target.value)}
                           name="email"
                           bgColor="white"
                           color="black"
                        />
                     </FormControl>
                     <FormControl id="asunto" isRequired marginTop="16px"marginLeft="2%" paddingRight="4%">
                        <FormLabel>Asunto</FormLabel>
                        <Input
                           type="text"
                           placeholder="Ingresa el asunto"
                           value={asunto}
                           onChange={(event) => setAsunto(event.target.value)}
                           name="asunto"
                           bgColor="white"
                           color="black"
                        />
                     </FormControl>
                     <FormControl id="mensaje" isRequired marginTop="16px"marginLeft="2%"paddingRight="4%">
                        <FormLabel>Mensaje</FormLabel>
                        <Textarea
                           placeholder="Ingresa tu mensaje"
                           value={mensaje}
                           onChange={(event) => setMensaje(event.target.value)}
                           name="mensaje"
                           bgColor="white"
                           color="black"
                           
                        />
                     </FormControl>
                     <Button bgColor="#ef4f10" marginTop="16px" type="submit"marginLeft="40%" marginBottom="2%" >
                        Enviar
                     </Button>
                     <input type="hidden" name="_next" value="http://localhost:5173" />
                     <input type="hidden" name="_captcha" value="false" />
                  </form>
               </Box>
            </Box>
         </Box>
      </Flex>

   );

}


export default Formulario;