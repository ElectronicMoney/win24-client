import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import BarChartIcon from '@mui/icons-material/BarChart';
import PaymentsIcon from '@mui/icons-material/Payments';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Fab, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { purple } from '@mui/material/colors';
import Dialogue from "../../../components/Feedback/Dialogue"
import { AppContext } from '../../../contexts';
import CustomCard from '../../../components/Surfaces/CustomCard';
import UsersTable  from '../../../components/DataDisplay/UsersTable';
import SearchForm from "./SearchForm"
import Pagination from '../../../components/Navigation/Pagination';
import UserForm from "./UserForm"


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    marginBottom: "2rem"
  }));


  
const users = [
    {
        id:1, 
        game_id:876464,
        name:"James Brown", 
        username:"+63958688686", 
        referred_by:"+63958688699", 
        is_staff:false, 
        is_admin:true, 
        is_active:true, 
        wallet_balance:8555, 
        created_at:"2022-12-12:01:3", 
    },

    {
        id:2, 
        game_id:876464,
        name:"James Brown", 
        username:"+63958688686", 
        referred_by:"+63958688699", 
        is_staff:true,
        is_admin:false, 
        is_active:false, 
        wallet_balance:8555, 
        created_at:"2022-12-12:01:3", 
    },
        {
        id:3, 
        game_id:876464,
        name:"James Brown", 
        username:"+63958688686", 
        referred_by:"+63958688699", 
        is_staff:false,
        is_admin:false, 
        is_active:true, 
        wallet_balance:8555, 
        created_at:"2022-12-12:01:3", 
    },
        {
        id:4, 
        game_id:876464,
        name:"James Brown", 
        username:"+63958688686", 
        referred_by:"+63958688699", 
        is_staff:false,
        is_admin:false, 
        is_active:true, 
        wallet_balance:8555, 
        created_at:"2022-12-12:01:3", 
    },
        {
        id:5, 
        game_id:876464,
        name:"James Brown", 
        username:"+63958688686", 
        referred_by:"+63958688699", 
        is_staff:false,
        is_admin:false, 
        is_active:true, 
        wallet_balance:8555, 
        created_at:"2022-12-12:01:3", 
    },
        {
        id:6, 
        game_id:876464,
        name:"James Brown", 
        username:"+63958688686", 
        referred_by:"+63958688699", 
        is_staff:false,
        is_admin:false, 
        is_active:false, 
        wallet_balance:8555, 
        created_at:"2022-12-12:01:3", 
    },
    {
        id:7, 
        game_id:876464,
        name:"James Brown", 
        username:"+63958688686", 
        referred_by:"+63958688699", 
        is_staff:false,
        is_admin:false, 
        is_active:true, 
        wallet_balance:8555, 
        created_at:"2022-12-12:01:3", 
    },
        {
        id:8, 
        game_id:876464,
        name:"James Brown", 
        username:"+63958688686", 
        referred_by:"+63958688699", 
        is_staff:false,
        is_admin:false, 
        is_active:true, 
        wallet_balance:8555, 
        created_at:"2022-12-12:01:3", 
    },
    {
        id:9, 
        game_id:876464,
        name:"James Brown", 
        username:"+63958688686", 
        referred_by:"+63958688699", 
        is_staff:false,
        is_admin:false, 
        is_active:false, 
        wallet_balance:8555, 
        created_at:"2022-12-12:01:3", 
    },
    {
        id:10, 
        game_id:876464,
        name:"James Brown", 
        username:"+63958688686", 
        referred_by:"+63958688699", 
        is_staff:true,
        is_admin:false, 
        is_active:true, 
        wallet_balance:8555, 
        created_at:"2022-12-12:01:3", 
    }
]

export default function Users() {

    const { dialogue } = React.useContext(AppContext)

    const dialogActions = () => {
    return (
        <Grid container spacing={2} sx={{my:2}}>
          <Grid item xs={12} sx={{textAlign:"right"}} >
              <Fab 
                variant="extended" 
                size="small" 
                color="error" 
                aria-label="bet"
                sx={{px:3}}
                onClick={() => dialogue.closeDialogue()}
                >
                  Cancel
                </Fab>
          </Grid>
      </Grid>
    )
  }

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
                <Grid item xs={12} md ={3}>
                    <Item elevation={4}>
                        <Button 
                        fullWidth 
                        variant="contained" 
                        startIcon={<AddBoxIcon />} 
                        sx={{px: 5}} 
                        onClick={() => dialogue.openDialogue()}
                        >
                            Create New User
                        </Button>
                    </Item>
                  </Grid>

                  <Grid item xs={12} md ={9}>
                    <Item elevation={4}>
                        <SearchForm />
                    </Item>
                  </Grid>

                <Grid item xs={12}>
                  <UsersTable users={users}/>

                    <Paper elevation={3}
                        sx={{
                            display:"flex", 
                            alignItems:"center", 
                            justifyContent:"center", 
                            mt:5, 
                            p:2
                        }}
                    >
                        <Pagination />
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Dialogue 
                        color={purple[900]}
                        title="Create New User"
                        dialogActions={dialogActions}
                        >
                        <UserForm />
                    </Dialogue>
                </Grid>

            </Grid>
        </React.Fragment>
    );
}
