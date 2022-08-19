import React from 'react';
import { Alert } from '@mui/material';
import Fab from '@mui/material/Fab';
import { useUpdateWithdrawalMutation } from '../../../services/withdrawalsApi';
import CircularProgress from "../../../components/Feedback/CircularProgress"



function CancelWithdrawal({withdrawalId}) {

    const withdrawalIdMemo = React.useMemo(() => {
        return withdrawalId
    },[withdrawalId])
    
    const [updateWithdrawal, {isLoading, isError, isSuccess, error, data}] = useUpdateWithdrawalMutation()

    return ( 
        <React.Fragment>

            {
              isSuccess && data ? (
                <Alert severity="success" sx={{ mb: 2 }}>
                  "The user Withdrawal Payment has been Cancelled Successfully!"
                </Alert>
              ): isError? (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {error.data.error.message}
                </Alert>
              ): (
                <Alert severity="warning" sx={{ my: 3 }}>
                    Are You sure you want to Cancel this user Withdrawal payment?
                </Alert>
              )
            }

            <Fab 
            variant="extended" 
            size="large" 
            color="primary" 
            aria-label="banUser"
            sx={{px: 6}}
            onClick={() => updateWithdrawal({id:withdrawalIdMemo, status:"CANCELLED"}) }
            >
                { isLoading ? <CircularProgress />: "Cancel Withdrawal!"}
            </Fab>                             
        </React.Fragment>
     );
}

export default CancelWithdrawal;