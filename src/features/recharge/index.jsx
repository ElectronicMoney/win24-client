import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Alert } from '@mui/material';
import { ErrorBoundary } from "../../errors/ErrorBandary"
import LinearProgress from "../../components/Feedback/LinearProgress"
import Table from '../../components/DataDisplay/Table'
import Form from "./Form"
import Pagination from '../../components/Navigation/Pagination';
import { useGetRechargesQuery } from '../../services/rechargesApi';
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


    const { data, error, isLoading } = useGetRechargesQuery(page)

    return ( 
        <React.Fragment>
            <Grid container spacing={2} >

                <Grid item xs={12}>
                  <ErrorBoundary>
                      <React.Suspense fallback={<LinearProgress />}>
                          <AccountBox />
                      </React.Suspense>
                  </ErrorBoundary>

                <Grid item xs={12}>
                    <Item elevation={3}>
                        <Form />
                    </Item>
                </Grid>
                
              </Grid>

                <Grid item xs={12}>
                    <Item elevation={3}>
                        <Typography variant="h5" component="h2" sx={{textAlign:"center"}}>Recharge History!</Typography>
                    </Item>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant='div' component="div">
                    {
                      isLoading ? (
                        <Stack spacing={1}>
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                            <Skeleton variant="text" />
                            <Skeleton variant="rectangular" width={220} height={100} />
                        </Stack>
                      ): data ? (
                        <>
                          <Table isTransactions={true} transactions={data.items} />
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
                        </>
                      ): (
                        <Alert severity="error" sx={{ m: 2 }}>{error.data.error.message}</Alert>
                      )
                    }
                     
                  </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
