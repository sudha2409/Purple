import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import ParentComponent from "./screens/Search/ParentComponent";
import ForgotVerification from "./screens/ForgotVerification";
import ReverificationEmail from "./screens/Home/ReverificationEmail";
import VerifyEmail from "./screens/Home/VerifyEmail";
import NewPassword from "./screens/Home/NewPassword";
import NotFound from "./screens/Home/PageNotFound";
import ForgotPassword from "./screens/Home/ForgotPassword";
import ResetPassword from "./screens/Home/ResetPassword";
import Pricing from "./screens/Pricing/Pricing";
import Login from "./screens/Login";
import { Home } from "./screens/Home";
import SignUp from "./screens/Home/SignUp";
import SearchPage from "./screens/Search/SearchPage";
import PrivacyPolicy from "./screens/PrivacyPolicy/PrivacyPolicy";
import TermsCondition from "./screens/PrivacyPolicy/TermsCondition";

const App = () => {
  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/Reset-password" element={<ResetPassword />} />
          <Route path="/New-password" element={<NewPassword />} />
          <Route path="/Verify-Email" element={<VerifyEmail />} />
          <Route path="/Reverification-Email" element={<ReverificationEmail />} />
          <Route path="/forgot-token" element={<ForgotVerification />} />
          <Route path="/parent" element={<ParentComponent />} />
          <Route path="/SearchPage/:page" element={<ParentComponent />} />
          <Route path="/SearchPage" element={<SearchPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsCondition />} />
          <Route Component={NotFound} />
        </Routes>
        </HashRouter>
  );
};

export default App;
