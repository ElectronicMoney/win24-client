import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LockIcon from '@mui/icons-material/Lock';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Fab from '@mui/material/Fab';
import { Alert } from '@mui/material';
import CircularProgress from "../../components/Feedback/CircularProgress"
import { schema } from "./schema"
import CountryMenu from '../../components/Navigation/CountryMenu';
import { useGenerateOtpMutation, useResetPasswordMutation } from '../../services/usersApi';

  

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


  const getCountryDialCode = (dialCode) => {
    setDialcode(dialCode)
  }



  const { handleSubmit, control, formState:{ errors }, setValue, getValues } = useForm({
          mode: "all",
          defaultValues: {
              username: "",
              otp:"",
              password: "",
              confirmPassword: "",
          },
          resolver: yupResolver(schema)
  });

  const handleUsernameOnBlur = (username) => {
      if (username.charAt(0) === "0") {
          return setValue("username", username.slice(1))
      }
  }

  const [
    generateOtp, 
    {isLoading}
  ] = useGenerateOtpMutation()
  
  const [
    resetPassword, 
    {isLoading:isLoadingReset, isError:isErrorReset, isSuccess:isSuccessReset, error:errorReset, data:reset}
  ] = useResetPasswordMutation()


  const handleGenerateOtp = () => {
    const username = `${dialcode}${getValues().username}`
    generateOtp({username})
  }

  const onSubmit = data => {
      const new_data = {
          ...data,
          username: `${dialcode}${data.username}`,
          otp: parseInt(data.otp)
      }
      resetPassword(new_data);
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
              name="otp"
              control={control}
              render={({ field }) => (
              <FormControl fullWidth sx={{ mb: 3 }} variant="standard">
                  <TextField  
                      {...field} 
                      id="outlined-adornment-otp"
                      label="OTP"
                      placeholder="Enter Verification Code"
                      error={errors.otp ? true: false}
                      helperText={errors.otp?.message}
                      fullWidth
                      InputProps={{
                      startAdornment: (
                      <InputAdornment position="start"> 
                          <PhoneIphoneIcon color="primary" />
                      </InputAdornment>),
                      
                      endAdornment: (
                        <InputAdornment position="end">
                            <Fab 
                            size="small" 
                            color="primary" 
                            aria-label="otp"
                            onClick={() => handleGenerateOtp()}
                            >
                                <strong>{isLoading? <CircularProgress /> : "OTP"}</strong>
                            </Fab>
                        </InputAdornment>)   
                    }}
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
              isSuccessReset && reset ? (
                <Alert severity="success" sx={{ mb: 2 }}>
                  "Your Password has been Changed Successfully!"
                </Alert>
              ): isErrorReset? (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {errorReset.data.error.message}
                </Alert>
              ): null
            }
                  

            <Fab type="submit" variant="extended" size="small" color="primary" aria-label="recharge"
            sx={{px: 6}}>
                { isLoadingReset ? <CircularProgress />: "Recover Password!"}
            </Fab>                             
        </form>
      </React.Fragment>
     );
}