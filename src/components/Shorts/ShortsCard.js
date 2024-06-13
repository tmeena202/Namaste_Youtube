import React from "react";

const ShortsCard = ({ data }) => {
  const { snippet } = data;
  const { channelTitle, thumbnails } = snippet;

  return (
    <div className="m-1 p-1 overflow-hidden">
      {/* w-[230px] h-[130px] better quality */}
      <div className="w-[230px] h-[130px] rounded-lg overflow-hidden">
        <img
          className="w-full h-full object-cover"
          alt="thumbnail"
          src={thumbnails.high.url}
        />
      </div>
      <div className="p-2">
        <ul>
          <h3 className="text-sm truncate">{channelTitle}</h3>
        </ul>
      </div>
    </div>
  );
};

export default ShortsCard;
