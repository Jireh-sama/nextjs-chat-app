import { socket } from "@/lib/socketClient";
import { ChatI } from "@/lib/types";
import { getCurrentTime } from "@/lib/utils";
import { useEffect, useState } from "react";

const useChat = () => {
  const [isUserJoined, setIsUserJoined] = useState(false);
  const [messages, setMessages] = useState<ChatI[]>([]);
  const [userData, setUserData] = useState<{ username: string; room: string }>({
    username: "",
    room: "",
  });

  useEffect(() => {
    socket.on("user_joined", (message: string) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { message, sender: "system", timeStamp: getCurrentTime() },
      ]);
    });

    socket.on("message", ({ message, sender }) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          message,
          sender,
          timeStamp: getCurrentTime()
        }
      ]);
    });

    return () => {
      socket.off("user_joined");
      socket.off("message");
    };
  }, []);

  const handleJoinRoom = () => {
    if (!userData.room && !userData.username) return;

    socket.emit("join-room", {
      room: userData.room,
      username: userData.username,
    });
    setIsUserJoined(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    socket.emit("message", { room: userData.room, sender: userData.username, message});
  };

  return {
    messages,
    isUserJoined,
    userData,
    handleSendMessage,
    handleChange,
    handleJoinRoom,
  };
};

export default useChat;
