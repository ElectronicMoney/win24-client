import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Divider, Grid, Typography } from '@mui/material';
import { keyframes } from '@mui/material';


const moveUp = keyframes`
  0%{
    top: -40px
  }

  100% {
    top: -60px
  }
`;


const Item = styled(Paper)(({ theme, color }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    position: "relative",
    top: "-40px",
    left: "0",
    background: `linear-gradient(${color}, ${color})`,
    width: "5rem",
    height:"5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
        animation: `${moveUp} 1s ease`,
        top: "-60px"
    }
}));



function CustomCard({color, title, subTitle, main, content, icon:CardIcon}) {
    return ( 
    <React.Fragment>
        <Grid container spacing={2} sx={{mt:2}}>
            <Grid item xs={12}>
                <Paper elevation={4} sx={{p:2}}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Item elevation={4} color={color}>
                                <CardIcon sx={{color:"#fff",fontSize:"4rem"}}  />
                            </Item>
                        </Grid>

                        {/* <Grid item xs={4.5}>
                        </Grid> */}

                        <Grid item xs={8} sx={{textAlign:"right"}}>
                            <Typography variant='p' component="p">{title}</Typography>
                            <Typography variant='h6' component="h6"><strong>{subTitle}</strong></Typography>
                        </Grid>
                   
                    <Grid item xs={12}>
                        <Divider />
                        <strong style={{color:"green"}}>{main}</strong> 
                        <span> {content} </span>
                    </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    </React.Fragment>
    );
}

export default CustomCard;