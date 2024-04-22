import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function SignUp() {
  const toastOption={
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
};
let navigate = useNavigate();
const [credentials, setCredentials] = useState({name:'', email:'' , cllgname:'', password:'', cpassword:''})
  const handleOnSubmit=async(e)=>{
    e.preventDefault();

     // Check if any field is empty
     if (!credentials.name || !credentials.email || !credentials.cllgname || !credentials.password || !credentials.cpassword) {
     toast.error('All fields are mandatory. Please fill in all the fields.');
     return;
    }
    if (credentials.password !== credentials.cpassword) {
        toast.error('Password and Confirm Password should be same.');
        return;
    }

    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name: credentials.name, email: credentials.email, cllgname: credentials.cllgname, password: credentials.password})  
  });
  const json = await response.json();
  console.log(json);
  if(json.success){
    localStorage.setItem('token',json.authtoken);
    navigate('/');
    toast.success("Account Created Successfully");
    }
    else{
      toast.error("Invalid Details");
    }
}
const onChange=(e)=>{
  setCredentials({...credentials,[e.target.name]: e.target.value})
}
  return (
    <>
    <div className='stu-SignUp'>
    <div className='signup-img'>
        <video width="600" height="400" autoPlay muted loop>
        <source src={require('../images/5.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>   
    <div className='signup-container'>
    <img src={require('../images/logo.png')} alt='Logo'/>
        <h2>Sign Up as student to continue with <span className='head12'>HTG Events</span></h2>
        <br />
        <form onSubmit={handleOnSubmit}>
            <div className="margin">
                <label htmlFor="Name" className="form-label">Name</label>
                <input type="text" className="form-control" id='name' name='name' placeholder='Enter Your Name' value={credentials.name} onChange={onChange} autoComplete="username"/>
            </div>
            <br />
            <div className="margin1">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" placeholder='Enter Your Email ID' id='email' name='email' value={credentials.email} onChange={onChange} autoComplete="username"/>
            </div>
            <br />
            <div className="margin1">
                <label htmlFor="CllgName" className="form-label">College Name</label>
                <input type="text" className="form-control" placeholder='Enter Your College Name' id='cllgname' name='cllgname' value={credentials.cllgname} onChange={onChange} autoComplete="username"/>
            </div>
            <br />
            <div className="margin1">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" placeholder='Enter Your Password' id='password' name='password' value={credentials.password} minLength={5} required onChange={onChange} autoComplete='new-password'/>
            </div>
            <br />
            <div className="margin1">
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" placeholder='Confirm Password' id='cpassword' name='cpassword' value={credentials.cpassword} minLength={5} required onChange={onChange} autoComplete='new-password'/>
            </div>
            <br />
          <button type="submit" className="signup-btn" >Sign Up</button>
        </form>
        <br />
        <p>Already've an account ? <Link to='/login'>Login</Link></p>
        <p>OR</p>
        <div className='signup-moreOpt'>
        <button tpe="submit" className="signup-google" ><img src={require('../images/google.png')} alt="" className='google'/>Continue with Google</button> <br />
        <button type="submit" className="signup-facebook" ><img src={require('../images/facebook.png')} alt="" className='facebook'/>Continue with Facebook</button>
        </div>
    </div>
    </div>
    <ToastContainer {...toastOption}/>
    </>
  )
}

export default SignUp
