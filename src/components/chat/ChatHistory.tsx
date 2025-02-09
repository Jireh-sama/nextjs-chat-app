import { ChatI } from "@/lib/types";
import ChatMessage from "./ChatMessage";
import { Fragment } from "react";

interface ChatHistoryProps {
  currentUser: string;
  chatHistory: ChatI[];
}

const ChatHistory = ({ currentUser, chatHistory }: ChatHistoryProps) => {
  return (
    <article className="bg-blue-50 w-full h-[540px] rounded-md p-3 space-y-2 overflow-y-auto">
      {chatHistory?.map((chat, index) => (
        <Fragment key={index}>
          <ChatMessage
            message={chat.message}
            sender={chat.sender}
            isOwnMessage={chat.sender === currentUser}
            timestamp={chat.timeStamp}
          />
        </Fragment>
      ))}
    </article>
  );
};

export default ChatHistory;
