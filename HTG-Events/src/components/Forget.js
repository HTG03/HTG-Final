import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function Forget() {
  const toastOption={
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
};
let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (!credentials.newPassword || !credentials.confirmPassword) {
      toast.error('All fields are mandatory. Please fill in all the fields.');
      return;
     }
     if (credentials.newPassword !== credentials.confirmPassword) {
         toast.error('Password and Confirm Password should be same.');
         return;
     }

    // Make an API call to update the password
    try {
      const response = await fetch('http://localhost:5000/api/auth/updatepassword', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({
          password: credentials.newPassword
        })
      });

      const data = await response.json();
      console.log(data.message); // Password updated successfully
      navigate('/');
      toast.success("Password updated successfully");
      
      // Clear the input fields after successful update
      setCredentials({
        newPassword: '',
        confirmPassword: ''
      });
    } catch (error) {
      toast.error("Invalid Details");
      console.error('Error updating password:', error.message);
    }
  };

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };
  return (
    <>
    <div className='stu-login'>
    <div className='login-container'>
    <img className='login-logo' src={require('../images/logo.png')} alt='Logo'/>
        <h2>Forget Password</h2>
        <form onSubmit={handleOnSubmit}> 
            <div className="margin">
            <label htmlFor="password" className="form-label">New Password</label>
                <input type="password" className="form-control" placeholder='Enter Your Password' id='newPassword' name='newPassword' value={credentials.newPassword} onChange={onChange}/>
            </div>
            <br />
            <div className="margin1">
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" placeholder='Confirm Password' id='confirmPassword' name='confirmPassword' value={credentials.confirmPassword} onChange={onChange}/>
            </div>
            <br />
          <button type="submit" className="login-btn" >Set Password</button>
        </form>
        <br />
    </div>
    <div className='login-img'>
        <img src={require('../images/1.jpg')} alt='img1'width={1050}/>
    </div>
    </div>
    <ToastContainer {...toastOption}/>
    </>
  )
}

export default Forget
