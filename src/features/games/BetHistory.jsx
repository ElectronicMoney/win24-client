import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Alert } from '@mui/material';
import Table from "../../components/DataDisplay/Table"
import Pagination from '../../components/Navigation/Pagination';
import { useGetBetsQuery } from '../../services/betsApi';
import LinearProgress from "../../components/Feedback/LinearProgress"


function BetHistory() {

    const [page, setPage] = React.useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };

    const { data, error, isLoading } = useGetBetsQuery(page, {
        pollingInterval: 3000,
    })


    return ( 
        <Typography variant='div' component="div"
        sx={{width:"100%"}}
        >
            {
                isLoading ? (
                    <Paper elevation={3}
                       sx={{
                            display:"flex", 
                            alignItems:"center", 
                            justifyContent:"center", 
                            mt:5, 
                            p:2
                        }}
                    >
                        <LinearProgress />
                    </Paper>

                ): data ? (
                    <Typography variant='div' component="div">
                        <Table isBet={true} bets={data.items} />
                        <Paper elevation={3}
                            sx={{
                                display:"flex", 
                                alignItems:"center", 
                                justifyContent:"center", 
                                mt:5, 
                                p:2
                            }}
                            >
                            <Pagination 
                                total={ data.total } 
                                size={ data.size } 
                                page={data.page} 
                                onChange={handleChange}
                            />
                        </Paper>
                    </Typography>

                ):  (
                    <Alert severity="error" sx={{ m: 2 }}>{error.data.error.message}</Alert>
                )
                
            }
        </Typography>
     );
}

export default BetHistory;