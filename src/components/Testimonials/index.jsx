import React, { useState } from "react";
import {
    Heading,
    Flex,
    Text,
    Button,
    Box
} from "@chakra-ui/react";
import CardTestimonios from "./cardExample";
import AvatarIcon2 from '../../assets/images/avatar/myAvatar2.svg'
import AvatarIcon3 from '../../assets/images/avatar/myAvatar 3.svg'
import AvatarIcon from '../../assets/images/avatar/myAvatar.svg'

function Testimonials() {
    const loremExample =
        "Lorem ipsum dolor molestias reprehenderit pariatur nobis! Est error aliquid, delectus dolore vitae tempora repudiandae praesentium dicta et ullam aut autem aperiam enim.";
    const [descripcion, setDescipcion] = useState(loremExample);
    const [nombre, setNombre] = useState("Gonzalo Herrera");
    const [ubicacion, setUbicacion] = useState("Toronto");
    const [activeIndex, setActiveIndex] = useState(0);
    const [avatar, setAvatar] = useState(AvatarIcon)


    const handleChangeTestimonial = (index, nombre, ubicacion, descripcion, avatar) => {
        setActiveIndex(index);
        setNombre(nombre);
        setUbicacion(ubicacion);
        setDescipcion(descripcion);
        setAvatar(avatar)
    };

    return (
        <Flex
            bgColor="#060606"
            align="center"
            justify="space-between"
            justifyContent="center"
            py={16}
            flexDirection="column"
            height="xl"
        >
            <Flex
                display="flex"
                justifyContent="space-between"
                width="80%"
                marginTop="3%"
                marginBottom="40px"
            >
                <Box
                    bgColor="#060606"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                >
                    <Box marginTop="15%">
                        <Text color="white" fontSize="1rem">
                            Testimonios
                        </Text>
                        <Heading fontSize="3rem" color="white">
                            Opiniones sobre mi
                        </Heading>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Button
                            bgColor="transparent"
                            color={activeIndex === 0 ? "orange" : "grey"}
                            size="lg"
                            mr={4}
                            onClick={() =>
                                handleChangeTestimonial(
                                    0,
                                    "Gonzalo Herrera",
                                    "Toronto, USA",
                                    loremExample,
                                    AvatarIcon
                                )
                            }
                        >
                            ●
                        </Button>
                        <Button
                            bgColor="transparent"
                            color={activeIndex === 1 ? "orange" : "grey"}
                            size="lg"
                            mr={4}
                            onClick={() =>
                                handleChangeTestimonial(
                                    1,
                                    "Gerardo Vidal",
                                    "Belin, Alemania",
                                    loremExample,
                                    AvatarIcon2
                                )
                            }
                        >
                            ●
                        </Button>
                        <Button
                            bgColor="transparent"
                            color={activeIndex === 2 ? "orange" : "grey"}
                            size="lg"
                            mr={4}
                            onClick={() =>
                                handleChangeTestimonial(
                                    2,
                                    "Frank Tompson",
                                    "Paris, Francia",
                                    loremExample,
                                    AvatarIcon3
                                )
                            }
                        >
                            ●
                        </Button>
                    </Box>
                </Box>
                <Box marginRight="4%">
                    <CardTestimonios
                        descripcion={descripcion}
                        nombre={nombre}
                        ubicacion={ubicacion}
                        avatar={avatar}
                    ></CardTestimonios>
                </Box>
            </Flex>
        </Flex>
    );
}

export default Testimonials;
