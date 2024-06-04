/* eslint-disable no-unused-vars */
import React from "react";

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
  const { name, text, like, replies } = data;
  return (
    <div className="flex items-start mb-3 shadow-lg rounded-lg p-2 bg-gray-300">
      <img
        className="w-10 h-10 rounded-full"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdztTDcpZ2pFqwWDYwSXbvZq5nzJYg5cn8w&s"
      ></img>
      <div className="ml-3">
        <p className="font-bold text-sm text-gray-900">@{name}</p>
        <p className="text-sm text-gray-700 mt-1">{text}</p>
        <p className="text-sm text-gray-600 mt-1">👍 {like}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return (
    <>
      {comments.map((comment, index) => (
        <div>
          <Comment key={index} data={comment} />
          <div className="pl-5 border border-l-black ml-5">
            <CommentsList key={index} comments={comment.replies} />
          </div>
        </div>
      ))}
    </>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 w-[800px]">
      <h1 className="text-2xl font-bold">Comments :</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
