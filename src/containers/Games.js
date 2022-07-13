import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ListItemText from '@mui/material/ListItemText';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { purple, red, green, yellow } from '@mui/material/colors';
import Marquee from "react-fast-marquee";
import AnnouncementIcon from '@mui/icons-material/Announcement';
import kickAudio from '../assets/audios/kick3.mp3'
import Tab from '../components/Navigation/Tab'
import { formatMoney } from '../utils';
import Bg from "../assets/images/3.png"


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



const SpanTimmer = styled("span")(() => ({
  display:"inline-block",
  paddingRight: "4px",
  paddingLeft: "4px",
  backgroundColor: "green",
  borderRadius: "2px",
  marginRight: "4px",
  fontSize: "24px",
  fontWeight: 600
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
        { period: 2022071011032, winning_number: 2, winning_size: "SMALL", winning_color: "RED"},
        { period: 2022071011031, winning_number: 5, winning_size: "BIG", winning_color: "VIOLET,GREEN"},
        { period: 2022071011030, winning_number: 8, winning_size: "BIG", winning_color: "GREEN"},
        { period: 2022071011029, winning_number: 3, winning_size: "SMALL", winning_color: "RED"},
        { period: 2022071011028, winning_number: 2, winning_size: "SMALL", winning_color: "RED"},
        { period: 2022071011027, winning_number: 4, winning_size: "SMALL", winning_color: "RED"},
        { period: 2022071011026, winning_number: 8, winning_size: "BIG", winning_color: "GREEN"},
        { period: 2022071011025, winning_number: 0, winning_size: "SMALL", winning_color: "VIOLET,RED"},
        { period: 2022071011024, winning_number: 3, winning_size: "SMALL", winning_color: "RED"},
        { period: 2022071011023, winning_number: 3, winning_size: "SMALL", winning_color: "RED"},
    ];

    const bets = [
       { created_at: 2022071011032, bet_amount: 200.00, status: "PENDING"},
       { created_at: 2022071011032, bet_amount: 250.00, status: "WIN"},
       { created_at: 2022071011032, bet_amount: 100.00, status: "WIN"},
       { created_at: 2022071011032, bet_amount: 1500.00, status: "LOSS"},
       { created_at: 2022071011032, bet_amount: 3000.00, status: "LOSS"},
    ]

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
              <Grid item xs={12} md={4}>
                <Item elevation={3}>
                  <Grid container spacing={2}>

                    <Grid item xs={7}>
                       <AccountBalanceWalletIcon color="primary"
                          sx={{fontSize: "46px"}}
                        /> 
                        <ListItemText primary="Total Wallet Balance:"/> 
                    </Grid>

                    <Grid item xs={5} sx={{textAlign: "right"}}>
                        <Typography variant="h5" component={"h2"} sx={{fontWeight: 600, color:"green", ml:2}}>
                          {formatMoney(25000.50)}
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Fab variant="extended" size="small" color="warning" aria-label="withdraw"
                        sx={{px: 4}}>
                          Withdraw
                        </Fab>
                    </Grid>

                    <Grid item xs={6} sx={{textAlign: "right"}}>
                         <Fab variant="extended" size="small" color="primary" aria-label="recharge"
                         sx={{px: 4}}>
                          Recharge
                        </Fab>
                    </Grid>

                  </Grid>
                </Item>
               
              </Grid>

              <Grid item xs={12} md={4}>
                  <Item elevation={3}>
                      <Typography variant="h5" component={"h5"} sx={{textAlign: "center", fontWeight:500, color:"green"}}>
                        <AnnouncementIcon color="primary" /> LATEST ANNOUNCEMENT!
                      </Typography>
                      <Typography component={"div"}>
                        
                        <Marquee>
                            Invite your friends and Get 5% of their initial deposit!
                        </Marquee>
                      </Typography>
                  </Item>
              </Grid>

              <Grid item xs={12} md={4}>
                <Item elevation={3} 
                sx={{
                  backgroundImage: `linear-gradient(to left top, rgba(125, 22, 116, 0.90), rgba(41, 125, 22, 0.75)), url(${Bg})`,
                  // backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: "no-repeat",
                  width: `100%`,
                  color: "#fff",
                  fontWeight: 600,
                }}
                >
                  <Grid container spacing={2}>

                    <Grid item xs={7}>
                        <Typography variant="p" component={"p"}>
                          3 Minutes
                        </Typography>
                    </Grid>

                    <Grid item xs={5} sx={{textAlign: "right"}}>
                        <Typography component={"p"}>
                          Left Time To Buy
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography component={"h2"}>
                          202245958686
                        </Typography>
                    </Grid>

                    <Grid item xs={6} sx={{textAlign: "right"}}>
                         <Typography component={"h2"}>                       
                          <SpanTimmer>0</SpanTimmer>                        
                          <SpanTimmer>2</SpanTimmer>                                                
                          <SpanTimmer>:</SpanTimmer>                        
                          <SpanTimmer>5</SpanTimmer>                        
                          <SpanTimmer>8</SpanTimmer>                        
                        </Typography>
                    </Grid>

                  </Grid>
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
