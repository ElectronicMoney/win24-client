import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import IconButton from '@mui/material/IconButton';


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
                        Customer Service!
                    </Typography>
                </Item>
            </Grid>


            <Grid item xs={12} md={6}>
                <Item elevation={3}>

                    <a href="https://web.whatsapp.com" target="_blank" rel="noreferrer"
                    
                    style={{textDecoration:"none"}}>
                        <IconButton variant="outlined">
                            <WhatsAppIcon color="success"/> WhatsApp
                        </IconButton>
                    </a>

                </Item>
            </Grid>


            <Grid item xs={12} md={6}>
                <Item elevation={3}>
                    <a href="https://telegram.org" target="_blank" rel="noreferrer"
                    style={{textDecoration:"none"}}
                    >
                        <IconButton variant="outlined">
                            <TelegramIcon sx={{color: "#2979ff"}}/> Telegram
                        </IconButton>
                    </a>

                </Item>
            </Grid>

            </Grid>
        </React.Fragment>
    );
}
