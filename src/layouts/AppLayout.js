import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Drawer from "../components/Navigation/Drawer"
import BottomNav from '../components/Navigation/BottomNav';
import {ErrorBoundary} from '../errors/ErrorBandary'



export default function AppLayout(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" disableGutters ={true}>
        <Box sx={{ height: '100vh', mb: 65}}>

            <ErrorBoundary>
              <Drawer>
                  {props.children}
              </Drawer>
            </ErrorBoundary>
        </Box>
        {/* Bottom Navigation */}
        <ErrorBoundary>
          <BottomNav />
        </ErrorBoundary>
      </Container>


    </React.Fragment>
  );
}
