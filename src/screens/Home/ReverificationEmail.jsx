import React from "react";
import { Field, Form, Formik } from "formik";
import "../Home/style.css";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import PopupReset from "../Pop-Ups/PopupReset";
import axios from "axios";
import Navbar from "./Navbar";
import { BASE_AUTH_URL } from "../../api/config";

const ReverificationEmail = () => {
  const navigate = useNavigate();
    const initialValues = {
        email: "",
      };
      const onSubmit = (values) => {
        console.log(values);
        axios.post(BASE_AUTH_URL+"/api/v1/users/email-reverification", values)
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem('emailVerificationRequired', 'true');
            navigate("/");
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            console.log("error",error)
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
   <Navbar/>
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
