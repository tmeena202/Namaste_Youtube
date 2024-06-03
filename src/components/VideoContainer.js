import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

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
      {/* If both conditions are true than it will render. */}
      {videos[0] && <AdVideoCard info={videos[0]} />}

      {videos.length > 0 ? (
        videos.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VideoContainer;
