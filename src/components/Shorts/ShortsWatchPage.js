import React from "react";
import { useParams } from "react-router-dom";

const ShortsWatchPage = () => {
  const { shortsId } = useParams();
  console.log(shortsId);

  return (
    <div className="flex justify-center w-full ">
      <iframe
        className="rounded-lg"
        width="315"
        height="500"
        src={`https://www.youtube.com/embed/${shortsId}`} // Get the value of "v" parameter
        title="YouTube Shorts"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div></div>
    </div>
  );
};

export default ShortsWatchPage;
