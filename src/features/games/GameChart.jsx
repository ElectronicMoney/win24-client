import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Alert } from '@mui/material';
import Table from "../../components/DataDisplay/Table"
import Pagination from '../../components/Navigation/Pagination';
import { useGetGamesQuery } from '../../services/gamesApi';
import LinearProgress from "../../components/Feedback/LinearProgress"


function GameChart() {

    const [page, setPage] = React.useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };

    const { 
        data, 
        error, 
        isLoading, 
    } = useGetGamesQuery(page)


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
                        <Table  games={data.items} />
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

export default GameChart;