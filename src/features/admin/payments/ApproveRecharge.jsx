import React from 'react';
import { Alert } from '@mui/material';
import Fab from '@mui/material/Fab';
import { useUpdateRechargeMutation } from '../../../services/rechargesApi';
import CircularProgress from "../../../components/Feedback/CircularProgress"



function ApproveRecharge({rechargeId}) {

    const rechargeIdMemo = React.useMemo(() => {
        return rechargeId
    },[rechargeId])
    
    const [updateRecharge, {isLoading, isError, isSuccess, error, data}] = useUpdateRechargeMutation()

    return ( 
        <React.Fragment>

            {
              isSuccess && data ? (
                <Alert severity="success" sx={{ mb: 2 }}>
                  "The Recharge Payment has been Approved Successfully!"
                </Alert>
              ): isError? (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {error.data.error.message}
                </Alert>
              ): (
                <Alert severity="info" sx={{ my: 3 }}>
                    Are You sure you want to Approve this Recharge Payment?
                </Alert>
              )
            }

            <Fab 
            variant="extended" 
            size="large" 
            color="primary" 
            aria-label="banUser"
            sx={{px: 6}}
            onClick={() => updateRecharge({id:rechargeIdMemo, status:"COMPLETED"}) }
            >
                { isLoading ? <CircularProgress />: "Approve Recharge!"}
            </Fab>                             
        </React.Fragment>
     );
}


export default ApproveRecharge;