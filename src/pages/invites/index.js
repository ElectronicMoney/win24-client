import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));
  

export default function Wallet() {

    return ( 
        <React.Fragment>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <Item elevation={3}>
                    <Typography variant="h5" component="h2" sx={{textAlign:"center"}}>
                        Invite Friends To Earn 5% on First Deposit!
                    </Typography>
                </Item>
            </Grid>


            <Grid item xs={12} md={6}>
                <Item elevation={3}>
                    First Item
                </Item>
            </Grid>


            <Grid item xs={12} md={6}>
                <Item elevation={3}>
                    Second Item
                </Item>
            </Grid>

            <Grid item xs={12} md={6}>
                <Item>
                    Third Item
                </Item>
            </Grid>


            <Grid item xs={12} md={6}>
                <Item elevation={3} >
                    Fourth Item
                </Item>
            </Grid>

            </Grid>
        </React.Fragment>
    );
}
