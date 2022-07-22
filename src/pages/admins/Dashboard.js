import React from 'react';
import Grid from '@mui/material/Grid';
import BarChartIcon from '@mui/icons-material/BarChart';
import PaymentsIcon from '@mui/icons-material/Payments';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CustomCard from '../../components/Surfaces/CustomCard';
import ChartCard from '../../components/Surfaces/ChartCard';
import BarChart from '../../components/Charts/BarChart';
import LineChart from '../../components/Charts/LineChart';
import AreaChart from '../../components/Charts/AreaChart';

  

export default function Dashboard() {
    return ( 
        <React.Fragment>
            <Grid container spacing={4}>

                <Grid item xs={12} md={6} lg={4}>
                    <ChartCard
                    color="#1a237e" 
                    icon={BarChart} 
                    title="Today's Recharge"
                    subTitle="(+15%) increase in today recharge."
                    content="updated 5 hours ago"
                    />
                </Grid>


                <Grid item xs={12} md ={6} lg={4}>
                    <ChartCard
                    color="#4a148c" 
                    icon={LineChart} 
                    title="Today's Withdrawal"
                    subTitle="(+5%) increase in today withdrawals."
                    content="updated 30 min ago"
                    />

                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <ChartCard
                    color="#212121" 
                    icon={AreaChart} 
                    title="Today's Bets"
                    subTitle="(+20%) increase in today bets."
                    content=" Just updated"
                    />

                </Grid>


                <Grid item xs={12} md ={6} lg={3}>
                    <CustomCard 
                    color="#4a148c" 
                    icon={BarChartIcon} 
                    title="Today's Users"
                    subTitle="215"
                    main="+5%"
                    content="than yesterday"
                    />
                </Grid>
                
                <Grid item xs={12} md ={6} lg={3}>
                    <CustomCard 
                    color="green" 
                    icon={PaymentsIcon} 
                    title="Recharge"
                    subTitle="412"
                    main="+65%"
                    content="Than last month"
                    />
                </Grid>
                
                <Grid item xs={12} md ={6} lg={3}>
                    <CustomCard 
                    color="#b71c1c" 
                    icon={CreditCardIcon} 
                    title="Withdrawals"
                    subTitle="12"
                    main="+5%"
                    content="Than last week"
                    />
                </Grid>
                
                <Grid item xs={12} md ={6} lg={3}>
                    <CustomCard 
                    color="#212121" 
                    icon={SportsEsportsIcon} 
                    title="Today's Bets"
                    subTitle="215"
                    content=" Just updated"
                    />
                </Grid>

            </Grid>
        </React.Fragment>
    );
}
