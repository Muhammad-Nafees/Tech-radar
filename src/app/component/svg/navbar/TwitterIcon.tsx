import React from "react";

const TwitterIcon = () => {
  return (
    <div className="cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="#090E21"
        viewBox="0 0 375 375"
      >
        <g>
          <path
            fill="#000"
            d="M187 7a180 180 0 1 0 0 361 180 180 0 0 0 0-361"
          ></path>
        </g>
        <g transform="translate(90 85)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="199.8"
            height="199.8"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="M18 2h4l-8 9 9 11h-7l-5-7-6 7H2l7-9L1 2h7l5 6zm-1 18h2L7 4H5z"
            ></path>
          </svg>
        </g>
      </svg>
    </div>
  );
};

export default TwitterIcon;
