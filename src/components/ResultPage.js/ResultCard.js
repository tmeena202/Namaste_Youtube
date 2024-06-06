/* eslint-disable no-unused-vars */
import React from "react";

function ResultCard({ info }) {
  const { snippet, statistics } = info;
  const { channelTitle, title, description, thumbnails } = snippet;

  return (
    <div className="flex">
      <img
        className="m-2 p-2 w-1/3 rounded-2xl"
        alt="thumbnail"
        src={thumbnails.high.url}
      ></img>

      <div className="px-2 py-4">
        <h2 className="font-bold">{title}</h2>
        <p>{channelTitle}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}

export default ResultCard;
