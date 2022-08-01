import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Alert } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { ErrorBoundary } from "../../errors/ErrorBandary"
import LinearProgress from "../../components/Feedback/LinearProgress"
import Table from '../../components/DataDisplay/Table'
import Form from "./Form"
import Pagination from '../../components/Navigation/Pagination';
import { useGetWithdrawalsQuery } from '../../services/withdrawalsApi';
const AccountBox = React.lazy(() => import("../../containers/AccountBox"));

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));
  

export default function Recharge() {
    const [page, setPage] = React.useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };


    const { isLoading, isError, isSuccess, error, data:withdraw } = useGetWithdrawalsQuery(page)

    return ( 
        <React.Fragment>
            <Grid container spacing={2} >

              <Grid item xs={12}>
                <ErrorBoundary>
                    <React.Suspense fallback={<LinearProgress />}>
                        <AccountBox />
                    </React.Suspense>
                </ErrorBoundary>
              </Grid>

              <Grid item xs={12}>
                  <Item elevation={3}>
                      <Form />
                  </Item>
              </Grid>

                <Grid item xs={12}>
                    <Item elevation={3}>
                        <Typography variant="h5" component="h2" sx={{textAlign:"center"}}>
                          Withdraw History!
                        </Typography>
                    </Item>
                </Grid>

                <Grid item xs={12}>
                    {
                      isLoading ? (
                        <Stack spacing={1}>
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                            <Skeleton variant="rectangular" width={220} height={100} />
                        </Stack>
                      ): isSuccess && withdraw ? (
                          <>
                            <Table isTransactions={true} transactions={withdraw.items} />
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
                                    total={ withdraw.total } 
                                    size={ withdraw.size } 
                                    page={withdraw.page} 
                                    onChange={handleChange}
                                />
                            </Paper>
                          </>
                      ): isError ? (
                        <Alert severity="error" sx={{ mb: 2 }}>{error.data.error.message}</Alert>
                      ): null

                    }
                </Grid>

            </Grid>
        </React.Fragment>
    );
}
