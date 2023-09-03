import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconInstagram = ({
  className,
  iconInstagram = "https://generation-sessions.s3.amazonaws.com/9a293156e36442672e418d9769b979e2/img/icon-instagram-1.svg",
}) => {
  return (
    <img
      className={`icon-instagram ${className}`}
      alt="Icon instagram"
      src={iconInstagram}
    />
  );
};

IconInstagram.propTypes = {
  iconInstagram: PropTypes.string,
};
