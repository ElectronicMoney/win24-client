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
import { Alert } from '@mui/material';
import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginSchema } from "./schema"
import { useAuthApiMutation } from '../../services/authApi';
import { setAuthUser } from './authSlice';
import CircularProgress from "../../components/Feedback/CircularProgress"

  

export default function Form() {

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()
  let location   = useLocation();
  let from       = location.state?.from?.pathname || "/app";


  const [login, 
    {isLoading, 
      isError, 
      isSuccess, 
      error:authError, data:auth
    }] = useAuthApiMutation()


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
        resolver: yupResolver(loginSchema)
    });

    const onSubmit = data => {
      login(data)
    }

    React.useEffect(() => {

      if(isSuccess) {

        dispatch(setAuthUser({accessToken: auth.token}))
        // Send them back to the page they tried to visit when they were
        // redirected to the login page. Use { replace: true } so we don't create
        // another entry in the history stack for the login page.  This means that
        // when they get to the protected page and click the back button, they
        // won't end up back on the login page, which is also really nice for the
        // user experience.
        navigate(from, { replace: true });
      }
      
    })


    const authenticate = useSelector(state => state.auth)
    if (authenticate.isAuthenticated) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to={from} state={{ from: location }} replace />;
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

            {
              isError? (
                <Alert severity="error" sx={{ mb: 2 }}>{authError.data.error.message}</Alert>
              ): ""
            }

            <Fab type="submit" variant="extended" size="large" color="primary" aria-label="recharge"
            sx={{px: 6}}>
              { isLoading ? <CircularProgress />: "Login!"}
            </Fab>                             
        </form>
      </React.Fragment>
     );
}