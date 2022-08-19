import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
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
  

function ViewRecharge({recharge}) {
    return ( 
        <React.Fragment>
            <Item elevation={3}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List>

                            <ListItem
                                secondaryAction={
                                <Typography variant="h5" component={"h2"}>
                                    { formatDate(recharge.created_at) }
                                </Typography>
                                }
                            >
                                <ListItemIcon>
                                    <CalendarMonthIcon  color="primary" /> 
                                </ListItemIcon>
                                <ListItemText primary="Recharge Date:" /> 
                            </ListItem>

                            <ListItem
                                secondaryAction={
                                    <Typography variant="h5" component={"h2"}>
                                    {recharge.reference_number}
                                    </Typography>
                                }
                                >
                                <ListItemIcon>
                                    <ContactPhoneIcon color="primary" /> 
                                </ListItemIcon>
                                <ListItemText primary="Reference Number:" /> 
                                </ListItem>


                            <ListItem
                                secondaryAction={
                                <Typography variant="h5" component={"h2"}>
                                    { recharge.method }
                                </Typography>
                                }
                            >
                                <ListItemIcon>
                                    <CalendarMonthIcon  color="primary" /> 
                                </ListItemIcon>
                                <ListItemText primary="Recharge Method:" /> 
                            </ListItem>


                            <ListItem
                                secondaryAction={
                                <Typography variant="h5" component={"h2"} sx={{fontWeight: 600, color:"green"}}>
                                    {formatMoney(recharge.amount)}
                                </Typography>
                                }
                            >
                                <ListItemIcon>
                                    <AccountBalanceWalletIcon color="primary" /> 
                                </ListItemIcon>
                                <ListItemText primary="Recharge Amount:" /> 
                            </ListItem>

                            <ListItem
                                secondaryAction={
                                <Typography variant="h5" component={"h2"} sx={{fontWeight: 600, color:"green"}}>
                                    {recharge.status}
                                </Typography>
                                }
                            >
                                <ListItemIcon>
                                    <AccountBalanceWalletIcon color="primary" /> 
                                </ListItemIcon>
                                <ListItemText primary="Status:" /> 
                            </ListItem>

                            <ListItem
                                secondaryAction={
                                <Typography variant="h5" component={"h2"} sx={{fontWeight: 600, color:"green"}}>
                                    {recharge.approved_by}
                                </Typography>
                                }
                            >
                                <ListItemIcon>
                                    <AccountBalanceWalletIcon color="primary" /> 
                                </ListItemIcon>
                                <ListItemText primary="Approved By:" /> 
                            </ListItem>


                            <ListItem
                                secondaryAction={
                                <Typography variant="h5" component={"h2"}>
                                    { formatDate(recharge.updated_at) }
                                </Typography>
                                }
                            >
                                <ListItemIcon>
                                    <CalendarMonthIcon  color="primary" /> 
                                </ListItemIcon>
                                <ListItemText primary="Approved Date:" /> 
                            </ListItem>
                        </List> 
                    </Grid>
                </Grid>
            </Item>
        </React.Fragment>
     );
}

export default ViewRecharge;