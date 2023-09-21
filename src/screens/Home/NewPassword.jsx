import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios"; // Don't forget to import axios
import "../Home/style.css";
import { useNavigate } from "react-router-dom";
import PasswordChangePopup from "../Pop-Ups/PasswordChangePopup";
import { BASE_AUTH_URL } from "../../api/config";

const NewPassword = () => {
  const [forgotError, setForgotError] = useState("");
  const navigate = useNavigate();

  const initialValues = {
    password: "",
    ConfirmPassword: "",
  };

  const onSubmit = (values) => {
    const dataToSend = {
      passwordVerificationCode: localStorage.getItem("userToken"),
      password: values.password,
    };

    axios
      .post(
        BASE_AUTH_URL+"/api/v1/users/forgot-password-change",
        dataToSend
      )
      .then((response) => {
        localStorage.removeItem("userToken");
        navigate("/login");
      })
      .catch((error) => {
        setForgotError(error.response.data.msg);
      });
  };

  const validationSchema = Yup.object({
    password: Yup.string()
      .required("New Password is required")
      .min(6, "New Password must be at least 6 characters long"),
    ConfirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  return (
    <div className="outer-container">
      <div className="container">
        <div className="centered-container">
          <div className="wrapper">
            <h2 className="text-center">Create New Password</h2>
            <div style={{ color: "red" }}>{forgotError}</div>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {(formik) => (
                <Form>
                  <div className="form-group my-3">
                    <label>New Password</label>
                    <Field
                      type="password"
                      name="password"
                      className={
                        formik.touched.password && formik.errors.password
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />
                    <ErrorMessage name="password">
                      {(errorMessage) => (
                        <small className="text-danger">{errorMessage}</small>
                      )}
                    </ErrorMessage>
                  </div>
                  <PasswordChangePopup />

                  <div className="form-group my-3">
                    <label>Confirm New Password</label>
                    <Field
                      type="password"
                      name="ConfirmPassword"
                      className={
                        formik.touched.ConfirmPassword &&
                        formik.errors.ConfirmPassword
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />
                    <ErrorMessage name="ConfirmPassword">
                      {(errorMessage) => (
                        <small className="text-danger">{errorMessage}</small>
                      )}
                    </ErrorMessage>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block w-100 circular-button"
                  >
                    Reset Password
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

export default NewPassword;
