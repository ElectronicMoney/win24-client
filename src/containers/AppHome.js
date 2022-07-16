import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import Marquee from "react-fast-marquee";
import {sliderItems} from '../utils'
import Card from '../components/Surfaces/Card'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));
  

export default function AppHome() {
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

                <Grid item xs={12} md={6} lg={4}>
                    <Item elevation={3}>
                        <Typography paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                            enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                            imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                            Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                            Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                            nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                            leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                            feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                            sapien faucibus et molestie ac.Odio morbi quis commodo odio aenean sed adipiscing. 
                        </Typography>
                    </Item>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Item elevation={3}>
                        <Typography paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                            enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                            imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                            Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                            Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                            nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                            leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                            feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                            sapien faucibus et molestie ac.Odio morbi quis commodo odio aenean sed adipiscing. 
                        </Typography>
                    </Item>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Item elevation={3}>
                        <Typography paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                            enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                            imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                            Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                            Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                            nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                            leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                            feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                            sapien faucibus et molestie ac.Odio morbi quis commodo odio aenean sed adipiscing. 
                        </Typography>
                    </Item>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
