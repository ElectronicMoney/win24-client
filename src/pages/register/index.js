import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import {ErrorBoundary} from '../../errors/ErrorBandary'
import Logo  from '../../assets/images/logo.png'
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
                </Card>
            </Div>
      </ErrorBoundary>
     );
}

