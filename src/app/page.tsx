"use client";

import Chat from "@/components/chat/Chat";
import JoinRoom from "@/components/JoinRoom";
import useChat from "@/hooks/useChat";

export default function Home() {
  const {
    messages,
    userData,
    isUserJoined,
    handleChange,
    handleJoinRoom,
    handleSendMessage,
  } = useChat();

  return (
    <div className="flex flex-col space-y-7 w-full px-8 lg:px-0 lg:w-[38rem]">
      {isUserJoined ? (
        <Chat
          username={userData.username}
          onSendMessage={handleSendMessage}
          chatHistory={messages}
        />
      ) : (
        <JoinRoom onJoinRoom={handleJoinRoom} onChange={handleChange} />
      )}
    </div>
  );
}
