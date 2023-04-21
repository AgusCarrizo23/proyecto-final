
import React from 'react'
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import Hero from './components/Hero/index';
import Navbar from './components/Napvar';
import PortfolioCards from './components/Portfolio-cards';
import PricesCard from './components/Prices-card/index';
import SeccionFinal from './components/Seccion-final';
import ServiceCards from './components/Service-cards';
import Testimonials from './components/Testimonials';
import { ChakraProvider } from '@chakra-ui/react';

function App() {

  return (
    <>
      <ChakraProvider>  
        <Hero></Hero>
        <ServiceCards />
        <PortfolioCards />
        <PricesCard />
        <Testimonials />
        <SeccionFinal />
        <Formulario />
        <Footer></Footer>
      </ChakraProvider>
    </>
  );
}

export default App;
