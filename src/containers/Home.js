import React from 'react';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import { Link } from "react-router-dom";
import {ErrorBoundary} from '../errors/ErrorBandary'
import HomeLayout from '../layouts/HomeLayout'
import Button from "../components/Inputs/Button"

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


  const LoginButton = styled(Button)(() => ({
    animation: `${moveInRight} 2s ease-out`
  }));

  const RegisterButton = styled(Button)(() => ({
    animation: `${moveInLeft} 2s ease-out`
  }));




function Home() {
    return ( 
      <ErrorBoundary>
        <HomeLayout>
            <div>
                <img src='images/icon_activi.19e63e6b.png' alt='Title' loading="lazy" width={100}/>
                <HeadingPrimary>
                    <HeadingPrimaryMain>Maganda Bet</HeadingPrimaryMain>
                    <HeadingPrimarySub>The Easiest way to earn money from your phone</HeadingPrimarySub> 
                </HeadingPrimary>
                <LoginButton 
                  variant="contained" 
                  color="secondary"
                  style={{marginRight: "25px"}}
                  to="/login" component={Link}
                >
                    Login
                </LoginButton>
                <RegisterButton 
                  variant="contained" 
                  color="primary" 
                  to="/register" 
                  component={Link}
                >
                  Register
                </RegisterButton>
            </div>
        </HomeLayout>

      </ErrorBoundary>
     );
}

export default Home;