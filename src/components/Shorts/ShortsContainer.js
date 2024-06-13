import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../../utils/constants";
import ShortsCard from "./ShortsCard";
import { Link } from "react-router-dom";

const ShortsContainer = () => {
  const [shortsData, setShortsData] = useState([]);

  useEffect(() => {
    getShorts();
  }, []);

  const getShorts = async () => {
    // let query = "music";
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&videoDuration=short&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();
    console.log(json.items);
    setShortsData(json.items);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center font-bold text-2xl my-4">YouTube Shorts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {shortsData.length > 0 ? (
          shortsData.map((short) => (
            <Link to={"/shorts/" + short.id.videoId} key={short.id.videoId}>
              <ShortsCard data={short} />
            </Link>
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
};

export default ShortsContainer;

/* 
    Shorts Container (API call) 
        - Shorts Cards ()
            - Shorts Watch page <iFrame>
*/
