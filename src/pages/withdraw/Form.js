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
import { schema } from "./schema"
import { formatMoney } from '../../utils';
import { paymentTypes } from '../../utils';


function RechargeForm() {

    const { handleSubmit, control, formState:{ errors }, setValue } = useForm({
        mode: "all",
        defaultValues: {
            amount: "",
            paymentType: "GCash",
            accountName: "",
            accountNumber: "",
            bankName: ""

        },
        resolver: yupResolver(schema)
    });

    const handleAmountOnBlur = (amount) => {
        if (currency(amount) > 0) {
            return setValue("amount", formatMoney(amount))
        }
    }


    const onSubmit = data => {
        console.log(data);
    }

    return ( 
        <React.Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Controller
                            name="paymentType"
                            control={control}
                            render={({ field }) => (<TextField  {...field}
                                id="outlined-adornment-paymentType"
                                label="Select Payment Type"
                                select
                                error={errors.paymentType ? true: false}
                                helperText={errors.paymentType?.message}
                                fullWidth
                            >
                                {paymentTypes.map((option) => (
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
                            name="accountName"
                            control={control}
                            render={({ field }) => (<TextField  
                                {...field} 
                                id="outlined-adornment-accountName"
                                label="Account Name"
                                placeholder="Account Name"
                                error={errors.accountName ? true: false}
                                helperText={errors.accountName?.message}
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
                            name="accountNumber"
                            control={control}
                            render={({ field }) => (<TextField  
                                {...field} 
                                id="outlined-adornment-accountNumber"
                                label="Account Number"
                                placeholder="Account Number"
                                error={errors.accountNumber ? true: false}
                                helperText={errors.accountNumber?.message}
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
                            name="bankName"
                            control={control}
                            render={({ field }) => (<TextField  
                                {...field} 
                                id="outlined-adornment-bankName"
                                label="Enter bankName"
                                placeholder="Bank Name"
                                error={errors.bankName ? true: false}
                                helperText={errors.bankName?.message}
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
                        <Fab type="submit" variant="extended" size="large" color="primary" aria-label="recharge"
                        sx={{px: 6}}>
                        Withdraw
                        </Fab>                             
                    </Grid>
                </Grid>
            </form>
        </React.Fragment>
    );
}

export default RechargeForm;