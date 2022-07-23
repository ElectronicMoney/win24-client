import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


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
                        Color Game Rules!
                    </Typography>
                </Item>
            </Grid>

            <Grid item xs={12} md={6}>
                <Item elevation={3}>
                    <Typography variant="h5" component="p" sx={{my: 2}}>
                        <strong style={{color:"green"}}>1. JOIN GREEN: </strong>if the result shows 1,3,7,9, you will get (Stake * 2) 196 
                        If the result shows 5, you will get (Stake * 1.5) 147
                    </Typography>

                    <Typography variant="h5" component="p" sx={{my: 2}}>
                        <strong style={{color:"red"}}>2. JOIN RED: </strong>if the result shows 2,4,6,8, you will get (Stake * 2) 196.
                        If the result shows 0, you will get (Stake * 1.5) 147
                    </Typography>

                    <Typography variant="h5" component="p" sx={{my: 2}}>
                        <strong style={{color:"violet"}}>3. JOIN VIOLET:</strong> if the result shows 0 or 5, you will get (Stake * 4.5) 441
                    </Typography>
                </Item>
            </Grid>

            <Grid item xs={12} md={6}>
                <Item elevation={3}>
                    <Typography variant="h5" component="p" sx={{my: 2}}>
                        <strong style={{color:"blue"}}>4. SELECT NUMBER:</strong> if the result is the same as the number you selected, 
                        you will get(Stake * 9)882
                    </Typography>

                    <Typography variant="h5" component="p" sx={{my: 2}}>
                        <strong style={{color:"#827717"}}>5. JOIN SMALL:</strong> if the result shows 0,1,2,3,4 you will get (Stake * 1.5)
                    </Typography>

                    <Typography variant="h5" component="p" sx={{my: 2}}>
                        <strong style={{color:"green"}}>6. JOIN BIG:</strong> if the result shows 5,6,7,8,9 you will get (Stake * 1.5)
                    </Typography>
                </Item>
            </Grid>

            </Grid>
        </React.Fragment>
    );
}
