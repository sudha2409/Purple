import React from 'react';
import "./navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <header class="flex header_color justify-between bx-auto py-2">
        <div class="flex justify-center items-center px-8 sm:px-8">
          <img src="Group 1.png" />
          <h1 class="px-2 text-color font-type-quicksand">Purple Maze</h1>
        </div>
        <div class="flex items-center px-4">
          <a href="/#see-pricing" class="hidden font-type-monasans text-color-1 sm:inline sm:px-4 ">Pricing</a>
          <a href="" class="hidden font-type-monasans text-color-1 sm:inline sm:px-4 ">Resources</a>
          <Link to={"/login"}>

            <button class="hidden sm:bg-transparent my-2 text-color-1 login_border sm:px-6 sm:py-2 sm:rounded-full font-type-monasans sm:inline sm:px-4">Login</button>
          </Link>

          <Link to={"/signup"}>
            <button class="purple signup_color px-6 py-2 my-2 rounded-full sm:mx-2 " href="/#signup">Sign Up</button>

          </Link>
        </div>

      </header>
{/*      <div className="logout-header">

        <div className="frame-48">
          <div className="frame-47">
            {/* <Link className="text-wrapper-47" to={"/see-pricing"} >Pricing</Link> 
            <a
              className="text-wrapper-47"
              style={{ textDecorationLine: "none" }}
              href="/#see-pricing"
            >Pricing</a>
          </div>
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
      </div> */}
    </>
  )
}
export default Navbar