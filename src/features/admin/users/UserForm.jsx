import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Fab from '@mui/material/Fab';
import { userSchema } from "./schema"
import {roles } from "../../../utils"
import { MenuItem } from '@mui/material';
  

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
            name: "",
            username: "",
            password: "",
            confirmPassword: "",
            role:"Player",
        },
        resolver: yupResolver(userSchema)
    });

    const onSubmit = data => {
        console.log(data);
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
                      label="Enter Full Name"
                      placeholder="Full Name"
                      error={errors.name ? true: false}
                      helperText={errors.name?.message}
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
              name="username"
              control={control}
              render={({ field }) => (
              <FormControl fullWidth sx={{ mb: 3 }} variant="standard">
                  <TextField  
                      {...field} 
                      id="outlined-adornment-phoneNumber"
                      label="Enter User Name"
                      placeholder="User Name"
                      error={errors.username ? true: false}
                      helperText={errors.username?.message}
                      fullWidth
                      size="small"
                      InputProps={{
                      startAdornment: (
                      <InputAdornment position="start"> 
                          <PersonIcon color="primary" />
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
                      label="Enter Password"
                      type={values.showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      error={errors.password ? true: false}
                      helperText={errors.password?.message}
                      fullWidth
                      size="small"
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
                      size="small"
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
                name="role"
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth sx={{ mb: 3 }} variant="standard">
                    <TextField  {...field}
                        id="outlined-adornment-role"
                        label="Select User Role"
                        select
                        error={errors.role ? true: false}
                        helperText={errors.role?.message}
                        fullWidth
                        size="small"
                    >
                        {roles.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                  </TextField>
                </FormControl>)}
            />

            <Fab type="submit" variant="extended" size="large" color="primary" aria-label="recharge"
            sx={{px: 6}}>
            Create New User!
            </Fab>                             
        </form>
      </React.Fragment>
     );
}