import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useGetAccountsQuery } from '../../services/accountsApi';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));


function Accounts() {

    const { data, error, isLoading } = useGetAccountsQuery(1)

    if (isLoading) {
        return (
            <Stack spacing={1}>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="rectangular" width={220} height={100} />
            </Stack>
        )
    }

    return ( 
        <div>
            {
               data ?  (
                <Grid container spacing={2} sx={{mb:5}}>
                    <Grid item xs={12} md={4}>
                    <Item elevation={3}>                  
                        <Alert severity="success">
                            <AlertTitle>Your Account Recharge has been recieved successfully</AlertTitle>
                            <span>Please deposit the same amount in any of your chosen payment method bellow!</span>
                        </Alert>
                    </Item>
                    </Grid>

                    {
                        data.items.map((account) => (
                            <Grid item xs={12} md={4} key={account.id} >
                                <Item elevation={3}>
                                    <Typography variant='h5' component="p" >
                                        <strong>Account Name: </strong>
                                        <span> {account.account_name} </span>
                                    </Typography>

                                    <Typography variant='h5' component="p" >
                                        <strong>Account Number: </strong>
                                        <span> {account.account_number} </span>
                                    </Typography>

                                    <Typography variant='h5' component="p" >
                                        <strong>Bank Name: </strong>
                                        <span> {account.bank_name} </span>
                                    </Typography>

                                </Item>
                            </Grid>
                        ))
                    }
                </Grid>
               ): (
                <Alert severity="error" sx={{ m: 2 }}>{error.data.error.message}</Alert>
               )
            }

        </div>
    );
}

export default Accounts;