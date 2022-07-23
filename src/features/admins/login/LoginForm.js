import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Fab from '@mui/material/Fab';
import { schema } from "./schema"
  

export default function Form() {

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const { handleSubmit, control, formState:{ errors } } = useForm({
        mode: "all",
        defaultValues: {
            username: "",
            password: "",
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
                      placeholder="Username"
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
                  
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
              <FormControl fullWidth sx={{ mb: 5 }} variant="standard">
                  <TextField  
                      {...field} 
                      id="outlined-adornment-password"
                      label="Password"
                      type={values.showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      error={errors.password ? true: false}
                      helperText={errors.password?.message}
                      fullWidth
                      InputProps={{
                      startAdornment: (
                      <InputAdornment position="start"> 
                          <LockIcon color="primary" />
                      </InputAdornment>),
                      
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {values.showPassword ? <VisibilityOff color='primary' /> : <Visibility color='primary' />}
                          </IconButton>
                        </InputAdornment>)                      
                    }}
                  />
              </FormControl>)
            }/>

            <Fab type="submit" variant="extended" size="large" color="primary" aria-label="recharge"
            sx={{px: 6}}>
            Login!
            </Fab>                             
        </form>
      </React.Fragment>
     );
}