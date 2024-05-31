import React from "react";

function VideoCard({ info }) {
  // console.log("Render 3");
  // console.log(info);

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="m-2 p-2 w-[260px] shadow-lg rounded-2xl">
      <img
        className="rounded-2xl"
        alt="thumbnails"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="text-sm">{channelTitle}</li>
        <li className="text-sm">{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
}

export default VideoCard;
