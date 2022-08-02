import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SecurityIcon from '@mui/icons-material/Security';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { formatMoney, formatDate } from '../../../utils';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));
  

function ViewUser({user}) {
    return ( 
        <React.Fragment>
            <Item elevation={3}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List>
                        <ListItem
                            secondaryAction={
                            <Typography variant="h5" component={"h2"}>
                                {user.name}
                            </Typography>
                            }
                        >
                            <ListItemIcon>
                                <AccountBoxIcon color="primary" /> 
                            </ListItemIcon>
                            <ListItemText primary="Name:" /> 
                        </ListItem>

                        <ListItem
                            secondaryAction={
                                <Typography variant="h5" component={"h2"}>
                                {user.username}
                                </Typography>
                            }
                            >
                            <ListItemIcon>
                                <ContactPhoneIcon color="primary" /> 
                            </ListItemIcon>
                            <ListItemText primary="Number:" /> 
                            </ListItem>

                        <ListItem
                            secondaryAction={
                            <Typography variant="h5" component={"h2"}>
                                {user.gameId}
                            </Typography>
                            }
                        >
                            <ListItemIcon>
                                <SportsEsportsIcon color="primary" /> 
                            </ListItemIcon>
                            <ListItemText primary="Game ID:" /> 
                        </ListItem>


                        <ListItem
                            secondaryAction={
                            <Typography variant="h5" component={"h2"}>
                                {user.role}
                            </Typography>
                            }
                        >
                            <ListItemIcon>
                                <SecurityIcon color="primary" /> 
                            </ListItemIcon>
                            <ListItemText primary="Role:" /> 
                        </ListItem>


                        <ListItem
                            secondaryAction={
                            <Typography variant="h5" component={"h2"}>
                                { formatDate(user.createdAt) }
                            </Typography>
                            }
                        >
                            <ListItemIcon>
                                <CalendarMonthIcon  color="primary" /> 
                            </ListItemIcon>
                            <ListItemText primary="Joined Date:" /> 
                        </ListItem>


                        <ListItem
                            secondaryAction={
                            <Typography variant="h5" component={"h2"} sx={{fontWeight: 600, color:"green"}}>
                                {formatMoney(user.walletBalance)}
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
                </Grid>
            </Item>
        </React.Fragment>
     );
}

export default ViewUser;