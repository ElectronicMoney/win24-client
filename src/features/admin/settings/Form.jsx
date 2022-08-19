import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Fab from '@mui/material/Fab';
import { Alert } from '@mui/material';
import CircularProgress from "../../../components/Feedback/CircularProgress"
import { schema } from "./schema"
import { useChangePasswordMutation } from '../../../services/usersApi';
  


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

  
  const [
    changePassword, 
    {isLoading, isError, isSuccess, error, data}
  ] = useChangePasswordMutation()

  const { handleSubmit, control, formState:{ errors } } = useForm({
        mode: "all",
        defaultValues: {
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
      const new_data = {
        current_password: data.currentPassword,
        new_password: data.newPassword

      }
        changePassword(new_data);
    }

      
    return ( 
      <React.Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
          
                  
            <Controller
              name="currentPassword"
              control={control}
              render={({ field }) => (
              <FormControl fullWidth sx={{ mb: 3 }} variant="standard">
                  <TextField  
                      {...field} 
                      id="outlined-adornment-current-password"
                      label="Current Password"
                      type={values.showPassword ? 'text' : 'password'}
                      placeholder="Current Password"
                      error={errors.currentPassword ? true: false}
                      helperText={errors.currentPassword?.message}
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
              name="newPassword"
              control={control}
              render={({ field }) => (
              <FormControl fullWidth sx={{ mb: 3 }} variant="standard">
                  <TextField  
                      {...field} 
                      id="outlined-adornment-new-password"
                      label="New Password"
                      type={values.showPassword ? 'text' : 'password'}
                      placeholder="New Password"
                      error={errors.newPassword ? true: false}
                      helperText={errors.newPassword?.message}
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
              isSuccess &&  data? (
                <Alert severity="success" sx={{ mb: 2 }}>
                  "Your Password has been Changed Successfully!"
                </Alert>
              ): isError? (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {error.data.error.message}
                </Alert>
              ): null
            }

            <Fab type="submit" variant="extended" size="small" color="primary" aria-label="recharge"
            sx={{px: 6}}>
              { isLoading ? <CircularProgress />: "Change Password!"}
            </Fab>                             
        </form>
      </React.Fragment>
     );
}