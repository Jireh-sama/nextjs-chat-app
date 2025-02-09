import { useState } from "react";
import Input from "../Input";

interface ChatInputProps {
  sendMessage: (msg: string) => void;
}

const ChatForm = ({ sendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!message.trim()) return;

    e.preventDefault();
    sendMessage(message);
    setMessage("");
  };

  // Submit chat by pressing Enter key
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <Input
        placeholder="Enter message"
        className="w-full"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        type="submit"
        className="p-3 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
      >
        Send
      </button>
    </form>
  );
};

export default ChatForm;
