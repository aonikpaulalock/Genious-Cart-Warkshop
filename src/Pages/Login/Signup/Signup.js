import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Signup.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
const Signup = () => {
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);
  const [updateProfile, updating, hooksError] = useUpdateProfile(auth);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  let errorElement;
  if (error) {
    errorElement = <h6 className="text-danger">Error: {error?.message}</h6>
  }
  if (user) {
    console.log('user', user);
  }
  const handleSignup = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // 1st Way To set Check
    // const aggree = event.target.terms.checked ;
    // if(aggree){
    //   createUserWithEmailAndPassword(email, password);
    // }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate('/home')
    console.log(user);
  }
  return (
    <div>
      <h2 className="text-center text-success my-5">Please Signup</h2>
      <form className="form-container" onSubmit={handleSignup}>
        <input type="text" name="name" placeholder="Enter Your Name" />
        <br />
        <input type="email" name="email" placeholder="Enter Your Email" />
        <br />
        <input type="password" name="password" placeholder="Enter Your Password" />
        <input type="checkbox" name="terms" className="my-4" onClick={() => setAgree(!agree)} />
        {/* <label className={agree ? 'text-success ms-2':'text-danger'} htmlFor="terms">Accept Ginious Car Yerms An Condisition</label> */}

        <label className={`ms-2 ${agree ? 'text-success' : 'text-danger'}`} htmlFor="terms">Accept Ginious Car Yerms An Condisition</label>
        <br />
        <input
          type='submit'
          disabled={!agree}
          value="Signup"
          className="btn btn-primary" />
        <br />
        {errorElement}
        <p className="text-muted py-2 text-center fs-4">Already Have An Account ? <Link to='/login' className="text-success text-decoration-none">Login</Link></p>
      </form>
      <SocialLogin />
    </div>
  );
};

export default Signup;