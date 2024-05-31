import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  // console.log("Render 1");
  const [videos, setVideos] = useState([]);

  // useEffect() called after initial component render
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    // console.log("Render 2");
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.length > 0 ? (
        videos.map((video) => <VideoCard info={video} key={video.key} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VideoContainer;
