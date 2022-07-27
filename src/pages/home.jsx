import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import Marquee from "react-fast-marquee";
import {sliderItems} from '../utils'
import Card from '../components/Surfaces/Card'
import { useGetProfileQuery } from '../services/authApi';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));
  

export default function AppHome() {

    const {isLoading, isError, error, isSuccess, data:profile} = useGetProfileQuery()

    if(isLoading){
        console.log("Loading...")
    }
    if(isError){
        console.log(error)
    }

    if(isSuccess){
        console.log(profile)
    }
    return ( 
        <React.Fragment>
            <Grid container spacing={2}>

            <Grid item xs={12}>
                  <Item elevation={3}>
                      <Typography variant="h5" component={"h5"} sx={{textAlign: "center", fontWeight:500, color:"green"}}>
                        <AnnouncementIcon color="primary" /> LATEST ANNOUNCEMENT!
                      </Typography>
                      <Typography component={"div"}>
                        
                        <Marquee>
                            Invite your friends and Get 5% of their initial deposit!
                        </Marquee>
                      </Typography>
                  </Item>
              </Grid>

                {
                    sliderItems.map((item, index) => (
                    <Grid item xs={12} md ={6} lg={4} key={index}>
                        <Card title={item.name} url={item.url} alt={item.alt} >
                            {item.description}
                        </Card>
                    </Grid>
                    ))
                }

            </Grid>
        </React.Fragment>
    );
}
