import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

function WatchPage() {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);
  return (
    <div className="w-full">
      <div className="ml-10 mt-5 flex">
        <div>
          <iframe
            width="800"
            height="400"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="h-[400px] w-full ml-1 mr-2 p-2 border border-black rounded-lg bg-slate-100 flex flex-col-reverse overflow-y-scroll">
          <LiveChat />
        </div>
      </div>

      <CommentsContainer />
    </div>
  );
}

export default WatchPage;
