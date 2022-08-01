import React from 'react';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ContactsIcon from '@mui/icons-material/Contacts';
import PublicIcon from '@mui/icons-material/Public';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import currency from 'currency.js';
import CircularProgress from "../../components/Feedback/CircularProgress"
import { Alert } from '@mui/material';
import { schema } from "./schema"
import { formatMoney, methods } from '../../utils';
import { useCreateWithdrawalMutation } from '../../services/withdrawalsApi';


function RechargeForm() {

    const { handleSubmit, control, formState:{ errors }, setValue } = useForm({
        mode: "all",
        defaultValues: {
            amount: "",
            method: "GCash",
            account_name: "",
            account_number: "",
            bank_name: ""

        },
        resolver: yupResolver(schema)
    });

    const handleAmountOnBlur = (amount) => {
        if (currency(amount) > 0) {
            return setValue("amount", formatMoney(amount))
        }
    }

    const [createRecharge, {isLoading, isError, isSuccess, error, data:withdraw}] = useCreateWithdrawalMutation()



    const onSubmit = data => {
        createRecharge(data);
    }

    return ( 
        <React.Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Controller
                            name="method"
                            control={control}
                            render={({ field }) => (<TextField  {...field}
                                id="outlined-adornment-method"
                                label="Select Payment Type"
                                select
                                error={errors.method ? true: false}
                                helperText={errors.method?.message}
                                fullWidth
                            >
                                {methods.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>)}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <Controller
                            name="amount"
                            control={control}
                            render={({ field }) => (<TextField  
                                {...field} 
                                id="outlined-adornment-amount"
                                label="Enter Amount"
                                placeholder={formatMoney(0).toString()}
                                error={errors.amount ? true: false}
                                helperText={errors.amount?.message}
                                onBlur={() => handleAmountOnBlur(field.value)}
                                fullWidth
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start"> 
                                        <PointOfSaleIcon color="primary" />
                                    </InputAdornment>)}}
                            />)}
                        />
                    </Grid>


                    <Grid item xs={6}>
                        <Controller
                            name="account_name"
                            control={control}
                            render={({ field }) => (<TextField  
                                {...field} 
                                id="outlined-adornment-account_name"
                                label="Account Name"
                                placeholder="Account Name"
                                error={errors.account_name ? true: false}
                                helperText={errors.account_name?.message}
                                fullWidth
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start"> 
                                        <AccountBoxIcon color="primary" />
                                    </InputAdornment>)}}
                            />)}
                        />
                    </Grid>


                    <Grid item xs={6}>
                        <Controller
                            name="account_number"
                            control={control}
                            render={({ field }) => (<TextField  
                                {...field} 
                                id="outlined-adornment-account_number"
                                label="Account Number"
                                placeholder="Account Number"
                                error={errors.account_number ? true: false}
                                helperText={errors.account_number?.message}
                                fullWidth
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start"> 
                                        <ContactsIcon color="primary" />
                                    </InputAdornment>)}}
                            />)}
                        />
                    </Grid>


                    <Grid item xs={6}>
                        <Controller
                            name="bank_name"
                            control={control}
                            render={({ field }) => (<TextField  
                                {...field} 
                                id="outlined-adornment-bank_name"
                                label="Enter Bank Name"
                                placeholder="Bank Name"
                                error={errors.bank_name ? true: false}
                                helperText={errors.bank_name?.message}
                                fullWidth
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start"> 
                                        <PublicIcon color="primary" />
                                    </InputAdornment>)}}
                            />)}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <Fab type="submit" variant="extended" size="large" color="primary" aria-label="withdraw"
                        sx={{px: 6}}>
                        
                            { isLoading ? <CircularProgress />: "Withdraw!"}

                        </Fab>                             
                    </Grid>

                    <Grid item xs={12}>
                        {
                            isSuccess && withdraw ? (
                                <Alert severity="success" sx={{ mb: 2 }}>
                                    Your Fund withdrawal has been received and currently under proccessing! 
                                </Alert>
                            ): isError? (
                                <Alert severity="error" sx={{ mb: 2 }}>{error.data.error.message}</Alert>
                            ): ""

                        }
                    </Grid>

                </Grid>
            </form>
        </React.Fragment>
    );
}

export default RechargeForm;