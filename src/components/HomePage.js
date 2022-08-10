import React from "react";
import { Link } from "react-router-dom";
export default function HomePage() {
   
  return (
    <div className="flex lg:flex-row flex-col lg:max-w-[100%]">
        <Link to = "encrypt">
      <div className="text-white lg:w-[50vw] h-[50vh] lg:h-[100vh] bg-red-500 flex justify-center items-center hover:cursor-pointer hover:bg-red-600 active:bg-red-800 transition ease-in-out delay-100 select-none">
        <p className="text-[65px] lg:text-8xl">Encrypt</p>
      </div>
      </Link>
      <Link to = "decrypt">
      <div className="text-white lg:w-[50vw]  h-[50vh] lg:h-[100vh] bg-blue-500 flex justify-center items-center hover:cursor-pointer hover:bg-blue-600 active:bg-blue-800 transition ease-in-out delay-100 select-none">
        <p className="text-[65px] lg:text-8xl">Decrypt</p>
      </div>
      </Link>
    </div>
  );
}
