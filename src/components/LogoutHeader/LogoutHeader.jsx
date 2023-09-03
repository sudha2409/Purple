

import PropTypes from "prop-types";
import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const LogoutHeader = ({
  className,
  groupClassName,
  img = "https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64d53bb23acc02a59b7cfa6b/img/--2.svg",
}) => {
  return (
    <div className={`logout-header ${className}`}>
      <div className="frame-10">
        <div className="text-wrapper-12">Resources</div>
        <Link className="text-wrapper-12" to={"/pricing"}>Pricing</Link>
      </div>
      <div className="frame-11">
        <div className="frame-12">
          <Link className="text-wrapper-12" to={"/login"}>Login</Link>
        </div>
        <div className="frame-13">
          <Link className="text-wrapper-13" to={"/signup"}>Sign Up</Link>
        </div>
      </div>
      <div className="frame-14">
        <div className={`group-2 ${groupClassName}`}>
          <div className="overlap-group-2">
            <img className="img-2" alt="Img" src={img} />
          </div>
          <div className="ellipse-4" />
          <div className="ellipse-5" />
          <div className="ellipse-6" />
        </div>
        <Link className="text-wrapper-14" to={"/"}>Purple Maze</Link>
      </div>
    </div>
  );
};

LogoutHeader.propTypes = {
  img: PropTypes.string,
};
