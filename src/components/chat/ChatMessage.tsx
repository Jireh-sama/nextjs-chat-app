import React from "react";

interface ChatMessageProps {
  message: string;
  sender: string;
  timestamp: string
  isOwnMessage: boolean;
}

const ChatMessage = ({ message, sender, timestamp, isOwnMessage }: ChatMessageProps) => {
  const isSystemMessage = sender === "system";

  return (
    <>
      {isSystemMessage ? (
        <div className="flex justify-center items-center">
          <hr className="border-neutral-400 flex-1" />
          <p className="text-neutral-400 px-4">{message}</p>
          <hr className="border-neutral-400 flex-1" />
        </div>
      ) : (
        <div className={`flex flex-col space-y-2 ${isOwnMessage ? "items-end" : "items-start"}`}>
          <p className={`text-sm text-gray-400 ${isOwnMessage && "text-end"}`}>
            {sender} {timestamp}
          </p>
          <div
            className={`${isOwnMessage ? 'bg-blue-600' : 'bg-gray-400'} text-white py-2 px-6 rounded-2xl`}
          >
            <p>{message}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatMessage;
