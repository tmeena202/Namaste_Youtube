/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState("");

  console.log("Component Rendered ..");

  // useEffect() called after initial component render
  useEffect(() => {
    console.log("UseEffect Called ...");
    getVideos();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getVideos = async () => {
    console.log("Api Called started ...");
    setLoading(true);
    const url = nextPageToken
      ? `${YOUTUBE_VIDEOS_API}&pageToken=${nextPageToken}`
      : YOUTUBE_VIDEOS_API;
    const response = await fetch(url);
    const data = await response.json();
    console.log("Api Called ended ...");
    setVideos((prevVideos) => [...prevVideos, ...data.items]);
    setNextPageToken(data.nextPageToken);
    setLoading(false);
  };

  //Infinite Scrolling Feature Here !!!
  const handleScroll = () => {
    console.log("scrollBar changes");
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight &&
      !loading
    ) {
      console.log("scrollBar reaches End - handleScroll called");
      // fetch api's again.
      getVideos();
    }
  };

  return (
    <div className="flex flex-wrap">
      {console.log("UI Loaded ...")}
      {/* If both conditions are true than it will render. */}
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {videos.length > 0 ? (
        videos.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id + Math.random()}>
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
