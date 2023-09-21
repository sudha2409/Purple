import React, { useEffect } from 'react';
import "../screens/Home/style.css";
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import axios from "axios";
import { BASE_AUTH_URL } from '../api/config';

const ForgotVerification = () => { 
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const forgotTokenString =  searchParams.get('forgotPasswordToken')
     
    const onLanding = () => {
        const verifyToken = {passwordVerificationCode:forgotTokenString}
        axios
        .post(BASE_AUTH_URL+"/api/v1/users/verify-forgot-password", verifyToken)
        .then(
          (response) => {
            
            if(response.status === 200){
                localStorage.setItem('userToken',forgotTokenString);
               
                navigate('/New-password');
            }
            else{ 
                navigate('/forgot-password');
            }
          },
    
          (error) => {
            console.log("error",error);
          }
        )
        .catch((error) => console.log("error",error));
      
    }; 
    useEffect(() => {
        onLanding();
    },[]);
    
    

    return(
        <div className="outer-container">
          <div className="not-found">
      <h1>401 - Link is expired</h1>
      <p>The page you are looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary">Go to Home</Link>
      <p></p>
      <Link to="/forgot-password" className="btn btn-secondary">Forgot Password</Link>

    </div>
      </div>
  
    )
    
}
export default ForgotVerification