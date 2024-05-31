import React from "react";

function Button({ name }) {
  return (
    <div>
      <button className="px-5 py-2 m-2 bg-gray-300 rounded-lg">{name}</button>
    </div>
  );
}

export default Button;
