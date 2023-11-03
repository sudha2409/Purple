import "./navbar.css";
import { Link } from "react-router-dom";
import React, { useState } from 'react'
import iconimg from "../images/iconimg.png";


const Navbar = () => {
  let [open,setOpen]=useState(false);

  return (
    <>
      <header class="flex header_color justify-between bx-auto py-2">
        <a href="/">
        <div class="flex justify-center items-center px-8 py-3 sm:px-8">
          <img src={iconimg} />
          <h1 class="px-2 text-color font-type-quicksand">Purple Maze</h1>
        </div>
        </a>

        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        <ion-icon name={open ? 'close':'menu'}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
<path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
</svg></ion-icon>
        </div>
        
        <div className={`flex flex-col space-y-[2px] sm:py-2 md:flex md:flex-row md:items-center md:pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
          <a href="/#see-pricing" class="px-3 font-type-monasans text-color-1 sm:inline sm:px-4 ">Pricing</a>
          <Link to={"/login"}>

            <button class="bg-transparent my-2 text-color-1 login_border px-6 py-2 rounded-full font-type-monasans inline px-4">Login</button>
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