import React from 'react';
import {
  useLocation,
  Navigate,
} from "react-router-dom";

import { useSelector } from 'react-redux';



export const AdminAuth = ({ children }) => {


  let location = useLocation();

  const auth = useSelector(state => state.auth)


  if (!auth.isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/admin" state={{ from: location }} replace />;
  }

  return children;

}





