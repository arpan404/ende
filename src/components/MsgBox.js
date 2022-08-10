import React from "react";

export default function MsgBox(props) {
  let msg = props.msg;
  const handleCopy = async () => {
    let copyBtn =
      props.type === "encryption"
        ? document.getElementById("copyEncrypted")
        : document.getElementById("copyDecrypted");
    await navigator.clipboard.writeText(msg);
    copyBtn.value = await "Copied";
    setTimeout(async () => {
      copyBtn.value = await "Copy";
    }, 2000);
  };
  return (
    <div className="mt-4">
      {!props.isError && (
        <span className="text-white lg:text-xl lg:m-3 m-2">
          {props.type === "encryption"
            ? "Encrypted Message :"
            : "Decrypted Message :"}
        </span>
      )}
      {props.isError && (
        <span className="text-red-600 lg:text-xl lg:m-3 m-2">Error:</span>
      )}

      <div className="flex justify-center mt-1">
        <div className="lg:pt-4 lg:pb-4 lg:pr-3 lg:pl-3 bg-[#383838] lg:w-10/12 lg:rounded-xl lg:mt-4 outline-none break-words w-10/12 rounded-md p-2">
          <pre className={props.isError ? "text-red-500" : "text-gray-200"}>
            {msg}
          </pre>
        </div>
      </div>
      <div className="flex justify-end w-10/12 lg:ml-4 ">
        {!props.isError && (
          <input
            id={props.type === "encryption" ? "copyEncrypted" : "copyDecrypted"}
            type="button"
            value="Copy"
            className="lg:w-20 lg:text-[18px] lg:h-10 lg:rounded-lg mt-2 h-8 w-16 text-[16px] rounded-md hover:cursor-pointer bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-800"
            onClick={handleCopy}
          />
        )}
      </div>
    </div>
  );
}
