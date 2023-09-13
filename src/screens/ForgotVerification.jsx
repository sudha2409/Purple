import React, { useState, useEffect } from 'react';
import { ErrorMessage, Field, Form, Formik } from "formik";
import "../screens/Home/style.css";
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import axios from "axios";
import { BASE_AUTH_URL } from '../api/config';

const ForgotVerification = () => { 
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const forgotTokenString =  searchParams.get('forgotPasswordToken')
    // console.log(verifyTokenString);
   
    const [RequestResponse, setRequestResponse] = useState({
        textMessage: "",
        alertClass: "",
      });

     
    const onLanding = () => {
        //console.log(values);
        const verifyToken = {passwordVerificationCode:forgotTokenString}
        axios
        .post(BASE_AUTH_URL+"/api/v1/users/verify-forgot-password", verifyToken)
        .then(
          (response) => {
            setRequestResponse({
              textMessage: "Login successful",
              alertClass: "alert alert-success",
            });
    
            // navigate("/");
             console.log(response.status);
            if(response.status == 200){
                localStorage.setItem('userToken',forgotTokenString);
               
                navigate('/New-password');
                console.log(response.status,"login");
            }
            else{ 
                navigate('/forgot-password');
            }
          },
    
          (error) => {
            setRequestResponse({
              textMessage: error.response.data.message,
              alertClass: "alert alert-danger",
            })
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