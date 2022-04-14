import React from 'react';
import Google from '../../../images/Google.png'
import Github from '../../../images/Github.png'
import Facebook from '../../../images/facebook.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Sppiner from '../../Seared/Sppiner/Sppiner';
const SocialLogin = () => {
  const navigate = useNavigate()
  let errorElement ;
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, Gituser, Gitloading, Giterror] = useSignInWithGithub(auth);
  if(error || Giterror){
     errorElement = <p className="text-danger">Error: {error?.message} {Giterror?.message}</p>
  }
  if(user || Gituser){
    navigate('/home')
  }
  if(loading || Gitloading){
    return <Sppiner/>;
  }
  return (
    <div>
    <div className="d-flex align-items-center justify-content-center">
    <div className="border border-1 w-25 "></div>
      <p className="text-muted mt-3 mx-4">Or</p>
      <div  className="border border-1 w-25"></div>
    </div>
     {errorElement}
    <div className="d-flex lign-items-center justify-content-center">
      <button className="btn btn-info d-flex align-items-center justify-content-around" onClick={() => signInWithGoogle()}>
        <img src={Google} alt="" />
        <span className="mx-3">Google Signin</span>
      </button>
      <button className="btn btn-info d-flex align-items-center justify-content-around mx-5" onClick={() => signInWithGithub ()}>
        <img src={Github} alt="" />
        <span className="mx-3">Github Signin</span>
      </button>
      <button className="btn btn-info d-flex align-items-center justify-content-around">
        <img src={Facebook} alt="" />
        <span className="mx-3">Github Signin</span>
      </button>
    </div>
    </div>
  );
};

export default SocialLogin;