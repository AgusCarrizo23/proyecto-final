import { Box, Card, Avatar } from "@chakra-ui/react";

function CardTestimonios(props) {
  const { descripcion, nombre, ubicacion, avatar } = props;

  return (
    <Box position="relative" >
      <Card
        bg="#060606"
        border="1px solid white"
        color="white"
        padding="4"
        borderRadius="xl"
        width="495px"
        height="300px"
        position="absolute"
        zIndex="1"
        marginTop="60px"
        marginLeft="50px"
      >
      </Card>
      <Box>
        <Card
          bg="#111111"
          borderRadius="xl"
          width="500px"
          height="300px"
          zIndex="2"
          color="white"
        >
          <Avatar
         size="lg"
         name={nombre}
         src={avatar}
         position="absolute"
         top="-3"
         left="-3"
         zIndex="1"
         marginRight="10px"
         marginBottom="20px"
          />
          <Box fontSize="md" paddingLeft="15%" paddingTop="10%" paddingRight="15%">{descripcion}</Box>
          <Box fontSize="lg" mt="4" paddingLeft="15%" paddingRight="15%">{nombre}</Box>
          <Box mt="4" paddingLeft="15%" paddingRight="15%">{ubicacion}</Box>
        </Card>
      </Box>
    </Box>
  );
}

export default CardTestimonios;