import React, { useEffect } from "react";
import "../screens/Home/style.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { BASE_AUTH_URL } from "../api/config";

const LoginWithGoogle = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const queryParamsObj = {};

  for (const [key, value] of searchParams.entries()) {
    queryParamsObj[key] = value;
  }

  const objectToQueryString = (obj) => {
    const params = new URLSearchParams();
    for (const key in obj) {
      params.append(key, obj[key]);
    }
    return params.toString();
  };

  // Convert the queryParamsObj to a URL query string
  const queryString = objectToQueryString(queryParamsObj);

  const baseUrl = BASE_AUTH_URL + "/api/v1/google/auth/callback";

  const finalUrl = baseUrl + "?" + queryString;

  // Log the final URL
  console.log("finalUrl", finalUrl);

  const onLanding = async () => {
    try {
      const response = await axios.get(finalUrl);
      if (response?.status === 200) {
        const accessToken = response.data.accessToken;
        const roles = response.data.roles;
        const expiresIn = response.data.expiresIn;
        const expires = moment().add(expiresIn);

        // Store data in local storage
        localStorage.setItem(
          "accessAuth",
          JSON.stringify({ accessToken, roles, expires })
        );

        navigate("/SearchPage", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onLanding();
  }, []);

  return (
    <div className="outer-container">
      <div className="not-found">
        <h1>401 - Please try another login method</h1>
        <p>The page you are looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary">
          Go to Home
        </Link>
        <p></p>
        <Link to="/login" className="btn btn-secondary">
          Login
        </Link>
      </div>
    </div>
  );
};
export default LoginWithGoogle;
