import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { purple, red, green, yellow } from '@mui/material/colors';
import kickAudio from '../assets/audios/kick3.mp3'
import Tab from '../components/Navigation/Tab'




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





export default function Games() {
  
    const handleClick = (event) => {
      const audio = new Audio(kickAudio);
      audio.play();
      const value = event.target.innerText
      console.log(value)
    }

    const games = [
        { period: 2022071011032, number: 2, size: "SMALL", color: "RED"},
        { period: 2022071011031, number: 5, size: "BIG", color: "VIOLET,GREEN"},
        { period: 2022071011030, number: 8, size: "BIG", color: "GREEN"},
        { period: 2022071011029, number: 3, size: "SMALL", color: "RED"},
        { period: 2022071011028, number: 2, size: "SMALL", color: "RED"},
        { period: 2022071011027, number: 4, size: "SMALL", color: "RED"},
        { period: 2022071011026, number: 8, size: "BIG", color: "GREEN"},
        { period: 2022071011025, number: 0, size: "SMALL", color: "VIOLET,RED"},
        { period: 2022071011024, number: 3, size: "SMALL", color: "RED"},
        { period: 2022071011023, number: 3, size: "SMALL", color: "RED"},
    ];

    const bets = []

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
                      bg={yellow[800]} 
                      hover={yellow[900]} 
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
          <Grid container spacing={2} sx={{mb:5}}>
             <Grid item xs={12}>
                    <Item elevation={3}>
                        <Typography component={"h1"}>Game Sliders Images here!</Typography>
                    </Item>
                </Grid>
          </Grid>
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

           <div style={{marginTop:20}}>
              <Tab games={games} bets={bets} />
            </div>

        </React.Fragment>
    );
}
