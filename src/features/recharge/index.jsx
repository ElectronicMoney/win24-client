import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ListItemText from '@mui/material/ListItemText';
import { formatMoney } from '../../utils';
import Table from '../../components/DataDisplay/Table'
import Form from "./Form"


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));
  

export default function Recharge() {

    const transactions = [
       { id: 1, created_at: "2022-07-10 11:32", type: "GCash", amount: 200.00, status: "PENDING"},
       { id: 2, created_at: "2022-07-10 11:32", type: "PayMaya", amount: 2500.00, status: "COMPLETD"},
       { id: 3, created_at: "2022-07-10 11:32", type: "GCash", amount: 5000.00, status: "COMPLETD"},
       { id: 4, created_at: "2022-07-10 11:32", type: "GCash", amount: 1500.00, status: "FAILED"},
       { id: 5, created_at: "2022-07-10 11:32", type: "GCash", amount: 3000.00, status: "FAILED"},
    ]

    return ( 
        <React.Fragment>
            <Grid container spacing={2} >

            <Grid item xs={12}>
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
                    <Grid item xs={12}>
                        <Form />
                    </Grid>
                  </Grid>
                </Item>
               
              </Grid>

                <Grid item xs={12}>
                    <Item elevation={3}>
                        <Typography variant="h5" component="h2" sx={{textAlign:"center"}}>Recharge History!</Typography>
                    </Item>
                </Grid>

                <Grid item xs={12}>
                     <Table isTransactions={true} transactions={transactions} />
                </Grid>

            </Grid>
        </React.Fragment>
    );
}
