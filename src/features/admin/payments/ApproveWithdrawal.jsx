import React from 'react';
import { Alert } from '@mui/material';
import Fab from '@mui/material/Fab';
import { useUpdateWithdrawalMutation } from '../../../services/withdrawalsApi';
import CircularProgress from "../../../components/Feedback/CircularProgress"



function ApprroveWithdrawal({withdrawalId}) {

    const withdrawalIdMemo = React.useMemo(() => {
        return withdrawalId
    },[withdrawalId])
    
    const [updateRecharge, {isLoading, isError, isSuccess, error, data}] = useUpdateWithdrawalMutation()

    return ( 
        <React.Fragment>

            {
              isSuccess && data ? (
                <Alert severity="success" sx={{ mb: 2 }}>
                  "The Withdrawal Payment has been Approved Successfully!"
                </Alert>
              ): isError? (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {error.data.error.message}
                </Alert>
              ): (
                <Alert severity="info" sx={{ my: 3 }}>
                    Are You sure you want to Approve this Withdrawal Payment?
                </Alert>
              )
            }

            <Fab 
            variant="extended" 
            size="large" 
            color="primary" 
            aria-label="banUser"
            sx={{px: 6}}
            onClick={() => updateRecharge({id:withdrawalIdMemo, status:"COMPLETED"}) }
            >
                { isLoading ? <CircularProgress />: "Cancel Withdrawal!"}
            </Fab>                             
        </React.Fragment>
     );
}


export default ApprroveWithdrawal;