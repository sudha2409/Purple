import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconFacebook = ({
  className,
  iconFacebook = "https://generation-sessions.s3.amazonaws.com/9a293156e36442672e418d9769b979e2/img/icon-facebook-1.svg",
}) => {
  return <img className={`icon-facebook ${className}`} alt="Icon facebook" src={iconFacebook} />;
};

IconFacebook.propTypes = {
  iconFacebook: PropTypes.string,
};
