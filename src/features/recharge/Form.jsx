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
import {ErrorBoundary} from "../../errors/ErrorBandary"
import { schema } from "./schema"
import { formatMoney, methods } from '../../utils';
import LinearProgress from "../../components/Feedback/LinearProgress"
import CircularProgress from "../../components/Feedback/CircularProgress"
import { Alert } from '@mui/material';
import { useCreateRechargeMutation } from '../../services/rechargesApi';
const Accounts = React.lazy(() => import("./Accounts"));


function RechargeForm() {

    const { handleSubmit, control, formState:{ errors }, setValue } = useForm({
        mode: "all",
        defaultValues: {
            amount: "",
            method: "GCash"
        },
        resolver: yupResolver(schema)
    });

    const handleAmountOnBlur = (amount) => {
        if (currency(amount) > 0) {
            return setValue("amount", formatMoney(amount))
        }
    }


    const [createRecharge, {isLoading, isError, isSuccess, error, data:recharge}] = useCreateRechargeMutation()


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

                    <Grid item xs={12}>
                        <Fab type="submit" variant="extended" size="small" color="primary" aria-label="recharge"
                        sx={{px: 6}}>
                        { isLoading ? <CircularProgress />: "Recharge!"}
                        </Fab>                             
                    </Grid>


                    <Grid item xs={12}>
                        {
                            isSuccess && recharge ? (
                                <ErrorBoundary>
                                    <React.Suspense fallback={<LinearProgress />}>
                                        <Accounts />
                                    </React.Suspense>
                                </ErrorBoundary>
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