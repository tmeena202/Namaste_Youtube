import React from "react";

function VideoCard({ info }) {
  // console.log("Render 3");
  // console.log(info);

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="m-2 p-2 w-[230px] hover:bg-slate-300 shadow-2xl rounded-lg">
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

// Higher Order Component.
// Comp that takes another component and return component.
export const AdVideoCard = ({ info }) => {
  return (
    <div className="m-1 p-1 border-2 bg-red-300 border-red-900 rounded-xl ">
      <h4>Ad with higher order fnc</h4>
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
