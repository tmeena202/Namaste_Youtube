import React from "react";
import Button from "../components/Button";

const list = [
  "All",
  "Study",
  "Gaming",
  "Songs",
  "Live",
  "Chess",
  "Cooling",
  "Anime",
  "Coding",
  "DSA",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item, index) => {
        return <Button name={item} key={index} />;
      })}
    </div>
  );
};

export default ButtonList;
