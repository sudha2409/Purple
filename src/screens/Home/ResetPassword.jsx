import React from 'react';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "../Home/style.css";
import { Link } from 'react-router-dom';
import PasswordChangePopup from '../Pop-Ups/PasswordChangePopup';

const ResetPassword = () => {
    const initialValues = {
        OldPassword: "",
        NewPassword: "",
        ConfirmPassword: "",
    };

    const onSubmit = (values) => {
        console.log(values);
    };

    const validationSchema = Yup.object({
        OldPassword: Yup.string()
            .required("Old Password is required"),
        NewPassword: Yup.string()
            .notOneOf([Yup.ref('OldPassword')], 'New Password must be different from Old Password')
            .required("New Password is required")
            .min(6, "New Password must be at least 6 characters long"),
        ConfirmPassword: Yup.string()
            .oneOf([Yup.ref('NewPassword')], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    return (
        <div className="outer-container">
            <div className="container">
                <div className="centered-container">
                    <div className="wrapper">
                        <h2 className="text-center">Reset Password</h2>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}
                        >
                            {(formik) => (
                                <Form>
                                    <div className="form-group my-3">
                                        <label>Old Password</label>
                                        <Field
                                            type="password"
                                            name="OldPassword"
                                            className={
                                                formik.touched.OldPassword && formik.errors.OldPassword
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                        />
                                        <ErrorMessage name="OldPassword">
                                            {(errorMessage) => (
                                                <small className="text-danger">{errorMessage}</small>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                    <PasswordChangePopup/>
                                    <div className="form-group my-3">
                                        <label>New Password</label>
                                        <Field
                                            type="password"
                                            name="NewPassword"
                                            className={
                                                formik.touched.NewPassword && formik.errors.NewPassword
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                        />
                                        <ErrorMessage name="NewPassword">
                                            {(errorMessage) => (
                                                <small className="text-danger">{errorMessage}</small>
                                            )}
                                        </ErrorMessage>
                                    </div>

                                    <div className="form-group my-3">
                                        <label>Confirm New Password</label>
                                        <Field
                                            type="password"
                                            name="ConfirmPassword"
                                            className={
                                                formik.touched.ConfirmPassword && formik.errors.ConfirmPassword
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
}

export default ResetPassword;
