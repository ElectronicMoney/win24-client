import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import {ErrorBoundary} from '../../errors/ErrorBandary'
import Button from "../../components/Inputs/Button"
import Logo  from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import Form from "./Form"



const Div = styled("div")(() => ({
    display: 'flex',
    height: '100vh',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }));
  


export default function Register() {
    
    return ( 
      <ErrorBoundary>
            <Div>
                <Card sx={{ maxWidth: 345 }} raised>
                    <CardMedia
                    component="img"
                    height="150"
                    image={Logo}
                    alt="Logo"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Register with Maganda Bet!
                        </Typography>
                        <Form />
                    </CardContent>
                    <CardActions>
                        <Typography variant="p" component="p" sx={{textAlign:"center"}}>
                            <strong style={{ padding: "10px"}}>You already have an Account?</strong>
                            <Button size="small" variant="outlined" color="primary" to="/login" component={Link}>
                                Login!
                            </Button>
                        </Typography>
                    </CardActions>
                </Card>
            </Div>
      </ErrorBoundary>
     );
}
