import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { useLocation } from 'react-router-dom';
import AppBar from '../components/Surfaces/AppBar';
import { Outlet } from "react-router-dom";
import {ErrorBoundary} from '../errors/ErrorBandary'
import BottomNavBar from '../components/Navigation/BottomNavBar';
import Carousel from '../components/Navigation/Carousel'
import {sliderItems} from '../utils'


const CarouselBox = () => (
    <Box sx={{  m: 0, p: 0}}>
    <Carousel 
    height= "80vh"
    items={sliderItems} 
    animation="slide" 
    interval={5000}
    stopAutoPlayOnHover={false}
    />
  </Box>
)

export default function AppLayout(props) {

  const location = useLocation()

  return (
    <React.Fragment>
      <CssBaseline />
      {/* AppBar */}
      <AppBar /> 
      {/* The main app contents goes here */}
      <Container maxWidth="xl">
        {location.pathname === "/app" ? <CarouselBox /> : null }
        <Box>
          <ErrorBoundary>
              {props.children}
              <Outlet />
          </ErrorBoundary>
        </Box>
      </Container>
      {/* BottomNavBar */}
      <BottomNavBar />
    </React.Fragment>
  );
}

