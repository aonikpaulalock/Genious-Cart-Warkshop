import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Sppiner from '../../Seared/Sppiner/Sppiner';

const RequiredAuth = ({children}) => {
  const [user,loading] = useAuthState(auth);
  const location = useLocation();
  if(loading){
    return <Sppiner></Sppiner> ;
  }
  if(!user){
    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
  }
  return children;
};

export default RequiredAuth;