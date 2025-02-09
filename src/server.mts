import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;

// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);

  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on(
      "join-room",
      ({ room, username }: { room: string; username: string }) => {
        socket.join(room);
        console.log(`User ${username} joined room ${room}`);
        socket.to(room).emit("user_joined", `${username} has joined the room`);
      }
    );

    socket.on(
      "message",
      ({
        room,
        sender,
        message,
      }: {
        room: string;
        sender: string;
        message: string;
      }) => {
        console.log(`${sender} sent message "${message}" on room ${room}`);
        io.to(room).emit("message", { message, sender });
      }
    );

    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
