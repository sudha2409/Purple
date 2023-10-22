import React, { useState } from "react";
import "./FoldableFAQ.css";

const FoldableFAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (

    <div class="flex space-x-4 px-6">
      <span>?</span>
      {isOpen && (<div class="flex flex-col space-y-2" onClick={toggleFAQ}>
        <span>{question}</span>
        <p>{answer}</p>

      </div>)
      }

      {!isOpen &&(
        <div class="flex space-x-2" onClick={toggleFAQ}>
          <span>{question}</span>
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
    // <div className={`foldable-faq ${isOpen ? "open" : ""} `}>
    //   <div className=" frame-32" onClick={toggleFAQ}>
    //     <div className="frame-33">
    //       <div className="text-wrapper-28">?</div>
    //     </div>
    //     <div className="text-wrapper-29">
    //       {question}

    //       {isOpen && (
    //         <div className=" " onClick={toggleFAQ}>
    //           <p
    //             className="text-wrapper-30"
    //             dangerouslySetInnerHTML={{ __html: answer }}
                
    //           />
    //         </div>
    //       )}
    //     </div>

    //     {!isOpen && (
    //       <div className="" onClick={toggleFAQ}>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 16 16"
    //           width="16"
    //           height="16"
    //         >
    //           <path
    //             fill="none"
    //             stroke="#3652D9"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeOpacity="1"
    //             strokeWidth="2"
    //             d="M8 1 8 15M1 8 15 8"
    //           ></path>
    //         </svg>
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
};

export default FoldableFAQ;
