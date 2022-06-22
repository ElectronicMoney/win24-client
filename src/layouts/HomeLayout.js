import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


export default function AppLayout(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" disableGutters	={true}>
        <Box sx={{ 
            height: '100vh',
            backgroundImage: `linear-gradient(to left top, rgba(27, 94, 237, 0.5), rgba(237, 27, 83, 0.25)), url("/images/bg.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            {props.children}
        </Box>
      </Container>
    </React.Fragment>
  );
}
