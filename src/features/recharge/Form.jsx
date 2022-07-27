import React from 'react';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
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
            paymentType: "GCash"
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

                    <Grid item xs={12}>
                        <Fab type="submit" variant="extended" size="small" color="primary" aria-label="recharge"
                        sx={{px: 6}}>
                        Recharge
                        </Fab>                             
                    </Grid>
                </Grid>
            </form>
        </React.Fragment>
    );
}

export default RechargeForm;