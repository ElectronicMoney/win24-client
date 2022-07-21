import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Form from "./Form"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));
  

export default function Wallet() {

    return ( 
        <React.Fragment>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <Item elevation={3}>
                    <Typography variant="h5" component="h2" sx={{textAlign:"center"}}>
                        My Settings!
                    </Typography>
                </Item>
            </Grid>


            <Grid item xs={12} >
                <Item elevation={3}>
                    <Typography variant="h5" component="h2" sx={{textAlign:"center", mb:5}}>
                        Change Password!
                    </Typography>

                    <Form />
                </Item>
            </Grid>



            </Grid>
        </React.Fragment>
    );
}
