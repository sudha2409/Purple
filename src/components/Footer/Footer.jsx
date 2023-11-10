

import PropTypes from "prop-types";
import React from "react";
import { IconFacebook1 } from "../../icons/IconFacebook1";
import { IconInstagram } from "../../icons/IconInstagram";
import { IconLinkedin } from "../../icons/IconLinkedin";
import { IconTwitter2 } from "../../icons/IconTwitter2";
import { IconYoutube } from "../../icons/IconYoutube";
import "./footerstyle.css";
import footericon from "./images/purplemaze_icon_footer.png"
import { Link } from "react-router-dom";


export const Footer = ({
  className,
  img = "https://generation-sessions.s3.amazonaws.com/27ef0faa38aabce506c661f34f7307c9/img/--2.svg",
}) => {
  return (

    <footer class="footer_color">
      <div class="flex flex-col space-y-20">
        <div class="flex flex-col space-y-8 lg:flex-row lg:space-x-40 xl:flex-row xl:space-x-70 lg:items-center py-10 px-16 lg:pl-10">
          <div class="flex flex-col space-y-4 px-8 pt-8">
            <span class="text-xl lg:text-4xl text-white font_monasans w-auto">Not sure where to start?</span>
            <p class="text-sm lg:text-sm max-w-[400px] text-white font_monasans">Request a demo call and get all your queries answered. Don’t Worry, we will not trigger spam calls.</p>
          </div>
          <div class="flex xl:pl-60">
            <input type="email" id="email" class="enter_mail input_text input" placeholder="Enter email" required />
            <button class="signup_color rounded-r-full px-8 my-0 text-white text-size-2">Join</button>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row px-8 py-10">
          <div class="flex flex-col lg:w-1/3 px-2">
            <Link to="/">
              <div class="flex items-center">

                <img className="px-2" alt="Img" src={footericon} />
                <span class="py-4 text-white text-size-1">Purple Maze</span>
              </div>
              </Link>
            <span class="text-sm text-white text-size-3">High level experience in web design and development knowledge, producing quality work.</span>
            {/* <div class="flex space-x-6 py-6">
              <IconFacebook1 className="icon-instance-node" color="white" />
              <IconInstagram className="icon-instance-node" color="white" />
              <IconLinkedin className="icon-instance-node" />
              <IconTwitter2 className="icon-instance-node" color="white" />
              <IconYoutube className="icon-instance-node" />
            </div> */}

          </div>
          <div class="flex flex-col lg:flex-row space-x-2 w-2/3 py-2">

            <div class="flex flex-col lg:space-y-2 lg:w-2/5 px-2">
              <span class="py-4 text-white text-lg text-size-4">How to Reach Us</span>
              <span class="text-white text-sm text-size-5">One Orange Digital South City 2, Sector 49,Gurgaon, Haryana, India 122018</span>
              <span onClick={(e) => {window.location.href ='mailto:support@purplemaze.co';}} class="text-white text-sm text-size-5 py-2">support@purplemaze.co</span>
              <span onClick={(e) => {window.location.href ='tel:9773533007';}} class="text-white text-sm text-size-5 py-2">(+91) 9773533007</span>
            </div>
            <div class="flex flex-col lg:space-y-2 lg:w-1/6">
              <span class="py-4 text-white text-lg text-size-4">Company</span>
              <span class="text-white text-sm text-size-5 py-2">About us</span>
              <span class="text-white text-sm text-size-5 py-2">Careers</span>
              <a href = "/#faq">

              <span class="text-white text-sm text-size-5 py-2">FAQs</span>
              </a>
              <Link to="/privacy-policy" class="py-2 my-0">
                <span class="text-white text-sm text-size-5 ">Privacy</span>

              </Link>
              <Link to="/terms-and-conditions" class="my-0 py-2">

                <span class="text-white text-sm text-size-5">Terms</span>
              </Link>
              <Link to="/contact-us" class="my-0 py-2">

                <span class="text-white text-sm text-size-5">Contact Us</span>
              </Link>
            </div>

            <div class="flex flex-col lg:space-y-2 lg:px-2">
              <span class="py-4 text-white text-lg text-size-4">Our Newsletter</span>
              <span class="text-white text-sm text-size-5 py-2">Subscribe to our newsletter to get our news delivered to you.</span>
              <div class="flex pr-2 py-2">
                <input type="email" id="email" class="input_text text-size-2 enter_mail" placeholder="Enter email" required />
                <button class="signup_color rounded-r-full px-4 pr-4 w-20 my-0 text-size-2">Join</button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

Footer.propTypes = {
  img: PropTypes.string,
};
