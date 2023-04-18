import React, { useState } from "react";
import {
    Container,
    Heading,
    Flex,
    Text,
    Button,
    Box
} from "@chakra-ui/react";
import CardTestimonios from "./cardExample";

function Testimonials() {
    const loremExample =
        "Lorem ipsum dolor molestias reprehenderit pariatur nobis! Est error aliquid, delectus dolore vitae tempora repudiandae praesentium dicta et ullam aut autem aperiam enim.";
    const [descripcion, setDescipcion] = useState(loremExample);
    const [nombre, setNombre] = useState("Gonzalo Herrera");
    const [ubicacion, setUbicacion] = useState("Toronto");
    const [activeIndex, setActiveIndex] = useState(0);

    const handleChangeTestimonial = (index, nombre, ubicacion, descripcion) => {
        setActiveIndex(index);
        setNombre(nombre);
        setUbicacion(ubicacion);
        setDescipcion(descripcion);
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
                                    loremExample
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
                                    loremExample
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
                                    loremExample
                                )
                            }
                        >
                            ●
                        </Button>
                    </Box>
                </Box>
                <Box>
                    <CardTestimonios
                        descripcion={descripcion}
                        nombre={nombre}
                        ubicacion={ubicacion}
                    ></CardTestimonios>
                </Box>
            </Flex>
        </Flex>
    );
}

export default Testimonials;
