import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const toastOption={
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
};
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({email: '', password: ''})
  const handleOnSubmit=async(e)=>{
    e.preventDefault();

    // Check if email is empty
  if (!credentials.email) {
    toast.error('Email is required. Please enter your email.');
    return;
  }

  // Check if password is empty
  if (!credentials.password) {
    toast.error('Password is required. Please enter your password.');
    return;
  }

    const response = await fetch("http://localhost:5000/api/auth/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email: credentials.email, password: credentials.password})  
    });
    const json = await response.json();
    console.log(json); 
    if(json.success){
      //save the auth token and redirect
      localStorage.setItem('token',json.authtoken);
      toast.success("Logged in Successfully");
      navigate('/');
    }
    else{
      toast.error("Invalid Details");
    }
  }
  const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]: e.target.value })
  }
  return (
    <>
    <div className='stu-login'>
    <div className='login-container'>
    <img className='login-logo' src={require('../images/logo.png')} alt='Logo'/>
        <h2>Login as student with <span className='head12'>HTG Events</span></h2>
        <form onSubmit={handleOnSubmit}>
            <div className="margin">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id='email' name='email' placeholder='Enter Your Email Id' value={credentials.email} onChange={onChange} autoComplete="username"/>
            </div>
            <br />
            <div className="margin1">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" placeholder='Enter Your Password' id='password' name='password' value={credentials.password} onChange={onChange} autoComplete="current-password"/>
            </div>
            <br />
          <button type="submit" className="login-btn" >Login</button>
        </form>
        <br />
        <span className='forgot'><Link to='/forget'>Forgot Password?</Link></span>
        <p>Don't have an account ? <Link to='/sign'>Sign up</Link></p>
        <p>OR</p>
        <div className='login-moreOpt'>
        <button tpe="submit" className="login-google" ><img src={require('../images/google.png')} alt="" className='google'/>Continue with Google</button> <br />
        <button type="submit" className="login-facebook" ><img src={require('../images/facebook.png')} alt="" className='facebook'/>Continue with Facebook</button>
        </div>
    </div>
    <div className='login-img'>
        <img src={require('../images/3.jpg')} alt='img1' width={1050}/>
    </div>
    </div>
    <ToastContainer {...toastOption}/>
    </>
  )
}

export default Login;
