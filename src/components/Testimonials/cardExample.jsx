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
        width={{ base: "100%", md: "495px" }}
        height={{ base: "100%", md: "300px" }}
        position="absolute"
        zIndex="1"
        marginTop="60px"
        marginLeft={{ base: "0", md: "50px" }}
      >
      </Card>
      <Box>
        <Card
          bg="#111111"
          borderRadius="xl"
          width={{ base: "100%", md: "500px" }}
          height={{ base: "100%", md: "300px" }}
          zIndex="2"
          color="white"
        >
          <Avatar
            size={{ base: "md", md: "lg" }}
            name={nombre}
            src={avatar}
            position="absolute"
            top="-3"
            left="-3"
            zIndex="1"
            marginRight={{ base: "0", md: "10px" }}
            marginBottom={{ base: "10px", md: "20px" }}
          />
          <Box
            fontSize={{ base: "sm", md: "md" }}
            paddingLeft={{ base: "5%", md: "15%" }}
            paddingTop={{ base: "20%", md: "10%" }}
            paddingRight={{ base: "5%", md: "15%" }}
          >
            {descripcion}
          </Box>
          <Box
            fontSize={{ base: "md", md: "lg" }}
            mt="4"
            paddingLeft={{ base: "5%", md: "15%" }}
            paddingRight={{ base: "5%", md: "15%" }}
          >
            {nombre}
          </Box>
          <Box
            fontSize={{ base: "sm", md: "md" }}
            paddingLeft={{ base: "5%", md: "15%" }}
            paddingRight={{ base: "5%", md: "15%" }}
          >
            {ubicacion}
          </Box>
        </Card>
      </Box>
    </Box>
  );
}

export default CardTestimonios;
