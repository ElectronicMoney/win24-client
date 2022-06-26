import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppBar from '../components/Surfaces/AppBar';
import { Outlet } from "react-router-dom";
import {ErrorBoundary} from '../errors/ErrorBandary'
import BottomNavBar from '../components/Navigation/BottomNavBar';



export default function AppLayout(props) {

  return (
    <React.Fragment>
      <CssBaseline />
      {/* AppBar */}
      <AppBar /> 
      {/* The main app contents goes here */}
      <Container maxWidth="xl">
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

