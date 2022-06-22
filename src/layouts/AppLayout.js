import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Drawer from "../components/Navigation/Drawer"
import BottomNav from '../components/Navigation/BottomNav';


export default function AppLayout(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" disableGutters ={true}>
        <Box sx={{ height: '100vh'}}>
            <Drawer>
                {props.children}
            </Drawer>
            
            {/* Bottom Navigation */}
            <BottomNav />
        </Box>
      </Container>


    </React.Fragment>
  );
}
