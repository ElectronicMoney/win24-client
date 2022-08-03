import React from 'react';
import { styled } from '@mui/material/styles';
import { Fab, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import { purple } from '@mui/material/colors';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Dialog from "../../../components/Feedback/Dialog"
import SearchRechargeForm from "./SearchRechargeForm"
import CreatePaymentForm from './CreatePaymentForm';
import { useGetAccountsQuery } from '../../../services/accountsApi';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));


function PaymentMethod() {

    const [open, setOpen] = React.useState(false);


    const { data, error, isLoading, isSuccess, isError } = useGetAccountsQuery(1)

    const handleOpen = () => {
        setOpen(true);
    };


    const handleClose = (event, reason) => {
        // "escapeKeyDown", "backdropClick"
        if(reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
            // Set 'open' to false, however you would do that with your particular code.
            setOpen(false);
        }
    };

    const dialogActions = () => {
        return (
            <Fab 
            variant="circle" 
            size="small" 
            color="error" 
            aria-label="bet"
            onClick={() => handleClose()}
            >
                <CloseIcon />
            </Fab>
        )
    }



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
        <React.Fragment>
            <Grid container spacing={2} sx={{mb:5}}>
                <Grid item xs={12} md ={3}>
                    <Item elevation={4}>
                        <Button 
                        fullWidth 
                        variant="contained" 
                        startIcon={<AddBoxIcon />} 
                        onClick={() => handleOpen()}
                        >
                            Add New Payment Method
                        </Button>
                    </Item>
                    </Grid>

                    <Grid item xs={12} md ={9}>
                    <Item elevation={4}>
                        <SearchRechargeForm />
                    </Item>
                </Grid>

                { isLoading ? (
                    <Stack spacing={1}>
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="rectangular" width={220} height={100} />
                    </Stack>
                ): isSuccess && data ? (
                    data.items.length < 1 ? (
                    <Grid item xs={12}>
                        <Item elevation={3}>                  
                            <Alert severity="info">There is no any payment method yet; You can add New pyment method! </Alert>
                        </Item>
                    </Grid>
                    ) :
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

                ): isError ? (
                    <Alert severity="error" sx={{ m: 2 }}>{error.data.error.message}</Alert>
                ): null
                    
                }

                <Grid item xs={12}>
                    <Dialog 
                        color={purple[900]}
                        title="Add New Payment Method"
                        dialogActions={dialogActions}
                        open={open}
                        handleClose={handleClose}
                        >
                            <CreatePaymentForm />
                        </Dialog>
        
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default PaymentMethod;