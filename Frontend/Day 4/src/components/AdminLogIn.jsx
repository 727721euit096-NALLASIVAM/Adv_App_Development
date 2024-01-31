import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import './Login.css'
import Navbar from "../components/Nav";
import AdHome from "../Admin/AdHome";

const Login = ({formData,setFormData}) => {

    const navigate = useNavigate()
      const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
    const handleLogin = (e) => {
      e.preventDefault();
      const storedUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    
      const foundUser = storedUsers.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );
    
      if (foundUser) {
        alert("Sign-in successful!");
        navigate("/admin");
        
      } else {
        alert("Incorrect email or password. Please try again.");
      }
    };
    

  return (
    <div>
      <Navbar />
        <div className='admin-container'>
            <div className='admin-login-form'>
              <div className="admin-image">
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/secure-login-5120700-4283468.png" alt="" />
              </div>
              <div className="admin-login">
                <h1>Admin Login</h1>
                <form onSubmit={handleLogin}>
                    <div>
                    <input type="text" 
                    className='input'
                    placeholder='Enter your email'
                    name='email'
                    onChange={handleInputChange}
                    value={formData.email}
                    required
                    />
                    </div>
                    <div>
                    <input type="text" 
                    className='input'
                    title="Password should contain at least 6 characters"
                    placeholder='Enter your password'
                    pattern=".{6,}"
                    value={formData.password}
                    onChange={handleInputChange}
                    name="password"
                    />
                    </div>
                    <button
            type="submit">Sign In</button>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login