import React from 'react';
import Grid from '@mui/material/Grid';
import BarChartIcon from '@mui/icons-material/BarChart';
import PaymentsIcon from '@mui/icons-material/Payments';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Paper } from '@mui/material';
import { useGetUsersQuery } from '../../../services/usersApi';
import Pagination from '../../../components/Navigation/Pagination'
import CustomCard from '../../../components/Surfaces/CustomCard';
import UsersTable  from '../../../containers/UsersTable';
import SearchForm from "./SearchForm"
import CreateUserForm from "./CreateUserForm"
import EditUserForm from "./EditUserForm"
import DeleteUser from "./DeleteUser"
import ActivateUser from "./ActivateUser"
import BanUser from "./BanUser"
import ViewUser from './ViewUser';



export default function Users() {

    const [page, setPage] = React.useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };


    // Using a query hook automatically fetches data and returns query values
    const { 
        data, 
        error, 
        isLoading, 
        isError, 
        isSuccess 
    } = useGetUsersQuery(page)
    // Individual hooks are also accessible under the generated endpoints:
    // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')


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
                  
                  {
                    isError ? (
                        <div>{error.message}</div>
                    ) : isLoading ? (
                        <div>Loading...</div>
                    ) :isSuccess ? (
                        <UsersTable 
                        users={data.items} 
                        searchForm={SearchForm} 
                        createUserForm={CreateUserForm} 
                        editUserForm={EditUserForm}
                        deleteUser={DeleteUser}
                        activateUser={ActivateUser}
                        banUser={BanUser}
                        viewUser={ViewUser}
                        />
                    ): null
                  }

                    <Paper elevation={3}
                        sx={{
                            display:"flex", 
                            alignItems:"center", 
                            justifyContent:"center", 
                            mt:5, 
                            p:2
                        }}
                    >

                        {
                            isSuccess ? (
                            <Pagination 
                                total={ data.total } 
                                size={ data.size } 
                                page={data.page} 
                                onChange={handleChange}
                            />
                            ): ""
                        }
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
