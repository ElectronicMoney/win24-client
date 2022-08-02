import React from 'react';
import { Alert } from '@mui/material';
import Fab from '@mui/material/Fab';
import { useDeleteUserMutation } from '../../../services/usersApi';
import CircularProgress from "../../../components/Feedback/CircularProgress"



function DeleteUser({userId}) {

    const userIdMemo = React.useMemo(() => {
        return userId
    },[userId])
    
    const [deleteUser, {isLoading, isError, isSuccess, error}] = useDeleteUserMutation()

    return ( 
        <React.Fragment>

            {
              isSuccess ? (
                <Alert severity="success" sx={{ mb: 2 }}>
                  "The user Account has been Deleted Successfully!"
                </Alert>
              ): isError? (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {error.data.error.message}
                </Alert>
              ): (
                <Alert severity="warning" sx={{ my: 3 }}>
                    Are You sure you want to Delete this user Account?
                </Alert>
              )
            }

            <Fab 
            variant="extended" 
            size="large" 
            color="primary" 
            aria-label="banUser"
            sx={{px: 6}}
            onClick={() => deleteUser(userIdMemo) }
            >
                { isLoading ? <CircularProgress />: "Ban User!"}
            </Fab>                             
        </React.Fragment>
     );
}

export default DeleteUser;