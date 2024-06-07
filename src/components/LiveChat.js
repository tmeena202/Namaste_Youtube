/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

function LiveChat() {
  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      console.log("API Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + "🚀",
        })
      );
    }, 1000);

    return () => {
      console.log("Clean up fnc");
      clearInterval(i);
    };
  }, []);

  return (
    <div className="">
      <h1 className="font-bold text-center">LiveChat 🔽</h1>
      {chatMessage.map((c, index) => (
        <ChatMessage key={index} name={c.name} message={c.message} />
      ))}
    </div>
  );
}

export default LiveChat;
