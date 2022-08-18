import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LockIcon from '@mui/icons-material/Lock';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Fab from '@mui/material/Fab';
import { Alert } from '@mui/material';
import CountryMenu from '../../components/Navigation/CountryMenu';
import { registerSchema } from "./schema"
import CircularProgress from "../../components/Feedback/CircularProgress"
import { useRegisterMutation } from '../../services/authApi';

  

export default function Form() {

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const [dialcode, setDialcode] = React.useState("");

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [register, {isLoading, isError, isSuccess, error, data}] = useRegisterMutation()


  const { handleSubmit, control, formState:{ errors }, setValue } = useForm({
        mode: "all",
        defaultValues: {
            name: "",
            username: "",
            password: "",
            confirmPassword: "",
        },
        resolver: yupResolver(registerSchema)
    });

    const handleUsernameOnBlur = (username) => {
      if (username.charAt(0) === "0") {
          return setValue("username", username.slice(1))
        }
    }

    const getCountryDialCode = (dialCode) => {
      setDialcode(dialCode)
    }

    const onSubmit = data => {
      const new_data = {
          ...data,
          username: `${dialcode}${data.username}`
      }
      register(new_data)

    }

      
    return ( 
      <React.Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
          
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
              <FormControl fullWidth sx={{ my: 3 }} variant="standard">
                  <TextField  
                      {...field} 
                      id="outlined-adornment-name"
                      label="Full Name"
                      placeholder="Full Name"
                      error={errors.name ? true: false}
                      helperText={errors.name?.message}
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
              name="username"
              control={control}
              render={({ field }) => (
              <FormControl fullWidth sx={{ mb: 3 }} variant="standard">
                  <TextField  
                      {...field} 
                      id="outlined-adornment-phoneNumber"
                      label="Phone Number"
                      placeholder="Phone Number"
                      error={errors.username ? true: false}
                      helperText={errors.username?.message}
                      onBlur={() => handleUsernameOnBlur(field.value)}
                      fullWidth
                      InputProps={{
                      startAdornment: (
                      <InputAdornment position="start"> 
                          <CountryMenu getCountryDialCode={getCountryDialCode} />
                      </InputAdornment>)}}
                  />
              </FormControl>)
            }/>
                  
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
              <FormControl fullWidth sx={{ mb: 3 }} variant="standard">
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

                 
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
              <FormControl fullWidth sx={{ mb: 3 }} variant="standard">
                  <TextField  
                      {...field} 
                      id="outlined-adornment-confirmPassword"
                      label="Confirm Password"
                      type={values.showPassword ? 'text' : 'password'}
                      placeholder="Confirm Password"
                      error={errors.confirmPassword ? true: false}
                      helperText={errors.confirmPassword?.message}
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

            {
              isSuccess && data ? (
                <Alert severity="success" sx={{ mb: 2 }}>
                  "Your Account Registrtion is Successful!"
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
            { isLoading ? <CircularProgress />: "Register!"}
            </Fab>                             
        </form>
      </React.Fragment>
     );
}