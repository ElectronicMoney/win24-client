import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { styled } from '@mui/material/styles';
import {  green } from '@mui/material/colors';
import CountDown from "../../components/DataDisplay/CountDown"
import Bg from "../../assets/images/bg.jpg"
import CountDownAudio from '../../assets/audios/countdown-01.mp3'
import { Typography } from '@mui/material';




const SpanTimmer = styled("span")(() => ({
  display:"inline-block",
  paddingLeft: "15px",
  paddingRight: "30px",
  backgroundColor: green[900],
  borderRadius: "10px",
  marginRight: "10px",
  marginLeft: "10px",
  fontSize: "150px",
  fontWeight: 600
}));



export default function CountDownTimer({open, handleClose}) {


  const Renderer = ({ minutes, seconds }) => {
    return (
        <>
            <SpanTimmer>
              {seconds.toString().length > 1 ? seconds.toString()[0]: 0}
            </SpanTimmer>  
            <SpanTimmer>
              {seconds.toString().length > 1 ? seconds.toString()[1]: seconds}
            </SpanTimmer> 
        </>                     
    )
  }



  const playAudio = () => {
    // handleClickOpen()
    const audio = new Audio(CountDownAudio);
    audio.play();
  }

  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth="sm"
        open={open}
        onClose={(event, reason) => handleClose(event, reason)}
        disableEscapeKeyDown
      >
        <DialogContent sx={{   
          
          // backgroundColor: `rgba(0,0,0,0.9)`, 
          backgroundImage: `linear-gradient(to left top, rgba(125, 22, 116, 0.50), rgba(41, 125, 22, 0.5)), url(${Bg})`,
          backgroundPosition: 'center',
          backgroundRepeat: "no-repeat",
          backgroundSize: 'cover',
          textAlign:"center"
          }}>
            <Typography component="div">
                <CountDown
                  date={Date.now() }
                  renderer={Renderer}
                  dateIncrement={15000}
                  onTick={playAudio}
                  onComplete={handleClose}
                />,
            </Typography>
          
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
