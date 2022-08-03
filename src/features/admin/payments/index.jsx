import React from 'react';
import Grid from '@mui/material/Grid';
import BarChartIcon from '@mui/icons-material/BarChart';
import PaymentsIcon from '@mui/icons-material/Payments';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CustomCard from '../../../components/Surfaces/CustomCard';
import PaymentTabs from './PaymentTab';


export default function Users() {

    return ( 
        <React.Fragment>
            <Grid container spacing={4}>
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
                
                <Grid item xs={12}>
                    <PaymentTabs />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
