"use client";

import Input from "./Input";

interface JoinRoomProps {
  onJoinRoom: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const JoinRoom = ({ onJoinRoom, onChange }: JoinRoomProps) => {
  return (
    <>
      <header>
        <h1 className="text-4xl text-center">Real Time Chat App</h1>
      </header>

      <div className="flex flex-col space-y-3 ">
        <Input className="w-full" id="username" placeholder="Enter username" onChange={onChange}/>
        <Input className="w-full" id="room" placeholder="Enter room" onChange={onChange}/>
        <button
          className="p-3 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
          onClick={onJoinRoom}
        >
          Enter
        </button>
      </div>

      <footer className="text-center">
        <p className="text-xs text-neutral-400">Powered by Next.js</p>
      </footer>
    </>
  );
};

export default JoinRoom;
