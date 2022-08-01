import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Alert } from '@mui/material';
import { formatMoney } from '../utils';
import { useGetProfileQuery } from '../services/authApi';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));
  

export default function Recharge() {


    const { isLoading, isSuccess, isError,error ,data:profile, } = useGetProfileQuery()

    return ( 
        <React.Fragment>
            {
                isLoading ? (
                    <Stack spacing={1}>
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="rectangular" width={220} height={100} />
                    </Stack>
                ): isSuccess && profile ? (
                    <Item elevation={3}>
                        <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <List>
                            <ListItem
                                secondaryAction={
                                <Typography variant="h5" component={"h2"}>
                                    {profile.name}
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
                                    {profile.username}
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
                                    {profile.game_id}
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
                                <Typography variant="h5" component={"h2"} sx={{fontWeight: 600, color:"green"}}>
                                    {formatMoney(profile.wallet_balance)}
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
                ): isError ? (
                    <Alert severity="error" sx={{ m: 2 }}>{error.data.error.message}</Alert>
                ): null
            }

        </React.Fragment>
    );
}
