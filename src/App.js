import React from "react";
import { Route, Routes } from "react-router-dom";
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
import AuthNavigate from "./hooks/AuthNavigate";
import AuthVerify from "./hooks/AuthVerify";
import ContactUs from "./screens/PrivacyPolicy/ContactUs";
import PasswordPagePermission from "./hooks/PasswordPagePermission";
import LoginWithGoogle from "./screens/LoginWithGoogle";
import SomethingWentWrong from "./screens/Home/SomethingWentWrong";
import Payment from "./screens/Checkout-payment/Payment";
import Completion from "./screens/Checkout-payment/Completion";
import RequireAuth from "./hooks/RequireAuth";
import ROLES from "./hooks/roles";

const App = () => {
  return (
    <Routes>
      <Route element={<AuthNavigate />}>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/pricing" element={<Pricing />} /> */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route element={<PasswordPagePermission />}>
          <Route path="/New-password" element={<NewPassword />} />
        </Route>
        <Route path="/Verify-Email" element={<VerifyEmail />} />
        <Route path="/Reverification-Email" element={<ReverificationEmail />} />
        <Route path="/forgot-token" element={<ForgotVerification />} />
        <Route path="/google-login" element={<LoginWithGoogle />} />
      </Route>
      <Route element={<AuthVerify />}>
        <Route path="/SearchPage/:page" element={<ParentComponent />} />
        <Route path="/SearchPage" element={<SearchPage />} />
        <Route path="/parent" element={<ParentComponent />} />
        <Route path="/Reset-password" element={<ResetPassword />} />
        <Route element={<RequireAuth allowedRoles={ROLES.FreeUser} />}>
          <Route path="/checkout-payment" element={<Payment />} />
        </Route>
        <Route path="/completion" element={<Completion />} />
      </Route>
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsCondition />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/something-went-wrong" element={<SomethingWentWrong />} />
      <Route path="/unauthorized" element={<NotFound />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
