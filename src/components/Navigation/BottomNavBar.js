import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';



export default function BottomNavBar() {

  const [value, setValue] = React.useState(0);

    return (
      <React.Fragment>
          <Box sx={{ mt: 10 }} >
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                  showLabels
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                >
                <BottomNavigationAction label="HOME" icon={<HomeIcon />} to="/app" component={Link}/>
                <BottomNavigationAction label="INVITE" icon={<InsertInvitationIcon />} to="/app/invites" component={Link} />
                <BottomNavigationAction label="WALLET" icon={<AccountBalanceWalletIcon />} to="/app/wallets" component={Link} />
                <BottomNavigationAction label="GAMES" icon={<SportsEsportsIcon />} to="/app/games" component={Link} />
              </BottomNavigation>
            </Paper>
          </Box>
      </React.Fragment>
    );
}

