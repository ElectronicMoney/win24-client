import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';




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






function ColorGamePad() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <GameItem>
            <Fab 
                variant="extended" 
                color="success" 
                aria-label="add" 
                sx={{pl:3, pr:3, fontWeight: 600}} 
                onClick={()=>console.log("GREEN")}
            >
                Green
            </Fab>
        </GameItem>
      </Grid>
      <Grid item xs={4}>
        <GameItem>
            <Fab 
                variant="extended" 
                color="primary" 
                aria-label="add" 
                sx={{pl:3, pr:3, fontWeight: 600, backgroundColor: "#b518c4"}} 
                onClick={()=>console.log("VIOLET")}>
                Violet
            </Fab>

        </GameItem>
      </Grid>
      <Grid item xs={4}>
        <GameItem>
            <Fab 
                variant="extended" 
                color="error" 
                aria-label="add" 
                sx={{pl:4.5, pr:4.5, fontWeight: 600}} 
                onClick={()=>console.log("RED")}>
                Red
            </Fab>
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
            <Fab color="error"  onClick={() => console.log(0)}>
                <SingleColorCircle color='#fff'>
                    <DoubleColorCircle color={"#d32f2f"}>0</DoubleColorCircle>
                </SingleColorCircle>
            </Fab>
          </GameItem>
        </Grid>
        <Grid item xs={2.4}>
          <GameItem>
            <Fab color="success"  onClick={() => console.log(1)} >
                <SingleColorCircle color={"#2e7d32"}>1</SingleColorCircle>
            </Fab>
          </GameItem>
        </Grid>
        <Grid item xs={2.4}>
          <GameItem>
            <Fab color="error"  onClick={() => console.log(2)} >
                <SingleColorCircle color={"#d32f2f"}>2</SingleColorCircle>
            </Fab>
          </GameItem>
        </Grid>
        <Grid item xs={2.4}>
          <GameItem>
            <Fab color="success"  onClick={() => console.log(3)} >
                <SingleColorCircle color={"#2e7d32"}>3</SingleColorCircle>
            </Fab>
          </GameItem>
        </Grid>
        <Grid item xs={2.4}>
          <GameItem>
            <Fab color="error"  onClick={() => console.log(4)} >
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
            <Fab color="success" onClick={() => console.log(5)}>
                <SingleColorCircle color='#fff'>
                    <DoubleColorCircle color={"#2e7d32"}> 5 </DoubleColorCircle>
                </SingleColorCircle>
            </Fab>
          </GameItem>
        </Grid>
        <Grid item xs={2.4}>
          <GameItem>
            <Fab color="error"  onClick={() => console.log(6)} >
                <SingleColorCircle color={"#d32f2f"}>6</SingleColorCircle>
            </Fab>
          </GameItem>
        </Grid>
        <Grid item xs={2.4}>
          <GameItem>
            <Fab color="success"  onClick={() => console.log(7)} >
                <SingleColorCircle color={"#2e7d32"}>7</SingleColorCircle>
            </Fab>
          </GameItem>
        </Grid>
        <Grid item xs={2.4}>
          <GameItem>
            <Fab color="error"  onClick={() => console.log(8)} >
                <SingleColorCircle color={"#d32f2f"}>8</SingleColorCircle>
            </Fab>
          </GameItem>
        </Grid>
        <Grid item xs={2.4}>
          <GameItem>
            <Fab color="success"  onClick={() => console.log(9)} >
                <SingleColorCircle color={"#2e7d32"}>9</SingleColorCircle>
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
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button
                sx={{px:7.5, py:1.5, fontWeight: 600, backgroundColor: "#e6ce1c"}} 
                onClick={()=>console.log("BIG")}
                >
                Big
                </Button>

                <Button
                    sx={{px:7.5, py:1.5, fontWeight: 600,  backgroundColor: "#2e7d32"}} 
                    onClick={()=>console.log("SMALL")}
                >
                    Small
                </Button>
            </ButtonGroup>
          </GameItem>
        </Grid>
      </React.Fragment>
    );
}



export default function Games() {
    return ( 
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item elevation={3}>
                        <Typography component={"h1"}>Game Sliders Images here!</Typography>
                    </Item>
                </Grid>

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

                <Grid item xs={12}>
                    <Item elevation={3}>
                        <Typography component={"h2"}>Game Ressults and History!</Typography>
                    </Item>
                </Grid>

            </Grid>
        </React.Fragment>
    );
}
