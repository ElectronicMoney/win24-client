import React from 'react';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import currency from 'currency.js';
import { schema } from "./schema"
import { formatMoney } from '../../utils';
import CircularProgress from "../../components/Feedback/CircularProgress"
import { Alert } from '@mui/material';
import { useCreateBetMutation } from '../../services/betsApi';


function BetForm({betData}) {

    const { handleSubmit, control, formState:{ errors }, setValue } = useForm({
        mode: "all",
        defaultValues: {
            bet_amount: ""
        },
        resolver: yupResolver(schema)
    });

    const handleAmountOnBlur = (bet_amount) => {
        if (currency(bet_amount) > 0) {
            return setValue("bet_amount", formatMoney(bet_amount))
        }
    }


    const [
      createBet, 
      {isLoading, isError, isSuccess, error, data:gameBet}
    ] = useCreateBetMutation()


    const onSubmit = data => {
        const betInfo = {...betData, ...data}
        // console.log(betInfo)
        createBet(betInfo);
    }

    return ( 
        <React.Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    
                    <Grid item xs={12} md={6}>
                        <Controller
                            name="bet_amount"
                            control={control}
                            render={({ field }) => (<TextField  
                                {...field} 
                                id="outlined-adornment-bet_amount"
                                label="Enter Bet Amount"
                                placeholder={formatMoney(0).toString()}
                                error={errors.bet_amount ? true: false}
                                helperText={errors.bet_amount?.message}
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

                    <Grid item xs={12} md={6} sx={{textAlign:"center"}} >
                        <Fab type="submit" variant="extended" size="small" color="primary" aria-label="bet"
                        sx={{px: 6, mt:2}}>
                        { isLoading ? <CircularProgress />: "Place Bet!"}
                        </Fab>                             
                    </Grid>


                    <Grid item xs={12}>
                        {
                            isSuccess && gameBet ? (
                                <Alert severity="success" sx={{ mb: 2 }}>Your bet have been placed successfully!</Alert>
                            ): isError? (
                                <Alert severity="error" sx={{ mb: 2 }}>{error.data.error.message}</Alert>
                            ): null

                        }
                    </Grid>
                </Grid>
            </form>
        </React.Fragment>
    );
}

export default BetForm;