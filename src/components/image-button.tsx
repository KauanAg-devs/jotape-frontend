import React from "react";

type ImageButtonProps = {
    title: string
    width: string;
    height: string;
    image:  React.ReactNode
  };
  
  export default function ImageButton({
    width,
    height,
    image,
    title
  }: ImageButtonProps) {
    return (
      <div className="relative group">
        <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-300 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={`${width} ${height} text-gray-600`}
          >
            {image}
          </svg>
        </button>
        <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-gray-100 text-gray-600 text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {title}
        </span>
      </div>
    );
  }
  