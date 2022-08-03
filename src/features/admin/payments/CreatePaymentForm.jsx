import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ContactsIcon from '@mui/icons-material/Contacts';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Fab from '@mui/material/Fab';
import { schema } from "./schema"
import { Alert } from '@mui/material';
import CircularProgress from "../../../components/Feedback/CircularProgress"
import { useCreateAccountMutation } from '../../../services/accountsApi';
  

export default function Form() {

  const [createAccount, {isLoading, isError, isSuccess, error, data}] = useCreateAccountMutation()


  const { handleSubmit, control, formState:{ errors } } = useForm({
        mode: "all",
        defaultValues: {
            account_name: "",
            account_number: "",
            bank_name: "",
        },
        resolver: yupResolver(schema)
    });


    const onSubmit = data => {
      createAccount(data);
    }

  
    return ( 
      <React.Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
          
            <Controller
              name="account_name"
              control={control}
              render={({ field }) => (
              <FormControl fullWidth sx={{ my: 3 }} variant="standard">
                  <TextField  
                      {...field} 
                      id="outlined-adornment-account_name"
                      label="Enter Account Name"
                      placeholder="Account Name"
                      error={errors.account_name ? true: false}
                      helperText={errors.account_name?.message}
                      size="small"
                      fullWidth
                      InputProps={{
                      startAdornment: (
                      <InputAdornment position="start"> 
                          <AccountBoxIcon color="primary" />
                      </InputAdornment>)}}
                  />
              </FormControl>)
            }/>

          <Controller
              name="account_number"
              control={control}
              render={({ field }) => (
              <FormControl fullWidth sx={{ my: 3 }} variant="standard">
                  <TextField  
                      {...field} 
                      id="outlined-adornment-account_number"
                      label="Enter Account Number"
                      placeholder="Account Number"
                      error={errors.account_number ? true: false}
                      helperText={errors.account_number?.message}
                      size="small"
                      fullWidth
                      InputProps={{
                      startAdornment: (
                      <InputAdornment position="start"> 
                          <AccountBalanceIcon color="primary" />
                      </InputAdornment>)}}
                  />
              </FormControl>)
            }/>


            <Controller
              name="bank_name"
              control={control}
              render={({ field }) => (
              <FormControl fullWidth sx={{ my: 3 }} variant="standard">
                  <TextField  
                      {...field} 
                      id="outlined-adornment-bank_name"
                      label="Enter Bank Name"
                      placeholder="Bank Name"
                      error={errors.bank_name ? true: false}
                      helperText={errors.bank_name?.message}
                      size="small"
                      fullWidth
                      InputProps={{
                      startAdornment: (
                      <InputAdornment position="start"> 
                          <ContactsIcon color="primary" />
                      </InputAdornment>)}}
                  />
              </FormControl>)
            }/>

          
            {
              isSuccess && data ? (
                <Alert severity="success" sx={{ mb: 2 }}>
                  "The New Payment Account has been Added Successfully!"
                </Alert>
              ): isError? (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {error.data.error.message}
                </Alert>
              ): null
            }

            <Fab 
              type="submit" 
              variant="extended" 
              size="large" 
              color="primary" 
              aria-label="recharge"
              sx={{px: 6}}
            >
            { isLoading ? <CircularProgress />: "Add New Account!"}
            </Fab>                            
        </form>
      </React.Fragment>
     );
}