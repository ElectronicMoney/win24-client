import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LockIcon from '@mui/icons-material/Lock';
import {ErrorBoundary} from '../../errors/ErrorBandary'
import Button from "../../components/Inputs/Button"
import Logo  from '../../assets/images/logo.png'



const Div = styled("div")(() => ({
    display: 'flex',
    height: '100vh',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }));
  


function Login() {

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      
    return ( 
      <React.Fragment>
          
        <ErrorBoundary>
              <Div>
                  <Card sx={{ maxWidth: 345 }} raised>
                      <CardMedia
                      component="img"
                      height="140"
                      image={Logo}
                      alt="Logo"
                      />
                      <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                              Maganda Bet Admin Panel!
                          </Typography>

                          <FormControl fullWidth sx={{ my: 5 }} variant="standard">
                              <InputLabel htmlFor="standard-adornment-username">Username</InputLabel>
                              <Input
                                  id="username"
                                  value={values.username}
                                  onChange={handleChange('username')}
                                  startAdornment={
                                      <InputAdornment position="start">
                                          <AccountBoxIcon color='primary'/>
                                      </InputAdornment>
                                  }
                              />
                          </FormControl>

                          <FormControl fullWidth sx={{ mb: 5 }} variant="standard">
                              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                              <Input
                                  id="password"
                                  type={values.showPassword ? 'text' : 'password'}
                                  value={values.password}
                                  onChange={handleChange('password')}
                                  startAdornment={
                                      <InputAdornment position="start">
                                          <LockIcon color='primary' />
                                      </InputAdornment>
                                  }
                                  endAdornment={
                                      <InputAdornment position="end">
                                        <IconButton
                                          aria-label="toggle password visibility"
                                          onClick={handleClickShowPassword}
                                          onMouseDown={handleMouseDownPassword}
                                        >
                                          {values.showPassword ? <VisibilityOff color='primary' /> : <Visibility color='primary' />}
                                        </IconButton>
                                      </InputAdornment>
                                    }
                              />

                          </FormControl>

                      </CardContent>
                      <CardActions>
                          <Button fullWidth variant="contained" color="primary">Admin Login!</Button>
                      </CardActions>
                  </Card>
              </Div>
        </ErrorBoundary>
      </React.Fragment>

     );
}

export default Login;