import React from 'react';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import {ErrorBoundary} from '../errors/ErrorBandary'
import Logo  from '../assets/images/logo.png'

const HeartBeat = keyframes`
    0% {opacity: 0.25; transform: scale(1);}
    25% {opacity: 0.45; transform: scale(1.3);}
    50% {opacity: 0.65; transform: scale(1.4);}
    75% {opacity: 0.85; transform: scale(1.3);}
    100% {opacity: 1.0; transform: scale(1);}
`;


const Div = styled("div")(({theme}) => ({
    display: 'flex',
    height: '100vh',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    background: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  }));
  

  const Image = styled("img")(() => ({
    animation: `${HeartBeat} 1.5s linear infinite;`,
    borderRadius: '10px',
  }));



function Loading() {
    return ( 
      <ErrorBoundary>
        <Stack sx={{ width: '100%', color: 'grey.500'}}>
            <LinearProgress color="success" />
        </Stack>
        <Div>
            <Image src={Logo} alt='Title' loading="lazy" width={50}/>
        </Div>
      </ErrorBoundary>
     );
}

export default Loading;