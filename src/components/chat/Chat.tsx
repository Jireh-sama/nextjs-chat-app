import React from "react";
import ChatHistory from "./ChatHistory";
import ChatForm from "./ChatForm";
import { ChatI } from "@/lib/types";

interface ChatProps {
  username: string;
  onSendMessage: (msg: string) => void;
  chatHistory: ChatI[];
}

const Chat = ({ username, onSendMessage, chatHistory }: ChatProps) => {
  return (
    <>
      <header>
        <h1 className="text-4xl font-bold text-center">Real Time Chat App</h1>
      </header>
      <ChatHistory currentUser={username} chatHistory={chatHistory} />
      <footer className="flex flex-col space-y-3">
        <ChatForm sendMessage={onSendMessage} />
        <p className="text-xs text-neutral-400 text-center">
          Powered by Next.js
        </p>
      </footer>
    </>
  );
};

export default Chat;
