import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Fab from '@mui/material/Fab';
import { schema } from "./schema"
  

export default function Form() {


  const { handleSubmit, control, formState:{ errors } } = useForm({
        mode: "all",
        defaultValues: {
            username: "",
        },
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        console.log(data);
    }

      
    return ( 
      <React.Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
                            
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
              <FormControl fullWidth sx={{ my: 5 }} variant="standard">
                  <TextField  
                      {...field} 
                      id="outlined-adornment-phoneNumber"
                      label="Phone Number"
                      placeholder="Phone Number"
                      error={errors.username ? true: false}
                      helperText={errors.username?.message}
                      fullWidth
                      InputProps={{
                      startAdornment: (
                      <InputAdornment position="start"> 
                          <ContactPhoneIcon color="primary" />
                      </InputAdornment>)}}
                  />
              </FormControl>)
            }/>
                  

            <Fab type="submit" variant="extended" size="small" color="primary" aria-label="recharge"
            sx={{px: 6}}>
                Recover Password!
            </Fab>                             
        </form>
      </React.Fragment>
     );
}