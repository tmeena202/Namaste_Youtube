/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import { DEFAULT_PROFILE_IMAGE_URL } from "../utils/constants";

const commentsData = [
  {
    name: "John",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    like: "10",
    replies: [],
  },
  {
    name: "Alice",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    like: "67",
    replies: [
      {
        name: "Bob",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        like: "29",
        replies: [
          {
            name: "Charlie",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            like: "11",
            replies: [
              {
                name: "David",
                text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                like: "5",
                replies: [],
              },
              {
                name: "Eve",
                text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
                like: "8",
                replies: [],
              },
            ],
          },
          {
            name: "Frank",
            text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
            like: "3",
            replies: [],
          },
        ],
      },
      {
        name: "Grace",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        like: "15",
        replies: [],
      },
    ],
  },
  {
    name: "Harry",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    like: "42",
    replies: [],
  },
  {
    name: "Alice",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    like: "67",
    replies: [
      {
        name: "Bob",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        like: "29",
        replies: [
          {
            name: "Charlie",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            like: "11",
            replies: [
              {
                name: "David",
                text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                like: "5",
                replies: [],
              },
              {
                name: "Eve",
                text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
                like: "8",
                replies: [],
              },
            ],
          },
          {
            name: "Frank",
            text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
            like: "3",
            replies: [],
          },
        ],
      },
      {
        name: "Grace",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        like: "15",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { authorDisplayName, textDisplay, authorProfileImageUrl, likeCount } =
    data.snippet.topLevelComment.snippet;
  return (
    <div className="flex items-start mb-3 shadow-lg rounded-lg p-2 bg-gray-300">
      <img
        className="w-10 h-10 rounded-full"
        alt="user"
        src={authorProfileImageUrl || DEFAULT_PROFILE_IMAGE_URL}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = DEFAULT_PROFILE_IMAGE_URL;
        }}
      ></img>
      <div className="ml-3">
        <p className="font-bold text-sm text-gray-900">{authorDisplayName}</p>
        <p className="text-md text-gray-700 mt-1">{textDisplay}</p>
        <p className="text-sm text-gray-600 mt-1">👍 {likeCount}</p>
      </div>
    </div>
  );
};

const Reply = ({ data }) => {
  const { authorDisplayName, textDisplay, authorProfileImageUrl, likeCount } =
    data.replies?.comments || {};
  return (
    <div className="flex items-start mb-3 shadow-lg rounded-lg p-2 bg-gray-300">
      <img
        className="w-10 h-10 rounded-full"
        alt="user"
        src={authorProfileImageUrl || DEFAULT_PROFILE_IMAGE_URL}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = DEFAULT_PROFILE_IMAGE_URL;
        }}
      ></img>
      <div className="ml-3">
        <p className="font-bold text-sm text-gray-900">{authorDisplayName}</p>
        <p className="text-md text-gray-700 mt-1">{textDisplay}</p>
        <p className="text-sm text-gray-600 mt-1">👍 {likeCount}</p>
      </div>
    </div>
  );
};

//
const CommentsList = ({ commentsArray }) => {
  console.log(commentsArray);
  return (
    <>
      {commentsArray.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          {/* <div className="pl-5 border border-l-black ml-5">
            <Reply data={comment} />
          </div> */}
        </div>
      ))}
    </>
  );
};

// Main Comment Component
const CommentsContainer = () => {
  const [commentsArray, setCommentsArray] = useState([]);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  console.log("Rendering");
  // console.log(comments);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/commentThreads?key=${GOOGLE_API_KEY}&textFormat=plainText&part=snippet,replies&videoId=${videoId}&maxResults=100`
    );
    const json = await data.json();
    // console.log(json);
    setCommentsArray(json.items);
  };
  return (
    <div className="m-5 p-2 w-[800px]">
      <h1 className="text-2xl font-bold">Comments :</h1>
      {commentsArray.length > 0 ? (
        <CommentsList commentsArray={commentsArray} />
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default CommentsContainer;
