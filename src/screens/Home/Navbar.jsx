import React from 'react';
import "./navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
    return(
        <>
        <div className="logout-header">
          <div className="frame-47">
            <div className="text-wrapper-47"></div>
            <Link className="text-wrapper-47" to={"/pricing"} >Pricing</Link>
          </div>
          <div className="frame-48">
            <div className="frame-49">
              <Link className="text-wrapper-47" to={"/login"}>Login</Link>
            </div>
            <div className="frame-50">
              <Link className="text-wrapper-3" to={"/signup"}>Sign Up</Link>
            </div>
          </div>
          <div className="frame-51">
            <div className="group-6">
              <div className="overlap-group-10">
                <img
                  className="img-6"
                  alt="Img"
                  src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/--1.svg"
                />
              </div>
              <div className="ellipse-4" />
              <div className="ellipse-5" />
              <div className="ellipse-6" />
            </div>
            <div >
              <a className="text-wrapper-48" style={{ textDecorationLine: 'none' }} href="/">
                Purple Maze
              </a>
            </div>
          </div>
        </div>
        </>
    )
}
export default Navbar