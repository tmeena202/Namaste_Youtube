import React from "react";

function ChatMessage({ name, message }) {
  return (
    <div className="flex items-center my-2 p-2 bg-white hover:bg-slate-300 rounded-lg shadow-2xl">
      <img
        className="h-6"
        alt="User-Logo"
        src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
      />
      <span className="font-bold px-2">{name}</span>
      <span className="text-sm">{message}</span>
    </div>
  );
}

export default ChatMessage;
