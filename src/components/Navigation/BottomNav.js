import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import Paper from '@mui/material/Paper';


function BottomNav() {
    const [value, setValue] = React.useState(0);

    return (  
        <React.Fragment>
            <CssBaseline />
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="HOME" icon={<HomeIcon />} />
                    <BottomNavigationAction label="GAME" icon={<SportsEsportsIcon />} />
                    <BottomNavigationAction label="INVITE" icon={<InsertInvitationIcon />} />
                    <BottomNavigationAction label="WALLET" icon={<AccountBalanceWalletIcon />} />
                    <BottomNavigationAction label="RULES" icon={<LocalPoliceIcon />} />

                </BottomNavigation>
            </Paper>
        </React.Fragment>     
    );      
}

export default BottomNav;



