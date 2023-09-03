import React, { useState, useEffect } from 'react';
import { ErrorMessage, Field, Form, Formik } from "formik";
import "../screens/Home/style.css";
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from "axios";

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
        .post("http://65.0.101.75:3500/api/v1/users/verify-forgot-password", verifyToken)
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
            else{ //new small page for this
                navigate('/Reverification-Email');
                console.log(response.status,"Reverify");
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
      </div>
  
    )
    
}
export default ForgotVerification