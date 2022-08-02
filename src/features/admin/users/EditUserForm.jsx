import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonIcon from '@mui/icons-material/Person';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Fab from '@mui/material/Fab';
import { userSchema } from "./schema"
import {roles } from "../../../utils"
import { MenuItem } from '@mui/material';
import { Alert } from '@mui/material';
import { useUpdateUserMutation } from '../../../services/usersApi';
import CircularProgress from "../../../components/Feedback/CircularProgress"
  

export default function Form({userId, name, username, role}) {
  

  const userIdMemo = React.useMemo(() => {
      return userId
  },[userId])
  
  const [updateUser, {isLoading, isError, isSuccess, error, data:updatedUser}] = useUpdateUserMutation()


  const { handleSubmit, control, formState:{ errors } } = useForm({
        mode: "all",
        defaultValues: {
            name: name || "",
            username: username || "",
            role: role || "Player",
        },
        resolver: yupResolver(userSchema)
    });
    

    const onSubmit = data => {
      let is_admin = false
      let is_staff = false
      let is_agent = false

      if ( data.role === "Admin"){
        is_admin = true
      } else if (data.role === "Staff") {
        is_staff = true
      }else if (data.role === "Agent") {
        is_agent = true
      }else {
        is_admin = false
      }

      const user = {id: userIdMemo, ...data, is_admin, is_staff, is_agent}

      updateUser(user);
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

            {
              isSuccess && updatedUser ? (
                <Alert severity="success" sx={{ mb: 2 }}>
                  "The user Account has been Updated Successfully!"
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
            sx={{px: 6}}>
              { isLoading ? <CircularProgress />: "Save User!"}
            </Fab>                             
        </form>
      </React.Fragment>
     )
}
