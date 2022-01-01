const express = require("express");
const http = require("http");
const path = require("path");
const socketio = require("socket.io");

const app = express();

//Socket.io connection
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("New S-IO Connection");
});

app.use(express.static(path.join(__dirname, "client")));

const PORT = process.env.PORT | 3000;

server.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
