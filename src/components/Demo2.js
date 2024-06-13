import React, { useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(1);

  let x = 10;
  return (
    <div className="m-4 p-2 w-96 border border-black">
      <div>
        <button
          className="bg-green-400 p-1 m-1 border border-black rounded-sm"
          onClick={() => {
            console.log("value of x " + x);
            x = x + 1;
          }}
        >
          Increase X +
        </button>
        <span className="pl-5 font-bold">let X = {x}</span>
      </div>
      <div>
        <button
          className="bg-green-400 p-1 m-1 border border-black rounded-sm"
          onClick={() => {
            console.log("value of Y " + y);
            setY(y + 1);
          }}
        >
          Increase Y +
        </button>
        <span className="pl-5 font-bold">state Y = {y}</span>
      </div>
    </div>
  );
};

export default Demo2;
