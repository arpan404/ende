import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import MsgBox from "./MsgBox";
import CryptoJS from "crypto-js";
export default function Decrypt(props) {
  const [msg, setMsg] = useState("");
  const [userInput, setInput] = useState("");
  const [error, setError] = useState(false);

  const [pwd, setPwd] = useState("R%fqMlYh2OJfi%W555&DE49fIFvOw4T2tkpGJd0$");
  const handleInput = (event) => {
    setInput(event.target.value.trim());
  };
  const handlePwd = (event) => {
    setPwd(event.target.value);
  };
  const handleAction = async () => {
    if (userInput.length > 0) {
      try {
        let decrypted = await CryptoJS.AES.decrypt(userInput, pwd);
        if (decrypted.toString(CryptoJS.enc.Utf8).length > 0) {
          setMsg(decrypted.toString(CryptoJS.enc.Utf8));
          setError(false);
        } else {
          setError(true);
          setMsg("Something went wrong");
        }
      } catch (e) {}
    }
  };

  return (
    <div>
      <div className="lg:mt-2 lg:ml-4  mt-5 ml-5">
        <Link to="/">
          <b className="text-white ml-4 text-xl">Home</b>
        </Link>
        <Link to="/encrypt">
          <b className="text-white ml-4 text-xl">Encryption</b>
        </Link>
      </div>
      <div className="text-white lg:font-bold lg:text-8xl flex justify-center lg:m-20 mt-10 mb-5 text-3xl ">
        <p>{"Decrypt Message"}</p>
      </div>
      <div className="flex justify-center flex-wrap">
        <textarea
          cols="3000"
          rows="10"
          value={userInput}
          onChange={handleInput}
          className="lg:w-2/4 text-white bg-[#383838] outline-none lg:border-2 border-red-600 lg:rounded-xl lg:pl-4 lg:pr-4 lg:pt-1 lg:pb-1 max-w-full w-[95%] rounded-lg p-2 border-[1px]"
          style={{ resize: "none" }}
        ></textarea>
      </div>
      <div className="flex lg:justify-end lg:flex-nowrap justify-center flex-wrap lg:w-3/4 w-full">
        <input
          id="pwd"
          type="text"
          className="lg:h-10 lg:mt-6 lg:mr-5 lg:w-96 bg-[#383838] outline-none rounded-lg text-gray-200 pl-2 pr-2 h-8 w-[90%] mt-4 mb-2"
          placeholder="Password"
          onChange={handlePwd}
        />
        <input
          type="button"
          value={"Decrypt"}
          className="lg:w-32 lg:text-[22px] lg:h-12 lg:rounded-lg lg:mt-5 hover:cursor-pointer bg-red-500 text-white hover:bg-red-600 active:bg-red-800 w-[90%] rounded-md h-8"
          onClick={handleAction}
        />
      </div>
      {msg !== "" && <MsgBox type="decryption" msg={msg} isError={error} />}
    </div>
  );
}
