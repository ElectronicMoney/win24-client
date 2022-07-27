import React from 'react';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import Fab from '@mui/material/Fab';
import { Link } from 'react-router-dom';


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


const moveUp = keyframes`
  0% {
    opacity: 0.5;
    transform: translateY(100px);
  }
  80% {
    opacity: 0.75;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`;



// Heading  Primary
const HeadingPrimary = styled("h2")(({theme}) => ({
  textTransform: 'capitalize',
  color: theme.palette.grey[200],
}));

// Heading  Primary Main
const HeadingPrimaryMain = styled("span")(({theme}) => ({
  display: 'block',
  fontSize: theme.typography.h2.fontSize ,
  fontWeight: theme.typography.h2.fontWeight * 1.5,
  letterSpaacing: theme.typography.h2.letterSpacing,
  marginBottom: "30px",
  animation: `${moveInLeft} 3s ease-out`
}));

// Heading  Primary Sub
const HeadingPrimarySub = styled("span")(({theme}) => ({
  display: 'block',
  fontSize: theme.typography.subtitle1.fontSize,
  fontWeight: theme.typography.subtitle1.fontWeight * 2,
  letterSpaacing: theme.typography.subtitle1.letterSpacing,
  marginBottom: "20px",
  animation: `${moveInRight} 3s ease-out`

}));

  const CarouselButton = styled(Fab)(() => ({
    animation: `${moveUp} 3s ease-out`
  }));


const Div = styled("div")(() => ({
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
}));
  



function Item(props) {
    return (
        <Paper sx={{
              height: '100vh',
              backgroundImage: `linear-gradient(to left top, rgba(23, 23, 22, 0.5), rgba(117, 68, 12, 0.5)), url(${props.item.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: `100%`
            }}>
              <Div> 
                <HeadingPrimary>
                  <HeadingPrimaryMain>{props.item.name}</HeadingPrimaryMain>
                  <HeadingPrimarySub>{props.item.title}</HeadingPrimarySub> 
                  <HeadingPrimarySub>{props.item.description}</HeadingPrimarySub> 
                  <CarouselButton variant="extended" color='primary' to="/app/games" component={Link}>
                    Play Now!
                  </CarouselButton>
                </HeadingPrimary>
              </Div>
        </Paper>
    )
}


export default function MainCarousel(props){
    return (
        <Carousel sx={{width: "100%", height:props.height, m:0, p:0}}
        animation={props.animation || "fade"}
        interval={props.interval || 4000}
        stopAutoPlayOnHover	={props.stopAutoPlayOnHover	|| true}
        autoPlay={props.autoPlay || true}
        navButtonsAlwaysVisible={true}
        >
            {props.items.map( (item, i) => <Item key={i} item={item} /> )}
        </Carousel>
    )
}