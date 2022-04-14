import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef} from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import auth from '../../../firebase.init';
import Sppiner from '../../Seared/Sppiner/Sppiner';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate()
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const emailRef = useRef('');
  const passwordRef = useRef('');
  let errorElement ;
  if(loading || sending){
    return <Sppiner></Sppiner>;
  }
  if(user){
    navigate(from, { replace: true })
    console.log(user);
   }
   if(error || resetError){
    errorElement = <h6 className="text-danger">Error: {error?.message} {resetError?.message}</h6>
   }
  const handleSubmitButton = event => {
    event.preventDefault();
    const email = emailRef.current.value; 
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email,password)
  }
  const resetPassword = async () => {
    const email = emailRef.current.value; 
    await sendPasswordResetEmail(email);
    toast("Password Reset Process done")
  }
  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center text-success fw-bold my-4">Please-Login</h2>
      <Form onSubmit={handleSubmitButton}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" ref={emailRef} placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
        <Form.Control type="password" ref={passwordRef} placeholder="Password" required/>
        </Form.Group>
        <Button variant="primary" type="submit" className="px-5">
          Login
        </Button>
        {errorElement}
        <p className="text-muted py-3 fw-lighter">New In Genious Car Center ? <Link to='/signup' className="text-success text-decoration-none">Create An Account</Link></p>

        <p className="text-muted text-center fs-5 mb-0">Forget Password ?<button className="text-primary text-decoration-none btn btn-link fs-5 mb-0" onClick={resetPassword} > Reset Password </button></p>

      </Form>
      <SocialLogin/>
      <ToastContainer/>
    </div>
  );
};

export default Login;