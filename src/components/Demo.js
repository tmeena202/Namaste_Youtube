import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  console.log("Rendering again ....");

  console.time();
  const prime = useMemo(() => findPrime(text), [text]);
  console.timeEnd();

  return (
    <div
      className={`m-4 p-2 w-96 border border-black ${
        isDarkTheme ? "bg-black text-white" : ""
      }`}
    >
      <div>
        <button
          className="bg-green-400 p-1 m-2 rounded-md"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Theme
        </button>
      </div>
      <div>
        <input
          className={`border border-black w-72 p-2 ${
            isDarkTheme ? "text-black" : ""
          }`}
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>nth Prime : {prime}</div>
    </div>
  );
};

export default Demo;
