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
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ContactsIcon from '@mui/icons-material/Contacts';
import PublicIcon from '@mui/icons-material/Public';
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
        accountName: '',
        accountNumber: '',
        bankName: '',
    });

    const [errors, setErrors] = React.useState({
        amount: '',
        accountName: '',
        accountNumber: '',
        bankName: '',
    });

    const [type, setType] = React.useState("GCash");

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value, type: type });
        handleValidation()
    };

    const handleAmountChange = (prop) => (event) => {
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
        setValues({...values, amount: formatMoney(values.amount) })
    }


    const handleValidation = () => {
         let temErrors = {}
        if ( values.amount === "") {
            temErrors.amount = "Please Enter the exact Amount you want to Withdraw!"
         } else if (Number(values.amount) < 100 ) {
            temErrors.amount = `The lowest amount you can Withdraw is ${formatMoney(100)}!`
         }
        temErrors.accountName = values.accountName ? "": "The Account Name is Required!"
        temErrors.accountNumber = values.accountNumber ? "": "The Account Number is Required!"
        temErrors.bankName = values.bankName ? "": "The Bank Name is Required!"
         setErrors({...temErrors})
         return Object.values(temErrors).every(err => err === "")
    }

    const handleWithdrawPost = (event) => {
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
                        <form autoComplete='off' onSubmit={handleWithdrawPost}>
                            <Grid container spacing={2}>

                                <Grid item xs={6}>
                                    <FormControl fullWidth variant="standard">
                                        <TextField
                                            id="outlined-adornment-type"
                                            label="Select Withdrawal Type"
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
                                            onChange={handleAmountChange('amount')}
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

                                <Grid item xs={6}>
                                    <FormControl fullWidth variant="standard">
                                        <TextField
                                            id="outlined-adornment-accountName"
                                            label="Account Name"
                                            value={values.accountName}
                                            name="accountName"
                                            onChange={handleChange('accountName')}
                                            placeholder="Account Name"
                                            error={errors.accountName ? true: false}
                                            helperText={errors.accountName}
                                            InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start"> 
                                                    <AccountBoxIcon color="primary" />
                                                </InputAdornment>)
                                            }}
                                        />
                                    </FormControl>
                                </Grid>

                                <Grid item xs={6}>
                                    <FormControl fullWidth variant="standard">
                                        <TextField
                                            id="outlined-adornment-accountNumber"
                                            label="Account Number"
                                            value={values.accountNumber}
                                            name="accountNumber"
                                            onChange={handleChange('accountNumber')}
                                            placeholder="Account Number"
                                            error={errors.accountNumber ? true: false}
                                            helperText={errors.accountNumber}
                                            InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start"> 
                                                    <ContactsIcon color="primary" />
                                                </InputAdornment>)
                                            }}
                                        />
                                    </FormControl>
                                </Grid>

                                <Grid item xs={6}>
                                    <FormControl fullWidth variant="standard">
                                        <TextField
                                            id="outlined-adornment-bankName"
                                            label="Bank Name"
                                            value={values.bankName}
                                            name="bankName"
                                            onChange={handleChange('bankName')}
                                            placeholder="Bank Name"
                                            error={errors.bankName ? true: false}
                                            helperText={errors.bankName}
                                            InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start"> 
                                                    <PublicIcon color="primary" />
                                                </InputAdornment>)
                                            }}
                                        />
                                    </FormControl>
                                </Grid>

                                <Grid item xs={6}>
                                    <Fab type="submit" variant="extended" size="large" color="primary" aria-label="recharge"
                                    sx={{px: 6}}>
                                    Withdraw
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
                        <Typography variant="h5" component="h2" sx={{textAlign:"center"}}>Withdraw History!</Typography>
                    </Item>
                </Grid>

                <Grid item xs={12}>
                     <Table isTransactions={true} transactions={transactions} />
                </Grid>

            </Grid>
        </React.Fragment>
    );
}
