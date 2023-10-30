

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
    // <div className={`logout-header ${className}`}>
    //   <div className="frame-10">
    //     <div className="text-wrapper-12">Resources</div>
    //     <Link className="text-wrapper-12" to={"/pricing"}>Pricing</Link>
    //   </div>
    //   <div className="frame-11">
    //     <div className="frame-12">
    //       <Link className="text-wrapper-12" to={"/login"}>Login</Link>
    //     </div>
    //     <div className="frame-13">
    //       <Link className="text-wrapper-13" to={"/signup"}>Sign Up</Link>
    //     </div>
    //   </div>
    //   <div className="frame-14">
    //     <div className={`group-2 ${groupClassName}`}>
    //       <div className="overlap-group-2">
    //         <img className="img-2" alt="Img" src={img} />
    //       </div>
    //       <div className="ellipse-4" />
    //       <div className="ellipse-5" />
    //       <div className="ellipse-6" />
    //     </div>
    //     <Link className="text-wrapper-14" to={"/"}>Purple Maze</Link>
    //   </div>
    // </div>

<header class="flex header_color justify-between bx-auto py-2">
  <Link to={"/"}>
    
<div class="flex justify-center items-center px-8 sm:px-8">
  <img src="Group 1.png" />
  <h1 class="px-2 text-color font-type-quicksand">Purple Maze</h1>
</div>
  </Link>
<div class="flex items-center px-4">
  <a href="/pricing" class="hidden font-type-monasans text-color-1 sm:inline sm:px-4 ">Pricing</a>
  <Link to={"/login"}>

    <button class="hidden sm:bg-transparent my-2 text-color-1 login_border sm:px-6 sm:py-2 sm:rounded-full font-type-monasans sm:inline sm:px-4">Login</button>
  </Link>

  <Link to={"/signup"}>
    <button class="purple signup_color px-6 py-2 my-2 rounded-full sm:mx-2 " href="/#signup">Sign Up</button>

  </Link>
</div>

</header>
  );
};

LogoutHeader.propTypes = {
  img: PropTypes.string,
};
