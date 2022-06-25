import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import HomeIcon from '@mui/icons-material/Home';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from "react-router-dom";


const Div = styled("div")(() => ({
    display: 'flex',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  }));
  


function BottomNav() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  
    return (  
        <React.Fragment>
            <CssBaseline />
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
                <Div>
                    <Tabs value={value} onChange={handleChange} aria-label="bottom nav tabs">
                        <Tab icon={<HomeIcon />} label="HOME" to="/" component={Link} />
                        <Tab icon={<SportsEsportsIcon />} label="GAME" to="/app/games" component={Link}/>
                        <Tab icon={<InsertInvitationIcon />} label="INVITE" to="/app/invites" component={Link}/>
                        <Tab icon={<AccountBalanceWalletIcon />} label="WALLET" to="/app/wallets" component={Link}/>
                    </Tabs>
                </Div>
            </Paper>
        </React.Fragment>     
    );      
}

export default BottomNav;



