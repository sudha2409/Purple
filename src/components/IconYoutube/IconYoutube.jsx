import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconYoutube = ({
  className,
  iconYoutube = "https://generation-sessions.s3.amazonaws.com/9a293156e36442672e418d9769b979e2/img/icon-youtube.svg",
}) => {
  return <img className={`icon-youtube ${className}`} alt="Icon youtube" src={iconYoutube} />;
};

IconYoutube.propTypes = {
  iconYoutube: PropTypes.string,
};
