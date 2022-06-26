import * as React from 'react';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Animate from '../assets/images/animate.png'
import Button from "../components/Inputs/Button"
import HomeBg from '../assets/images/bg.jpg'




const moveInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  80% {
    transform: translateX(10px);

  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`;


const moveInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  80% {
    transform: translateX(-10px);

  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`;



// Heading  Primary
const HeadingPrimary = styled("h1")(({theme}) => ({
    textTransform: 'uppercase',
    color: theme.palette.grey[300]
  }));

// Heading  Primary Main
const HeadingPrimaryMain = styled("span")(({theme}) => ({
    display: 'block',
    fontSize: theme.typography.h1.fontSize,
    fontWeight: theme.typography.h1.fontWeight * 1.5,
    letterSpaacing: theme.typography.h1.letterSpacing,
    animation: `${moveInLeft} 2s ease-out`
  }));

// Heading  Primary Sub
const HeadingPrimarySub = styled("span")(({theme}) => ({
    display: 'block',
    fontSize: theme.typography.subtitle1.fontSize,
    fontWeight: theme.typography.subtitle1.fontWeight * 2,
    letterSpaacing: theme.typography.subtitle1.letterSpacing,
    animation: `${moveInRight} 2s ease-out`

  }));


  const HomeLink = styled(Button)(() => ({
    animation: `${moveInLeft} 2s ease-out`
  }));



const Div = styled("div")(() => ({
  display: 'flex',
  flexDirection: "column",
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
}));


export default function NotFound(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" disableGutters={true}>
        <Box
          sx={{
            height: '100vh',
            backgroundImage: `linear-gradient(to left top, rgba(27, 94, 237, 0.5), rgba(237, 27, 83, 0.25)), url(${HomeBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: `100%`,
    
          }}
        >
          <Div>
              <img src={Animate} alt='Title' loading="lazy" width={100}/>
              <HeadingPrimary>
                  <HeadingPrimaryMain>OOPS! Error 404</HeadingPrimaryMain>
                  <HeadingPrimarySub>Page Not Found!</HeadingPrimarySub> 
              </HeadingPrimary>
              <HomeLink variant="contained" color="primary">Go Home</HomeLink>          
          </Div>
        </Box>
      </Container>
    </React.Fragment>
  );
}
