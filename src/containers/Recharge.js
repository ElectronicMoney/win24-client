import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ListItemText from '@mui/material/ListItemText';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import FormControl from '@mui/material/FormControl';
import currency from "currency.js"
import { formatMoney } from '../utils';
import Table from '../components/DataDisplay/Table.js'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));
  

export default function Recharge() {
    const [values, setValues] = React.useState({
        type: "",
        amount: '',
    });

    const [errors, setErrors] = React.useState({
        amount: '',
    });

    const [type, setType] = React.useState("GCash");

    const handleChange = (prop) => (event) => {
        if ( Number.isNaN(Number(event.target.value))) {
            return
        }
        setValues({ ...values, [prop]: event.target.value, type: type });
        handleValidation()
    };

    const handleSelectChange = (event) => {
        setType(event.target.value);
        setValues({ ...values, type: event.target.value });
    };



    const handleFocucs = () => {
        if (values.amount) {
            setValues({...values, amount: currency(values.amount) })
        }
    }

    const handleBlur = () => {
        if (handleValidation()) {
            setValues({...values, amount: formatMoney(values.amount) })
        }

    }


    const handleValidation = () => {
         let temErrors = {}
        if ( values.amount === "") {
            temErrors.amount = "Please Enter the exact Amount you want to Recharge!"
         } else if (Number(values.amount) < 100 ) {
            temErrors.amount = `The lowest amount you can Recharge is ${formatMoney(100)}!`
         }
         setErrors({...temErrors})
         return Object.values(temErrors).every(err => err === "")
    }

    const handleRechargePost = (event) => {
        event.preventDefault()
        //Check for valition handler 
        if (handleValidation()) {
            console.log(values)
        }

    }

    const types = [
  {
    value: 'GCash',
    label: 'GCash',
  },
  {
    value: 'PayMaya',
    label: 'PayMaya',
  },
  {
    value: 'CoinPH',
    label: 'CoinPH',
  },
  {
    value: 'UPI',
    label: 'UPI',
  },
  {
    value: 'Bank Transfer',
    label: 'Bank Transfer',
  },
];


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
                        <form autoComplete='off' onSubmit={handleRechargePost}>
                            <Grid container spacing={2}>

                                <Grid item xs={6}>
                                    <FormControl fullWidth variant="standard">
                                        <TextField
                                            id="outlined-adornment-type"
                                            label="Select Recharge Type"
                                            name="type"
                                            select
                                            fullWidth
                                            value={type}
                                            onChange={handleSelectChange}
                                        >
                                            {types.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                                </MenuItem>
                                            ))}

                                        </TextField>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={6}>
                                    <FormControl fullWidth variant="standard">
                                        <TextField
                                            id="outlined-adornment-amount"
                                            label="Enter Amount"
                                            value={values.amount}
                                            name="amount"
                                            onChange={handleChange('amount')}
                                            placeholder="Enter Amount"
                                            error={errors.amount ? true: false}
                                            helperText={errors.amount}
                                            onBlur={() => handleBlur()}
                                            onFocus={() => handleFocucs()}
                                            InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start"> 
                                                    <PointOfSaleIcon color="primary" />
                                                </InputAdornment>)
                                            }}
                                        />
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12}>
                                    <Fab type="submit" variant="extended" size="small" color="primary" aria-label="recharge"
                                    sx={{px: 6}}>
                                    Recharge
                                    </Fab>                             
                                </Grid>
                            </Grid>
                        </form>
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
