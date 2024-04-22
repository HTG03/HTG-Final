import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function CllgSignUp() {
  const toastOption={
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
};
let navigate = useNavigate();
const [credentials, setCredentials] = useState({cllgname:'', cllgemail:'' , address:'', password:'', cpassword:''})
  const handleOnSubmit=async(e)=>{
    e.preventDefault();

     // Check if any field is empty
     if (!credentials.cllgname || !credentials.cllgemail || !credentials.address || !credentials.password || !credentials.cpassword) {
     toast.error('All fields are mandatory. Please fill in all the fields.');
     return;
    }
    if (credentials.password !== credentials.cpassword) {
        toast.error('Password and Confirm Password should be same.');
        return;
    }

    const response = await fetch("http://localhost:5000/api/auth1/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({cllgname: credentials.cllgname, cllgemail: credentials.cllgemail, address: credentials.address, password: credentials.password})  
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
        <h2>Sign Up to continue with <span className='head12'>HTG Events</span></h2>
        <form onSubmit={handleOnSubmit}>
            <div className="margin">
                <label htmlFor="Name" className="form-label">College Name</label>
                <input type="text" className="form-control" id='cllgname' name='cllgname' placeholder='Enter Your College Name'value={credentials.cllgname} onChange={onChange} autoComplete="username"/>
            </div>
            <br />
            <div className="margin1">
                <label htmlFor="email" className="form-label">College Email address</label>
                <input type="email" className="form-control" placeholder='Enter Your College Email ID' id='cllgemail' name='cllgemail' value={credentials.cllgemail} onChange={onChange} autoComplete="username"/>
            </div>
            <br />
            <div className="margin1">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" placeholder='Enter Your College Address' id='address' name='address' value={credentials.address} onChange={onChange} autoComplete="username"/>
            </div>
            <br />
            <div className="margin1">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" placeholder='Enter Your Password' id='password' name='password' value={credentials.password} onChange={onChange} autoComplete="username"/>
            </div>
            <br />
            <div className="margin1">
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" placeholder='Confirm Password' id='cpassword' name='cpassword' value={credentials.cpassword} onChange={onChange} autoComplete="username"/>
            </div>
            <br />
          <button type="submit" className="signup-btn" >Sign Up</button>
        </form>
        <br />
        <p>Already've an account ? <Link to='/Cllglogin'>Login</Link></p>
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

export default CllgSignUp
