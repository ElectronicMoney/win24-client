import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { purple, red, green, lime } from '@mui/material/colors';
import kickAudio from '../../assets/audios/kick3.mp3'
import Dialog from "../../components/Feedback/Dialog"
import BetForm from './BetForm'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

const GameItem = styled("div")(() => ({
    textAlign: 'center',
    padding: 0,
    margin:0
}));


const SingleColorCircle = styled("div")(({color}) => ({
    display: "inline-flex;",
    alignItems: "center;" ,
    justifyContent: "center;",
    fontSize: "24px",
    fontWeight: 600,
    borderRadius: "100%",
    background :`${color}`,
    width: "50px",
    height: "50px",
    border: `2px solid white`
}));


const DoubleColorCircle = styled("span")(({color}) => ({
    display: "inline-flex;",
    alignItems: "center;" ,
    justifyContent: "center;",
    fontSize: "24px",
    fontWeight: 600,
    borderRadius: "23px;",
    borderRightColor: "#b518c4",
    borderTopColor:  color,    
    borderBottomColor: "#b518c4",
    borderLeftColor: color,
    borderWidth: "23px;",
    borderStyle: "solid;",
    height: "0;",
    width:"0",
}));


const CustomFab = styled(Fab)(({ theme, bg, hover }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: `${bg}`,
  fontSize: "20px",
  fontWeight: 600,
  addingLeft: 10,
  paddingRight: 10,
  '&:hover': {
    backgroundColor: `${hover}`,
  },
}));

const CustomButton = styled(Button)(({ theme, bg, pl, pr, hover }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: `${bg}`,
  fontSize: "20px",
  fontWeight: 600,
  addingLeft: 20,
  paddingLeft: pl,
  paddingRight: pr,
  '&:hover': {
    backgroundColor: `${hover}`,
  },
}));


function GamePad({gameId}) {

    const [open, setOpen] = React.useState(false);

    const [display, setDisplay] = React.useState({
     color: "#4a148c",
     title: "Color Prediction Game"
    });

    const [bet, setBet] = React.useState({
      duration : 3,
      is_color: false,
      is_number: false,
      is_size: false,
      color: "",
      number: null,
      size: ""
    });


    const handleDisplay = (data) => {

      let newColor = ""
      let newTitle = ""

      let newBet = {
          duration : 3,
          bet_amount: 1,
          is_color: false,
          is_number: false,
          is_size: false,
          color: "",
          number: null,
          size: ""
      }

      if (parseInt(data) === 0 || parseInt(data) === 5) {
        newColor = "#ab47bc"
        newTitle = `Your Prediction is Number: ${data}`
        newBet.is_number = true
        newBet.number = parseInt(data)
        setBet(newBet)
      }
      
      if ( [1,3,7,9].includes( parseInt(data))) {
        newColor = "#43a047"
        newTitle = `Your Prediction is Number: ${data}`
        newBet.is_number = true
        newBet.number = parseInt(data)
        setBet(newBet)
      }

      if ( [2,4,6,8].includes( parseInt(data))) {
        newColor = "#e53935"
        newTitle = `Your Prediction is Number: ${data}`
        newBet.is_number = true
        newBet.number = parseInt(data)
        setBet(newBet)
      }

      if (data === "GREEN") {
        newColor = "#43a047"
        newTitle = `Your Prediction is Color: ${data}`
        newBet.is_color = true
        newBet.color = data
        setBet(newBet)
      }

      if (data === "RED") {
        newColor = "#e53935"
        newTitle = `Your Prediction is Color: ${data}`
        newBet.is_color = true
        newBet.color = data
        setBet(newBet)
      }

      if (data === "VIOLET") {
        newColor = "#ab47bc"
        newTitle = `Your Prediction is Color: ${data}`
        newBet.is_color = true
        newBet.color = data
        setBet(newBet)
      }


      if (data === "BIG") {
        newColor = "#43a047"
        newTitle = `Your Prediction is Size: ${data}`
        newBet.is_size = true
        newBet.size = data
        setBet(newBet)
      }

      if (data === "SMALL") {
        newColor = "#827717"
        newTitle = `Your Prediction is Size: ${data}`
        newBet.is_size = true
        newBet.size = data
        setBet(newBet)
      }

      setDisplay({
        color: newColor,
        title: newTitle
      })
    }

    const handleClick = (event) => {
      const audio = new Audio(kickAudio);
      audio.play();
      const value = event.target.innerText
      handleDisplay(value)
      handleClickOpen()
    }

    const handleClickOpen = () => {
      setOpen(true);
    };


    const handleClose = (event, reason) => {
      // "escapeKeyDown", "backdropClick"
      if(reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
        // Set 'open' to false, however you would do that with your particular code.
        setOpen(false);
      }

    };


    const dialogActions = () => {
      return (
          <Grid container spacing={2} sx={{my:2}}>
            <Grid item xs={12} sx={{textAlign: "right"}}>
                <Fab 
                  variant="circle" 
                  size="small" 
                  color="error" 
                  aria-label="bet"
                  onClick={handleClose}
                  >
                    <CloseIcon />
                  </Fab>
            </Grid>
        </Grid>
      )
    }

    function ColorGamePad() {
      return (
        <React.Fragment>
          <Grid item xs={4}>
            <GameItem>
                <CustomFab 
                    variant="extended" 
                    color="success" 
                    aria-label="green" 
                    bg={green[800]}
                    hover={green[900]}
                    onClick={e=>handleClick(e)}
                >
                    Green
                </CustomFab>
            </GameItem>
          </Grid>
          <Grid item xs={4}>
            <GameItem>
                <CustomFab 
                    variant="extended" 
                    color="primary" 
                    aria-label="purple"  
                    bg={purple[500]}
                    hover={purple[700]}
                    onClick={e=>handleClick(e)}
                    >
                    Violet
                </CustomFab>

            </GameItem>
          </Grid>
          <Grid item xs={4}>
            <GameItem>
                <CustomFab 
                    variant="extended" 
                    color="error" 
                    aria-label="red" 
                    sx={{pl:4, pr:4}} 
                    red={red[800]}
                    hover={red[900]}
                    onClick={e=>handleClick(e)}>
                    Red
                </CustomFab>
            </GameItem>
          </Grid>

        </React.Fragment>
      );
    }

    function ColorGameNumberPadOne() {
        return (
          <React.Fragment>
            <Grid item xs={2.4}>
              <GameItem>
                <Fab 
                  color="error"  
                  onClick={e=>handleClick(e)}
                >
                    <SingleColorCircle color='#fff'>
                        <DoubleColorCircle color={"#d32f2f"}>0</DoubleColorCircle>
                    </SingleColorCircle>
                </Fab>
              </GameItem>
            </Grid>
            <Grid item xs={2.4}>
              <GameItem>
                <Fab 
                  color="success"
                  onClick={e=>handleClick(e)}
                >
                    <SingleColorCircle color={"#2e7d32"}>1</SingleColorCircle>
                </Fab>
              </GameItem>
            </Grid>
            <Grid item xs={2.4}>
              <GameItem>
                <Fab  
                  color="error"  
                  onClick={e=>handleClick(e)}
                >
                    <SingleColorCircle color={"#d32f2f"}>2</SingleColorCircle>
                </Fab>
              </GameItem>
            </Grid>
            <Grid item xs={2.4}>
              <GameItem>
                <Fab 
                color="success"  
                  onClick={e=>handleClick(e)}
                >
                    <SingleColorCircle color={"#2e7d32"}>3</SingleColorCircle>
                </Fab>
              </GameItem>
            </Grid>
            <Grid item xs={2.4}>
              <GameItem>
                <Fab 
                  color="error"  
                  onClick={e=>handleClick(e)}
                >
                    <SingleColorCircle color={"#d32f2f"}>4</SingleColorCircle>
                </Fab>
              </GameItem>
            </Grid>
      
          </React.Fragment>
        );
    }
      
    function ColorGameNumberPadTwo() {
        return (
          <React.Fragment>
            <Grid item xs={2.4}>
              <GameItem>
                <Fab 
                  color="success"
                  onClick={e=>handleClick(e)}
                >
                    <SingleColorCircle color='#fff'>
                        <DoubleColorCircle color={"#2e7d32"}> 5 </DoubleColorCircle>
                    </SingleColorCircle>
                </Fab>
              </GameItem>
            </Grid>
            <Grid item xs={2.4}>
              <GameItem>
                <Fab color="error"  
                  onClick={e=>handleClick(e)}
                >
                    <SingleColorCircle color={"#d32f2f"}>6</SingleColorCircle>
                </Fab>
              </GameItem>
            </Grid>
            <Grid item xs={2.4}>
              <GameItem>
                <Fab 
                  color="success" 
                  onClick={e=>handleClick(e)}
                >
                    <SingleColorCircle color={"#2e7d32"}>7</SingleColorCircle>
                </Fab>
              </GameItem>
            </Grid>
            <Grid item xs={2.4}>
              <GameItem>
                <Fab color="error" 
                  onClick={e=>handleClick(e)}
                >
                    <SingleColorCircle color={"#d32f2f"}>8</SingleColorCircle>
                </Fab>
              </GameItem>
            </Grid>
            <Grid item xs={2.4}>
              <GameItem>
                <Fab color="success" 
                  onClick={e=>handleClick(e)}
                >
                    <SingleColorCircle  color={"#2e7d32"}>9</SingleColorCircle>
                </Fab>
              </GameItem>
            </Grid>
      
          </React.Fragment>
        );
    }

    function ColorGameNumberPadSize() {
        return (
          <React.Fragment>
            <Grid item xs={12}>
              <GameItem>
                <ButtonGroup variant="contained" aria-label="outlined primary button group"
                 sx={{ 
                      borderRadius: "30px"
                    }}
                >
                    <CustomButton
                    bg={green[800]} 
                    hover={green[900]} 
                    onClick={e=>handleClick(e)}
                    pl={65}
                    pr={65}
                    sx={{ 
                      borderTopLeftRadius: "30px",
                      borderBottomLeftRadius: "30px",
                    }}
                    >
                    Big
                    </CustomButton>

                    <CustomButton
                      bg={lime[800]} 
                      hover={lime[900]} 
                      onClick={e=>handleClick(e)}
                      pl={50}
                      pr={50}
                      sx={{ 
                      borderTopRightRadius: "30px",
                      borderBottomRightRadius: "30px",
                    }}
                    >
                        Small
                    </CustomButton>
                </ButtonGroup>
              </GameItem>
            </Grid>
          </React.Fragment>
        );
    }

    return ( 
        <React.Fragment>
            <Item elevation={3}>
                <Grid container spacing={2}>    
                  <Grid container item columnSpacing={2} rowSpacing={4}>
                      <ColorGamePad />
                  </Grid>

                  <Grid container item columnSpacing={2} rowSpacing={4}>
                      <ColorGameNumberPadOne />
                  </Grid>

                  <Grid container item columnSpacing={2} rowSpacing={4}>
                      <ColorGameNumberPadTwo />
                  </Grid>

                  <Grid container item columnSpacing={2} rowSpacing={4}>
                      <ColorGameNumberPadSize />
                  </Grid>
                </Grid>
            </Item>

            <Dialog 
              color={display.color}
              title={display.title}
              dialogActions={dialogActions}
              handleClose={handleClose}
              open={open}
            >
              <Typography variant='h5' component="h5" 
              sx={{mb:5}}
              >
                Enter the Amount you want to bet; then place your bet!
              </Typography>
              <BetForm  betData={{...bet, game_id:gameId}} />
            </Dialog>
        </React.Fragment>
    );
}

export default GamePad;