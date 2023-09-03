
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const VuesaxBulkTick = ({
  className,
  vuesaxBulkTick = "https://generation-sessions.s3.amazonaws.com/9a293156e36442672e418d9769b979e2/img/vuesax-bulk-tick-circle-15.svg",
}) => {
  return <img className={`vuesax-bulk-tick ${className}`} alt="Vuesax bulk tick" src={vuesaxBulkTick} />;
};

VuesaxBulkTick.propTypes = {
  vuesaxBulkTick: PropTypes.string,
};
