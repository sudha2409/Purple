import React, { useState, useEffect } from 'react';
import { ErrorMessage, Field, Form, Formik } from "formik";
import "../Home/style.css";
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from "axios";

const VerifyEmail = () => { 
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const verifyTokenString =  searchParams.get('verificationToken')
    // console.log(verifyTokenString);
    const [RequestResponse, setRequestResponse] = useState({
        textMessage: "",
        alertClass: "",
      });

    const onLanding = () => {
        //console.log(values);
        const verifyToken = {verificationCode:verifyTokenString}
        axios
        .post("http://65.0.101.75:3500/api/v1/users/email-verification", verifyToken)
        .then(
          (response) => {
            setRequestResponse({
              textMessage: "Login successful",
              alertClass: "alert alert-success",
            });
    
            // navigate("/");
             console.log(response.status);
            if(response.status == 200){
                navigate('/login');
                console.log(response.status,"login");
            }
            else{
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
export default VerifyEmail