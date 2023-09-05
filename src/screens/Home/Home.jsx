import React from "react";
import { IconFacebook1 } from "../../icons/IconFacebook1";
import { IconInstagram } from "../../icons/IconInstagram";
import { IconLinkedin } from "../../icons/IconLinkedin";
import { IconTwitter } from "../../icons/IconTwitter2";
import { IconYoutube } from "../../icons/IconYoutube";
import { VuesaxBulkPlay } from "../../components/VuesaxBulkPlay";
import { VuesaxBulkTick } from "../../components/VuesaxBulkTick";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import Navbar from "./Navbar";
import PopupMsg from "../Pop-Ups/PopupMsg";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="div">
        <div className="frame">
          <div className="overlap">
            <div className="overlap-group">
              <img
                className="rectangle"
                alt="Rectangle"
                src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/rectangle-6.png"
              />
              <img
                className="vuesax-bulk-play"
                alt="Vuesax bulk play"
                src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-play-circle.svg"
              />
            </div>
            <div className="overlap-2">
              <img
                className="img"
                alt="Img"
                src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/64088dfd259d863110d90801-doodle1-1-1.svg"
              />
              <img
                className="img-2"
                alt="Img"
                src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/64088dfd55b652dcf8126b5d-doodle2-1.svg"
              />
              <div className="frame-2">
                <div className="group">
                  <div className="overlap-group-2">
                    <p className="find-best-creatives">
                      <span className="text-wrapper">
                        Find best creatives &amp; Creators for <br />
                      </span>
                      <span className="span">
                        social m <br />
                      </span>
                      <span className="text-wrapper">Marketing</span>
                    </p>
                    <div className="text-wrapper-2">Social media</div>
                  </div>
                </div>
               <PopupMsg/>
                <p className="p">
                  We have handpicked high performing creatives from the fastest
                  growing brands across the globe
                </p>
                <div className="frame-3">
                  <div className="div-wrapper">
                    <div className="text-wrapper-3">Get Started</div>
                  </div>
                  <div className="frame-4">
                    <div className="text-wrapper-4">See Pricing Options</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-3">
          <img
            className="img-3"
            alt="Img"
            src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/64088dfd259d863110d90801-doodle1-1.svg"
          />
          ..
          <div className="frame-5">
            <div className="frame-6">
              <div className="text-wrapper-5">WHY CHOOSE US?</div>
              <div className="overlap-group-wrapper">
                <div className="overlap-group-3">
                  <p className="here-are-few-reasons">
                    <span className="text-wrapper">Here are few</span>
                    <span className="text-wrapper-6"> Reasons</span>
                    <span className="text-wrapper">
                      {" "}
                      why our customers choose Purple Maze
                    </span>
                  </p>
                  <div className="text-wrapper-7">Reasons</div>
                </div>
              </div>
            </div>
            <div className="frame-7">
              <div className="frame-8">
                <div className="frame-9">
                  <div className="text-wrapper-8">01</div>
                  <div className="frame-10">
                    <div className="text-wrapper-9">
                      Biggest library of creatives
                    </div>
                    <p className="text-wrapper-10">
                      Choose from over 10,000+ high performing creatives
                    </p>
                  </div>
                </div>
                <div className="frame-11">
                  <div className="text-wrapper-8">02</div>
                  <div className="frame-10">
                    <div className="text-wrapper-9">Filter to your needs</div>
                    <p className="text-wrapper-10">
                      Narrow down by product, industry, location, platform &amp;
                      more
                    </p>
                  </div>
                </div>
                <div className="frame-12">
                  <div className="text-wrapper-8">03</div>
                  <div className="frame-13">
                    <p className="text-wrapper-9">Stay up to the trend</p>
                    <p className="text-wrapper-10">
                      We add 100+ creatives every month after analyzing
                      thousands of latest creatives
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="rectangle-2"
                alt="Rectangle"
                src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/rectangle-7.svg"
              />
            </div>
          </div>
        </div>
        <div className="frame-21">
          <div className="frame-6">
            <div className="text-wrapper-5">OUR PRICING</div>
            <div className="group-3">
              <div className="overlap-group-6">
                <p className="we-offer-great">
                  We offer great prices, premium products
                  and&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Services
                  for your product
                </p>
                <div className="text-wrapper-15">Quality</div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="frame-22">
              <div className="frame-23">
                <div className="frame-24">
                  <div className="frame-25">
                    <div className="text-wrapper-16">₹</div>
                    <div className="text-wrapper-17">0</div>
                    <div className="text-wrapper-18">/mo</div>
                  </div>
                  <div className="text-wrapper-19">Free Plan</div>
                </div>
                <div className="frame-26">
                  <div className="frame-27">
                    <img
                      className="img-5"
                      alt="Vuesax bulk tick"
                      src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-tick-circle.svg"
                    />
                    <div className="text-wrapper-20">
                      Search thousands of influencers
                    </div>
                  </div>
                  <div className="frame-27">
                    <img
                      className="img-5"
                      alt="Vuesax bulk tick"
                      src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-tick-circle.svg"
                    />
                    <p className="text-wrapper-20">
                      Manually purchase content from influencers
                    </p>
                  </div>
                  <div className="frame-27">
                    <img
                      className="img-5"
                      alt="Vuesax bulk tick"
                      src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-tick-circle.svg"
                    />
                    <p className="div-2">
                      <span className="text-wrapper-21">10%</span>
                      <span className="text-wrapper-22"> marketplace fee</span>
                    </p>
                  </div>
                  <div className="frame-28">
                    <img
                      className="vuesax-bulk-tick"
                      alt="Vuesax bulk tick"
                      src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-tick-circle-3@2x.png"
                    />
                    <p className="div-2">
                      <span className="text-wrapper-21">30 influencers</span>
                      <span className="text-wrapper-22"> apply per month</span>
                    </p>
                  </div>
                  <div className="frame-28">
                    <img
                      className="vuesax-bulk-tick-2"
                      alt="Vuesax bulk tick"
                      src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-tick-circle-3@2x.png"
                    />
                    <p className="div-2">
                      <span className="text-wrapper-21">30 influencers</span>
                      <span className="text-wrapper-22"> apply per month</span>
                    </p>
                  </div>
                </div>
                <div className="frame-27">
                  <div className="frame-29">
                    <div className="frame-30">
                      <div className="text-wrapper-3">Sign Up</div>
                    </div>
                    <div className="text-wrapper-23">Current Plan</div>
                  </div>
                </div>
              </div>
              <div className="frame-23">
                <div className="frame-24">
                  <div className="frame-25">
                    <div className="text-wrapper-16">₹</div>
                    <div className="text-wrapper-24">1998</div>
                    <div className="text-wrapper-18">/mo</div>
                  </div>
                  <div className="text-wrapper-19">Pro Plan</div>
                </div>
                <div className="frame-26">
                  <div className="frame-27">
                    <img
                      className="img-5"
                      alt="Vuesax bulk tick"
                      src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-tick-circle.svg"
                    />
                    <div className="text-wrapper-25">
                      Everything included in Basic
                    </div>
                  </div>
                  <div className="frame-27">
                    <img
                      className="img-5"
                      alt="Vuesax bulk tick"
                      src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-tick-circle.svg"
                    />
                    <p className="post-unlimited">
                      <span className="text-wrapper-26">Post </span>
                      <span className="text-wrapper-27">unlimited</span>
                      <span className="text-wrapper-26"> campaigns</span>
                    </p>
                  </div>
                  <div className="frame-27">
                    <img
                      className="img-5"
                      alt="Vuesax bulk tick"
                      src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-tick-circle.svg"
                    />
                    <p className="div-3">
                      <span className="text-wrapper-21">30 influencers</span>
                      <span className="text-wrapper-22"> apply per month</span>
                    </p>
                  </div>
                  <div className="frame-27">
                    <img
                      className="img-5"
                      alt="Vuesax bulk tick"
                      src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-tick-circle.svg"
                    />
                    <p className="text-wrapper-20">
                      Chat with influencers before accepting
                    </p>
                  </div>
                  <div className="frame-27">
                    <img
                      className="img-5"
                      alt="Vuesax bulk tick"
                      src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-tick-circle.svg"
                    />
                    <p className="div-3">
                      <span className="text-wrapper-21">10%</span>
                      <span className="text-wrapper-22"> marketplace fee</span>
                    </p>
                  </div>
                </div>
                <div className="frame-27">
                  <div className="frame-29">
                    <div className="frame-30">
                      <div className="text-wrapper-3">Upgrade</div>
                    </div>
                    <div className="text-wrapper-23">Cancel Anytime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-31">
            <div className="frame-32">
              <div className="frame-33">
                <div className="text-wrapper-28">?</div>
              </div>
              <div className="frame-34">
                <p className="text-wrapper-29">
                  How do you select the best ads?
                </p>
                <p className="text-wrapper-30">
                  We developed a multi-level evaluation process for curating
                  Facebook ads and Tiktok ads. Before an ad example makes it to
                  Adbox, we review the brand it is associated with: Fast-growing
                  eCommerce brand? Estimated annual revenue (is it at at least >
                  $1ml?) Traffic volume Ad testing process, and more ‍ If the
                  brand meets our criteria, we add it to our internal brand
                  selection, which has around 9800+ brands now and we start
                  analyzing them every week to know what's working for them. At
                  the creative level, we look at groups of characteristics: How
                  long the ad has been active vs the testing time, and how
                  strong the hook is to grab the user's attention, concept,
                  style, visual features, copy, etc. Our curation team analyzes
                  more than 10.000 ads per month, and most of them do not pass
                  this process, they only handpick and add 100+ ads to Adbox
                  every month. Quality over quantity. Always!
                </p>
              </div>
            </div>
            <div className="frame-32">
              <div className="frame-33">
                <div className="text-wrapper-28">?</div>
              </div>
              <div className="frame-34">
                <p className="text-wrapper-29">
                  What could I do with PurpleMazze?
                </p>
                <p className="text-wrapper-30">
                  You will have access to 3000+ FB/IG ad examples and 4000+
                  Tiktok ads, so you could launch ad creatives and videos in
                  your industry just before your competition, source
                  under-the-radar ad creatives, stay in touch with the world
                  beyond your brand bubble, understand the marketing tactics of
                  today's viral trends.⁣⁣⁣ And the most important one: create
                  top-performing ads!⁣⁣ Simple. Apply your learnings and craft
                  much better ads and videos for your audience!⁣
                </p>
              </div>
            </div>
            <div className="frame-32">
              <div className="frame-33">
                <div className="text-wrapper-28">?</div>
              </div>
              <div className="frame-34">
                <p className="text-wrapper-29">
                  Why is it important to invest in ad creation?
                </p>
                <p className="text-wrapper-30">
                  Research by Nielsen Catalina Solutions suggests that creative
                  impact explains up to 50% of ad results variance, and yet
                  leaders rarely give it even 5% of their attention.⁣⁣⁣⁣⁣⁣
                  Percent sales contribution by advertising element:⁣⁣⁣ Context
                  2%⁣⁣⁣ Recency 5%⁣⁣⁣ Targeting 9%⁣⁣⁣ Brand 15% ⁣⁣⁣Reach 22%⁣⁣⁣
                  Creative 47%⁣⁣⁣⁣⁣⁣ Now, imagine if you take action to this
                  data and start paying more attention and learning about ad
                  creatives!⁣⁣
                </p>
              </div>
            </div>
            <div className="frame-32">
              <div className="frame-33">
                <div className="text-wrapper-28">?</div>
              </div>
              <div className="frame-34">
                <p className="text-wrapper-29">
                  Do you curate only eCommerce ads?
                </p>
                <p className="text-wrapper-30">
                  Yes, we are focusing on eCommerce since they rely on
                  advertising as their main channel. It means that they are the
                  real innovators and bring new ideas constantly. We are
                  covering all industries from Apparel to Pets. So, you can take
                  ideas from outside your niche and create more effective ads
                  and Tiktok videos for your audience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-35">
          <div className="frame-36">
            <div className="frame-34">
              <div className="text-wrapper-5">WHAT WE DO?</div>
              <div className="group-4">
                <div className="overlap-group-7">
                  <p className="the-service-we-offer">
                    The service we offer is <br />
                    designed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to
                    meet your needs
                  </p>
                  <div className="text-wrapper-31">Specifically</div>
                </div>
              </div>
            </div>
            <p className="text-wrapper-32">
              We have considered our solutions to support every stage of your
              growth.
            </p>
            <div className="frame-3">
              <div className="div-wrapper">
                <div className="text-wrapper-3">Get Started</div>
              </div>
              <div className="frame-4">
                <div className="text-wrapper-4">See Pricing Options</div>
              </div>
            </div>
          </div>
          <div className="frame-37">
            <div className="frame-38">
              <img
                className="IMAGE-2"
                alt="Image"
                src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/image-8@2x.png"
              />
              <div className="frame-34">
                <div className="text-wrapper-33">Reason one For choosing</div>
                <p className="text-wrapper-34">
                  Duis mollis gravida commodo id luctus erat porttitor ligula,
                  eget lacinia odio sem aget elit.
                </p>
              </div>
            </div>
            <div className="frame-38">
              <img
                className="IMAGE-3"
                alt="Image"
                src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64d90915bde965d8a1d78907/img/image-9@2x.png"
              />
              <div className="frame-34">
                <div className="text-wrapper-33">Reason one For choosing</div>
                <p className="text-wrapper-34">
                  Duis mollis gravida commodo id luctus erat porttitor ligula,
                  eget lacinia odio sem aget elit.
                </p>
              </div>
            </div>
            <div className="frame-38">
              <img
                className="IMAGE-4"
                alt="Image"
                src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64d90915bde965d8a1d78907/img/image-10@2x.png"
              />
              <div className="frame-34">
                <div className="text-wrapper-33">Reason one For choosing</div>
                <p className="text-wrapper-34">
                  Duis mollis gravida commodo id luctus erat porttitor ligula,
                  eget lacinia odio sem aget elit.
                </p>
              </div>
            </div>
            <div className="frame-38">
              <img
                className="IMAGE-5"
                alt="Image"
                src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64d90915bde965d8a1d78907/img/image-11@2x.png"
              />
              <div className="frame-34">
                <div className="text-wrapper-33">Reason one For choosing</div>
                <p className="text-wrapper-34">
                  Duis mollis gravida commodo id luctus erat porttitor ligula,
                  eget lacinia odio sem aget elit.
                </p>
              </div>
            </div>
            <div className="frame-38">
              <img
                className="IMAGE-6"
                alt="Image"
                src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/image-12@2x.png"
              />
              <div className="frame-34">
                <div className="text-wrapper-33">Reason one For choosing</div>
                <p className="text-wrapper-34">
                  Duis mollis gravida commodo id luctus erat porttitor ligula,
                  eget lacinia odio sem aget elit.
                </p>
              </div>
            </div>
            <div className="frame-38">
              <img
                className="IMAGE-7"
                alt="Image"
                src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64d90915bde965d8a1d78907/img/image-13@2x.png"
              />
              <div className="frame-34">
                <div className="text-wrapper-33">Reason one For choosing</div>
                <p className="text-wrapper-34">
                  Duis mollis gravida commodo id luctus erat porttitor ligula,
                  eget lacinia odio sem aget elit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="frame-39">
            <div className="frame-24">
              <p className="text-wrapper-35">Not sure where to start?</p>
              <p className="request-a-demo-call">
                Request a demo call and get all your queries answered. <br />
                Don’t Worry, we will not trigger spam calls.
              </p>
            </div>
            <div className="frame-40">
              <div className="frame-41">
                <div className="overlap-group-8">
                  <div className="text-wrapper-36">Join</div>
                </div>
              </div>
              <div className="text-wrapper-37">Enter Email</div>
            </div>
          </div>
          <img
            className="line"
            alt="Line"
            src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/line-1.svg"
          />
          <div className="frame-42">
            <div className="frame-36">
              <div className="frame-43">
                <div className="group-5">
                  <div className="img-wrapper">
                    <img
                      className="img-6"
                      alt="Img"
                      src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/-.svg"
                    />
                  </div>
                  <div className="ellipse" />
                  <div className="ellipse-2" />
                  <div className="ellipse-3" />
                </div>
                <div className="text-wrapper-38">Purple Maze</div>
              </div>
              <p className="text-wrapper-39">
                High level experience in web design and development knowledge,
                producing quality work.
              </p>
              <div className="frame-44">
                <img
                  className="img-5"
                  alt="Icon facebook"
                  src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/icon-facebook.svg"
                />
                <img
                  className="img-5"
                  alt="Icon instagram"
                  src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/icon-instagram.svg"
                />
                <img
                  className="img-5"
                  alt="Icon linkedin"
                  src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/icon-linkedin.svg"
                />
                <img
                  className="img-5"
                  alt="Icon twitter"
                  src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/icon-twitter.svg"
                />
                <img
                  className="img-5"
                  alt="Icon youtube"
                  src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/icon-youtube.svg"
                />
              </div>
            </div>
            <div className="menu-footer">
              <div className="text-wrapper-40">How to Reach Us</div>
              <div className="frame-45">
                <p className="text-wrapper-41">
                  Some address with street number city and state
                </p>
                <div className="text-wrapper-42">info@email.com</div>
                <div className="text-wrapper-42">(+91) 9876543210</div>
              </div>
            </div>
            <div className="menu-footer">
              <div className="text-wrapper-40">Company</div>
              <div className="frame-45">
                <div className="text-wrapper-43">About Us</div>
                <div className="text-wrapper-42">Careers</div>
                <div className="text-wrapper-42">FAQs</div>
                <div className="text-wrapper-42">Teams</div>
                <div className="text-wrapper-42">Contact Us</div>
              </div>
            </div>
            <div className="menu-footer">
              <div className="text-wrapper-40">Our Newsletter</div>
              <div className="frame-8">
                <p className="text-wrapper-44">
                  Subscribe to our newsletter to get our news delivered to you.
                </p>
                <div className="frame-46">
                  <div className="overlap-group-9">
                    <div className="text-wrapper-45">Join</div>
                  </div>
                  <div className="text-wrapper-46">Enter Email</div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <Navbar />
      </div>
    </div>
  );
};
