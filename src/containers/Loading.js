import React from 'react';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
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
    width: '100vw',
    padding: 0,
    margin: 0,
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
      <React.Fragment>
        <CssBaseline />
          <Div>
              <Image src={Logo} alt='Title' loading="lazy" width={50}/>
          </Div>
      </React.Fragment>
     );
}

export default Loading;