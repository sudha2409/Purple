import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconLinkedin = ({
  className,
  iconLinkedin = "https://generation-sessions.s3.amazonaws.com/9a293156e36442672e418d9769b979e2/img/icon-linkedin-1.svg",
}) => {
  return <img className={`icon-linkedin ${className}`} alt="Icon linkedin" src={iconLinkedin} />;
};

IconLinkedin.propTypes = {
  iconLinkedin: PropTypes.string,
};
