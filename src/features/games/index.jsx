import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Marquee from "react-fast-marquee";
import AnnouncementIcon from '@mui/icons-material/Announcement';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { formatMoney, SSE_URL } from '../../utils';
import Bg from "../../assets/images/3.png"
import BetHistory from './BetHistory';
import GameHistory from './GameHistory';
import GameChart from './GameChart';
import Tab from '../../components/Navigation/Tab';
import CountDownTimmer from "../../components/DataDisplay/CountDownTimmer"
import CountDownTimer from './CountDownTimer';
import GamePad from "./GamePad"



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
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






export default function Games() {

    const [open, setOpen] = React.useState(false);
    const [activeGame, setActiveGame] = React.useState(null);
      
    const auth = useSelector(state => state.auth)

    const setActiveGameCallback = React.useCallback((data) => {
      return setActiveGame(data)
      // eslint-disable-next-line
    }, [])

    React.useEffect(() => {
        const sse = new EventSource(`${SSE_URL}/stream?uuid=${auth.accessToken}`, { withCredentials: true });

        sse.addEventListener('active_game', (e) => {
            const data = JSON.parse(e.data)
            // Set the active game
            setActiveGameCallback(data)
        });

        
        // sse.onmessage = e => {
        //     console.log(e)
        // }

        // sse.onerror = () => {
        //     // error log here 
        //     sse.close();
        // }

        // return () => {
        //     sse.close();
        // };
        // eslint-disable-next-line
    }, []);


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


    const renderGameHistory = ()=> {
      return <GameHistory />
    }

    const renderBetHistory = ()=> {
      return <BetHistory />
    }

    const renderGameChart = ()=> {
      return <GameChart />
    }

    const Renderer = ({ hours, minutes, seconds }) => {
      return (
          <Typography component={"h2"}>
            <SpanTimmer> {hours} </SpanTimmer>                        
            <SpanTimmer>{minutes}</SpanTimmer>                                                
            <SpanTimmer>:</SpanTimmer>                        
            <SpanTimmer>
              {seconds.toString().length > 1 ? seconds.toString()[0]: 0}
            </SpanTimmer>  
            <SpanTimmer>
              {seconds.toString().length > 1 ? seconds.toString()[1]: seconds}
            </SpanTimmer>  
          </Typography>                     
      )
    }

    return ( 
        <React.Fragment>
          
            <Grid container spacing={2} sx={{mb:5}}>
                <Grid item xs={12} md={4}>

                  {
                    activeGame ? (
                      <Item elevation={3}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <List>
                          <ListItem
                          secondaryAction={
                              <Typography 
                                  variant="h5" 
                                  component={"h2"} 
                                  sx={{fontWeight: 600, color:"green", ml:2}}
                                  >
                                    { formatMoney(activeGame.user_wallet_balance) }                                
                              </Typography>
                            }
                          >
                            <ListItemIcon>
                                <AccountBalanceWalletIcon color="primary" /> 
                            </ListItemIcon>
                            <ListItemText primary="Wallet Balance:" /> 
                          </ListItem>
                        </List>
                      </Grid>

                      <Grid item xs={6}>
                          <Fab variant="extended" size="small" color="warning" aria-label="withdraw"
                          sx={{px: 4}}  to="/app/withdraw" component={Link}>
                            Withdraw
                          </Fab>
                      </Grid>

                      <Grid item xs={6} sx={{textAlign: "right"}}>
                          <Fab variant="extended" size="small" color="primary" aria-label="recharge"
                          sx={{px: 4}} to="/app/recharge" component={Link}>
                            Recharge
                          </Fab>
                      </Grid>
                    </Grid>
                  </Item>
                    ): ""
                  }
                
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
                        {
                          activeGame ? (
                            <>
                              <Grid item xs={7}>
                                  <Typography variant="p" component={"p"}>
                                    <strong>{activeGame.active_game_duration} </strong>
                                    <strong>Minutes</strong> 
                                  </Typography>
                              </Grid>

                              <Grid item xs={5} sx={{textAlign: "right"}}>
                                  <Typography component={"p"}>
                                    Left Time To Buy
                                  </Typography>
                              </Grid>

                              <Grid item xs={6}>
                                  <Typography component={"h2"}>
                                    <span>{activeGame.active_game_period} </span>
                                  </Typography>
                              </Grid>

                              <Grid item xs={6} sx={{textAlign: "right"}}>
                                  <CountDownTimmer
                                    date={activeGame.active_game_date}
                                    dateIncrement={180000}
                                    renderer={Renderer}
                                    onTickCondition={handleClickOpen}
                                    // onComplete={getCurrentGames}
                                  /> 
                              </Grid>
                            </>
                          ): null
                        }

                      
                      </Grid>
                  </Item>
                </Grid>

                <Grid item xs={12}>
                  <CountDownTimer 
                    handleClose={handleClose}
                    open={open}
                  />
                </Grid>           

                <Grid item xs={12} >
                  {
                    activeGame ? <GamePad gameId={activeGame.active_game_id} /> : null
                  }
                </Grid>
            </Grid>

            <div style={{marginTop:20}}>
                <Tab 
                  games={renderGameHistory}
                  charts={renderGameChart}
                  bets={renderBetHistory}
                />
            </div>
        </React.Fragment>
    );
}