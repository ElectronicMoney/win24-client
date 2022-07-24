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
    top: -80px
  }
`;


const Item = styled(Paper)(({ theme, color }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    position: "relative",
    top: "-40px",
    left: "50%",
    transform:`translateX(-50%)`,
    background: `linear-gradient(${color}, ${color})`,
    width: "100%",
    height:"25vh",
}));



function ChartCard({color, title, subTitle, content, icon:CardIcon}) {
    return ( 
    <React.Fragment>
        <Grid container spacing={2} sx={{pt:"40px"}}>
            <Grid item xs={12}>
                <Paper elevation={4} sx={{
                    p:2,
                    "&:hover": {
                    "& #chart": {
                        animation: `${moveUp} 1s ease`,
                            top: "-80px"
                        }
                    }
                }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Item elevation={12} color={color} id="chart">
                                <CardIcon sx={{color:"#fff",fontSize:"4rem"}}  />
                            </Item>
                        </Grid>
                   
                        <Grid item xs={12}>
                            <Divider />
                            
                            <Typography variant="h6" component="h5" sx={{mb: 5}}>
                                <strong style={{color:"green"}}>{title}</strong><br />
                                <span> {subTitle} </span>
                            </Typography>
                            <Typography variant="p" component="p">{content}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    </React.Fragment>
    );
}

export default ChartCard;