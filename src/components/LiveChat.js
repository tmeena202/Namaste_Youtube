/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

function LiveChat() {
  const dispatch = useDispatch();

  const [liveMessage, setLiveMessage] = useState("");

  const chatMessage = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      // console.log("API Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);

    return () => {
      console.log("Clean up fnc");
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="h-[400px] w-[400px] ml-1 mr-2 p-2 border border-black rounded-lg bg-slate-100 flex flex-col-reverse overflow-y-scroll">
        <div>
          <h1 className="font-bold text-center ">LiveChat 🔽</h1>
          {chatMessage.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="m-1 border border-black w-[400px] bg-slate-100 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("On sumbit : ", liveMessage);
          dispatch(
            addMessage({
              name: "Tushar",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="m-2 p-1 w-[325px] border border-black rounded-lg"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="p-1 bg-green-300 rounded-md">Send</button>
      </form>
    </>
  );
}

export default LiveChat;
