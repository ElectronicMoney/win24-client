import React from 'react';
import { Alert } from '@mui/material';
import Fab from '@mui/material/Fab';
import { useUpdateUserMutation } from '../../../services/usersApi';
import CircularProgress from "../../../components/Feedback/CircularProgress"



function BanUser({userId}) {

    const userIdMemo = React.useMemo(() => {
        return userId
    },[userId])
    
    const [updateUser, {isLoading, isError, isSuccess, error, data}] = useUpdateUserMutation()

    return ( 
        <React.Fragment>

            {
              isSuccess && data ? (
                <Alert severity="success" sx={{ mb: 2 }}>
                  "The user has been Banned Successfully!"
                </Alert>
              ): isError? (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {error.data.error.message}
                </Alert>
              ): (
                <Alert severity="warning" sx={{ my: 3 }}>
                    Are You sure you want to Ban this user Account?
                </Alert>
              )
            }

            <Fab 
            variant="extended" 
            size="large" 
            color="primary" 
            aria-label="banUser"
            sx={{px: 6}}
            onClick={() => updateUser({id:userIdMemo, is_active:false}) }
            >
                { isLoading ? <CircularProgress />: "Ban User!"}
            </Fab>                             
        </React.Fragment>
     );
}

export default BanUser;