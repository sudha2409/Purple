

import PropTypes from "prop-types";
import React from "react";
import { IconFacebook1 } from "../../icons/IconFacebook1";
import { IconInstagram } from "../../icons/IconInstagram";
import { IconLinkedin } from "../../icons/IconLinkedin";
import { IconTwitter2 } from "../../icons/IconTwitter2";
import { IconYoutube } from "../../icons/IconYoutube";
import "./style.css";

export const Footer = ({
  className,
  img = "https://generation-sessions.s3.amazonaws.com/27ef0faa38aabce506c661f34f7307c9/img/--2.svg",
}) => {
  return (
    <div className={`footer ${className}`}>
      <div className="frame">
        <div className="div">
          <p className="text-wrapper">Not sure where to start?</p>
          <p className="request-a-demo-call">
            Request a demo call and get all your queries answered. <br />
            Don’t Worry, we will not trigger spam calls.
          </p>
        </div>
        <div className="frame-2">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="text-wrapper-2">Join</div>
            </div>
          </div>
          <div className="text-wrapper-3">Enter Email</div>
        </div>
      </div>
      <img
        className="line"
        alt="Line"
        src="https://generation-sessions.s3.amazonaws.com/27ef0faa38aabce506c661f34f7307c9/img/line-1-1.svg"
      />
      <div className="frame-3">
        <div className="frame-4">
          <div className="frame-5">
            <div className="group">
              <div className="img-wrapper">
                <img className="img" alt="Img" src={img} />
              </div>
              <div className="ellipse" />
              <div className="ellipse-2" />
              <div className="ellipse-3" />
            </div>
            <div className="text-wrapper-4">Purple Maze</div>
          </div>
          <p className="p">High level experience in web design and development knowledge, producing quality work.</p>
          <div className="frame-6">
            <IconFacebook1 className="icon-instance-node" color="white" />
            <IconInstagram className="icon-instance-node" color="white" />
            <IconLinkedin className="icon-instance-node" />
            <IconTwitter2 className="icon-instance-node" color="white" />
            <IconYoutube className="icon-instance-node" />
          </div>
        </div>
        <div className="menu-footer">
          <div className="text-wrapper-5">How to Reach Us</div>
          <div className="frame-7">
            <p className="text-wrapper-6">Some address with street number city and state</p>
            <div className="text-wrapper-7">info@email.com</div>
            <div className="text-wrapper-7">(+91) 9876543210</div>
          </div>
        </div>
        <div className="menu-footer">
          <div className="text-wrapper-5">Company</div>
          <div className="frame-7">
            <div className="text-wrapper-8">About Us</div>
            <div className="text-wrapper-7">Careers</div>
            <div className="text-wrapper-7">FAQs</div>
            <div className="text-wrapper-7">Teams</div>
            <div className="text-wrapper-7">Contact Us</div>
          </div>
        </div>
        <div className="menu-footer">
          <div className="text-wrapper-5">Our Newsletter</div>
          <div className="frame-8">
            <p className="text-wrapper-9">Subscribe to our newsletter to get our news delivered to you.</p>
            <div className="frame-9">
              <div className="div-wrapper">
                <div className="text-wrapper-10">Join</div>
              </div>
              <div className="text-wrapper-11">Enter Email</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  img: PropTypes.string,
};
