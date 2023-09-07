import React, { useState, useEffect } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import "../Home/style.css";
import * as Yup from "yup";
import { useNavigate, useSearchParams } from "react-router-dom";
import PopupReset from "../Pop-Ups/PopupReset";
import axios from "axios";

const ReverificationEmail = () => {
  const navigate = useNavigate();
    const [RequestResponse, setRequestResponse] = useState({
    textMessage: "",
    alertClass: "",
  });
    const initialValues = {
        email: "",
      };
      const onSubmit = (values) => {
        console.log(values);
        axios.post("https://auth.purplemaze.co/api/v1/users/email-reverification", values)
        .then((response) => {
          if (response.status === 200) {
            setRequestResponse({
              textMessage: "Reverification successful",
              alertClass: "alert alert-success",
            });
            localStorage.setItem('emailVerificationRequired', 'true');

            // Navigate to home page if status is 200
            navigate("/");
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            setRequestResponse({
              textMessage: "Bad Access",
              alertClass: "alert alert-danger",
            });
          }
        });
      
      };
      const validationSchema = Yup.object({
        email: Yup.string()
          .required("Email Address is required")
          .email("Email Address must be a valid email address"),
      });    
    
  return (
    <div className="outer-container">
      <div className="container">
        <div className="centered-container">
          <div
            className="wrapper"
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
            }}
          >
            <h1 className="text-center">ReVerification</h1>
            <Formik
             initialValues={initialValues}
             onSubmit={onSubmit}
            validationSchema={validationSchema}
            >
              {(formik) => (
                <Form>
                  <div className="form-group my-3">
                    <label>Email</label>
                    <Field
                      type="text"
                      name="email"
                      className={
                        formik.touched.email
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />
                  </div>
                  <PopupReset/>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block w-100 circular-button"
                  >
                    Verify
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
          </div>
      );
};
export default ReverificationEmail;
