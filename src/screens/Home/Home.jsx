import React from "react";
import VideoModal from "./VideoModal";
import "./style.css";
import { Footer } from "../../components/Footer";
import Navbar from "./Navbar";
import PopupMsg from "../Pop-Ups/PopupMsg";
import FoldableFAQ from "./FoldableFAQ";

export const Home = () => {
  // const videoUrl = "https://www.youtube.com/watch?v=og_ob8Xdlvk";
  return (



    <div className="homePage complete_screen">
      <Navbar />
      <div class="flex flex-col w-full overall lg:items-center lg:flex-row lg:justify-between lg:text-white">
        <div class="h-full lg:w-1/2 lg:h-full">
          <div class="flex flex-col px-16 py-10 lg:py-18 lg:my-6 max-w-2xl">
            <img class="w-10 h-10 doodle_1_position" src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/64088dfd259d863110d90801-doodle1-1-1.svg" />
            <span class="content-1 text-4xl lg:text-6xl leading-loose">
              Find best creatives &amp; Creators for
            </span>
            <span class="blue-italic-style text-4xl lg:text-6xl italic lg:leading-relaxed">
              Social media
            </span>
            <span class="content-1 text-4xl lg:text-6xl leading-relaxed">Marketing</span>
            <span class="content-2 py-8">
              We analyze over 100,000 fastest growing D2c brand creatives
              and handpick the best ones for you.
            </span>
            <div class="flex items-center space-x-4">
            <a href="/signup">

              <button class="signup_color min-w-fit	 px-6 py-2 my-1 rounded-full lg:px-6 lg:py-2 lg:rounded-full">Get Started</button>
            </a>

              <a href="/#see-pricing" class="py-2 min-w-fit px-2 see_pricing lg:mx-4"> See Pricing</a>
              <img class="hidden lg:inline lg:w-40 lg:h-10 lg-px-6 lg-mx-10 xl:w-60 xl:h-20 xl:px-6 xl:mx-40" src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/64088dfd55b652dcf8126b5d-doodle2-1.svg" />
            </div>

          </div>
        </div>

        <div class=" h:full lg:h-full lg:w-1/2">
          <img class="object-cover h-1/2 w-full" src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/rectangle-6.png" />
        </div>
      </div>
      <div class="flex flex-col items-center py-20 complete_screen">
        <div class="flex flex-col items-center">
          <span class="uppercase text-sm text-color-3 py-4">Why choose us?</span>
          <span class="text-xl py-2 sm:text-4xl">Here are few <span class="blue-italic-style">Reasons</span> why our</span>
          <span class="text-xl py-2 sm:text-4xl">customes choose PurpleMaze</span>
        </div>
        <div class="flex w-full space-x-10 flex-col lg:flex-row py-8">
          <div class="flex lg:flex-col lg:w-1/3 lg:justify-between lg:pl-8 lg:pr-4 overflow-x-auto">
            <div class="flex h-32 justify-between py-4 bg-white rounded-md px-2 min-w-[280px] mx-2">
              <span class="text-5xl px-3 text-color-4">01</span>
              <div class="text flex flex-col">
                <span class="text-base font-medium py-1 text-color">Biggest library of creatives</span>
                <p class="text-sm text-color-3">Choose from over 100000+ high performing creatives</p>
              </div>
            </div>
            <div class="flex h-32 justify-between py-4 bg-white rounded-md px-2 min-w-[280px] mx-2">
              <span class="text-5xl px-3 text-color-4">02</span>
              <div class="text flex flex-col">
                <span class="text-base font-medium py-1 text-color">Filter to your needs</span>
                <p class="text-sm text-color-3">Narrow down by product, industry, location, platform & more
                </p>
              </div>
            </div>
            <div class="flex h-32 justify-between py-4 bg-white rounded-md px-2 min-w-[280px] mx-2">
              <span class="text-5xl px-3 text-color-4">03</span>
              <div class="text flex flex-col">
                <span class="text-base font-medium py-1 text-color">Stay up to the trend</span>
                <p class="text-sm text-color-3">We add 100+ creatives every month after analyzing thousands of latest creatives</p>
              </div>
            </div>

          </div>
          <div class="py-4 w-full lg:w-2/3 px-2 mx-1 ">
            <img class="object-contain" src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/rectangle-7.svg" />
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row complete_screen">
        <div class="flex flex-col px-9 ml-5">
          <span class="uppercase text-sm text-color-3 py-4">What we do?</span>
          <span class="text-xl py-2 sm:text-4xl">The service we offer is</span>
          <span class="text-xl py-2 sm:text-4xl">designed <span class="blue-italic-style">Specifically</span> to</span>
          <span class="text-xl py-2 sm:text-4xl">meet your needs</span>
          <span class="text-color-3 py-8 max-w-[75%]">
            We analyze over 100,000 fastest growing D2c brand creatives
            and handpick the best ones for you.
          </span>
          <div class="flex items-center space-x-4">
            <a href="/signup">

              <button class="signup_color min-w-fit	 px-6 py-2 my-1 rounded-full lg:px-6 lg:py-2 lg:rounded-full">Get Started</button>
            </a>

              <a href="/#see-pricing" class="py-2 min-w-fit px-2 see_pricing lg:mx-4"> See Pricing</a>
            </div>


        </div>

        <div class="flex flex-col items-center justify-around space-y-14 py-4">
          <div class="flex flex-row space-x-6 items-center bg-white px-4 py-6 max-w-[80%]">
            <img class="w-20 h-20" src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64d90915bde965d8a1d78907/img/image-11@2x.png" />
            <div class="flex flex-col space-y-4">
              <span class="bold">Reason one for choosing</span>
              <span class="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nobis praesentium voluptas illum ipsam </span>
            </div>
          </div>
          <div class="flex flex-row space-x-6 items-center bg-white px-4 py-6 max-w-[80%]">
            <img class="w-20 h-20" src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64d90915bde965d8a1d78907/img/image-11@2x.png" />
            <div class="flex flex-col space-y-4">
              <span class="bold">Reason one for choosing</span>
              <span class="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nobis praesentium voluptas illum ipsam </span>
            </div>
          </div>
          <div class="flex flex-row space-x-6 items-center bg-white px-4 py-6 max-w-[80%]">
            <img class="w-20 h-20" src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64d90915bde965d8a1d78907/img/image-11@2x.png" />
            <div class="flex flex-col space-y-4">
              <span class="bold">Reason one for choosing</span>
              <span class="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nobis praesentium voluptas illum ipsam </span>
            </div>
          </div>
          <div class="flex flex-row space-x-6 items-center bg-white px-4 py-6 max-w-[80%]">
            <img class="w-20 h-20" src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64d90915bde965d8a1d78907/img/image-11@2x.png" />
            <div class="flex flex-col space-y-4">
              <span class="bold">Reason one for choosing</span>
              <span class="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nobis praesentium voluptas illum ipsam </span>
            </div>
          </div>

        </div>

      </div>

      <div class="flex flex-col items-center py-20 space-y-10 complete_screen">
        <div class="flex flex-col items-center">
          <span class="uppercase text-sm text-color-3 py-4">our pricing</span>
          <span class="text-xl py-2 sm:text-4xl">We offer great prices, premium products</span>
          <span class="text-xl py-2 sm:text-4xl">and <span class="blue-italic-style">Quality</span> Services for your product</span>
        </div>

        <div class="flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:space-x-9">
        <div class="flex flex-col bg-white py-2 lg:my-0">
            <div class="flex flex-col items-center space-y-4 pt-4 px-4">
              <div class="flex items-end space-x-3">
                <span class="text-xl">₹</span>
                <span class="text-6xl">0</span>
                <span class="text-xl">/mo</span>
              </div>
              <span class="">Free Plan</span>
              <div class="flex flex-col max-w-[320px] space-y-3 px-4">
                <div class="flex space-x-3">
                  <img src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-tick-circle.svg" />
                  <span class="">Search thousand of influencers</span>
                </div>
                <div class="flex space-x-3">
                  <img src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-tick-circle.svg" />
                  <span class="">Manually purchase content from influencers</span>
                </div>
                <div class="flex space-x-3">
                  <img src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-tick-circle.svg" />
                  <span class=""><span class="font-bold">10%</span> marketplace fee</span>
                </div>
              </div>
              <div class="flex flex-col items-center space-y-2 py-20">
                <a href="/signup">
                <button class="signup_color min-w-fit my-1 px-6 py-2 rounded-full lg:px-6 lg:py-2 lg:rounded-full">Sign up</button>

                </a>
                <span class="pricing_bottom">Current Plan</span>

              </div>
            </div>
          </div>
          <div class="flex flex-col bg-white py-2 lg:my-0">
            <div class="flex flex-col items-center space-y-4 pt-4 px-4">
              <div class="flex items-end space-x-3">
                <span class="text-xl">₹</span>
                <span class="text-6xl">7999</span>
                <span class="text-xl">/year</span>
              </div>
              <span class="">Pro Plan</span>
              <div class="flex flex-col max-w-[320px] space-y-3 px-4">
                <div class="flex space-x-3">
                  <img src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-tick-circle.svg" />
                  <span class="">Get access to 3000+ creatives</span>
                </div>
                <div class="flex space-x-3">
                  <img src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-tick-circle.svg" />
                  <span class="">Filter by brand, keyword, industry, format</span>
                </div>
                <div class="flex space-x-3">
                  <img src="https://anima-uploads.s3.amazonaws.com/projects/64941b1b7b1311a96e83e640/releases/64c5661df29788c65e4e3a24/img/vuesax-bulk-tick-circle.svg" />
                  <span class="">Wishlist and save</span>
                </div>
              </div>
              <div class="flex flex-col items-center space-y-2 py-20">
              <a href="/signup">
                <button class="signup_color min-w-fit my-1 px-6 py-2 rounded-full lg:px-6 lg:py-2 lg:rounded-full">Sign up</button>

                </a>                
                <span class="pricing_bottom">Cancel Anytime</span>

              </div>
            </div>
          </div>
        </div>
      </div>

    <div class="mx-20 my-10">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-8">
    <FoldableFAQ
                  question="How do you select the best ads?"
                  answer="We've devised a comprehensive evaluation protocol for the curation of Social Media ads.
                  <br /><br />
                  Before an ad example is accepted into Purple Maze, 
                  we conduct a thorough assessment of the associated brand, considering factors such as:
                  <br />
                  - Is it a rapidly expanding eCommerce brand?
                  <br />
                  - Does it boast an estimated annual revenue of at least $1 million?
                  <br />
                  - What's the volume of traffic it generates?
                  <br />
                  - Details of its ad testing procedures, among other criteria.
                  <br /><br />
                  Should a brand meet our stringent standards, it becomes part of our internal brand portfolio, which now comprises over 1000+ brands. We continuously analyze these brands on a weekly basis to gain insights into their successful strategies.
                  <br />
                  At the creative level, we scrutinize a variety of attributes, including:
                  <br />
                  - The ad's duration relative to the testing period.
                  <br />
                  - The effectiveness of the hook in capturing users' attention.
                  <br />
                  - Concept, style, visual elements, and copy.
                  <br />
                  Our dedicated curation team evaluates more than 10,000 ads each month, but only a select few pass this rigorous process. We handpick and incorporate just over 100 ads into Purple Maze each month, emphasizing quality above all else.
                `"
                />
                <FoldableFAQ
                  question="What are all the possibilities with Purple Maze?"
                  answer="You'll gain entry to a vast library of 3000+ Facebook/Instagram ad illustrations. This resource empowers you to launch your ad campaigns and videos in your industry ahead of your competitors, uncover hidden ad creatives, stay connected to the broader marketing landscape, and grasp the strategies driving today's viral trends.⁣⁣⁣

    <br /><br />But perhaps most crucially, you'll be equipped to produce high-performing ads!⁣⁣

    <br /><br />It's straightforward. Apply your newfound knowledge to create significantly improved ads and videos tailored to your audience!⁣"
                />
                <FoldableFAQ
                  question="Do you offer refunds?"
                  answer="Should you not discover a new successful ad for your business
                    within the initial 7 days of testing our creative ideas,
                    we will provide a full refund of your payment!"
                />
                <FoldableFAQ
                  question="Does ads have impact on ROI?"
                  answer="According to research, creative impact accounts for up to 50% of the variation in advertising results. Surprisingly, many leaders allocate only a fraction, not even 5%, of their focus to this aspect.⁣⁣⁣⁣⁣⁣
    <br />
    <br />
Now, picture the potential impact if you take action on this data and begin prioritizing the study and enhancement of ad creatives!⁣⁣"
                />
      
    </div>

    </div>
    <Footer/>
    </div>
  );
};
