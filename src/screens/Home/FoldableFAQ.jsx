import React, { useState } from "react";
import "./FoldableFAQ.css";
import questionicon from "../images/question_icon.png"
import dompurify from 'dompurify';

const FoldableFAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };
  const sanitizer = dompurify.sanitize;

  return (

    <div class="flex space-x-4 px-6 items-center">
      <img class="" src={questionicon}></img>
      {isOpen && (<div class="flex flex-col space-y-2 pt-8" onClick={toggleFAQ}>
        <span class="font-bold">{question}</span>
        <p dangerouslySetInnerHTML={{ __html: sanitizer(answer) }}></p>

      </div>)
      }

      {!isOpen &&(
        <div class="flex space-x-2" onClick={toggleFAQ}>
          <span class="font-bold">{question}</span>
          <div class="py-1">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
            >
              <path
                fill="none"
                stroke="#3652D9"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity="1"
                strokeWidth="2"
                d="M8 1 8 15M1 8 15 8"
              ></path>
            </svg>
            </div>
          </div>
      )}
      

    </div>
  );
};

export default FoldableFAQ;
