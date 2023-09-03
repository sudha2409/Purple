import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconTwitter = ({
  className,
  iconTwitter = "https://generation-sessions.s3.amazonaws.com/9a293156e36442672e418d9769b979e2/img/icon-twitter-1.svg",
}) => {
  return <img className={`icon-twitter ${className}`} alt="Icon twitter" src={iconTwitter} />;
};

IconTwitter.propTypes = {
  iconTwitter: PropTypes.string,
};
