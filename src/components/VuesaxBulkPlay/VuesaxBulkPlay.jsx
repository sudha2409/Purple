
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const VuesaxBulkPlay = ({
  className,
  vuesaxBulkPlay = "https://generation-sessions.s3.amazonaws.com/9a293156e36442672e418d9769b979e2/img/vuesax-bulk-play-circle-2.svg",
}) => {
  return <img className={`vuesax-bulk-play ${className}`} alt="Vuesax bulk play" src={vuesaxBulkPlay} />;
};

VuesaxBulkPlay.propTypes = {
  vuesaxBulkPlay: PropTypes.string,
};
