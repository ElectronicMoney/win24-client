import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import AppRouter from './router'
import { setAuthUser } from './features/auth/authSlice';
import { useRefreshTokenApiMutation } from './services/authApi';


function App() {

  const dispatch = useDispatch()

  const [refreshToken, { isLoading, isSuccess, data }] = useRefreshTokenApiMutation()

  const auth = useSelector(state => state.auth)


  React.useEffect(() => {

    setInterval(() => {
      // Run in the background every 1o minutes or 36000000 
      if(auth.isAuthenticated){

        refreshToken()
      }
    }, 36000000)
  })

  if (isLoading) {
      console.log("Creating Refresh token in the background...") 
  }

  if(isSuccess) {
    dispatch(setAuthUser({accessToken: data.token}))
  }

  return ( 
    <React.Fragment>
      <AppRouter />
    </React.Fragment>
   );
}

export default App;