const express = require("express");
const WebSocket = require("ws");
const server = require("http").createServer();
const path = require("path");

const getWelcome = require("./handlers/getWelcome");

const app = express();
app.use(express.static(path.join(__dirname, "/views")));

app.get("/welcome", getWelcome);
app.get("*", (request, result) => {
  result.json({msg: "page not found"});
});

let numberOfUsers = 0;

const wss = new WebSocket.Server({server});

wss.on("connection", (ws, req) => {
  console.log("connection =");
  numberOfUsers += 1;

  // When a user is connected, we send the information to all users
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(numberOfUsers);
    }
  });

  // When a user quit, we send the information to all users
  ws.on("message", (data) => {
    console.log("message data=", data);
    if (data === "CLOSE") {
      numberOfUsers -= 1;
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(numberOfUsers);
        }
      });
    }
  });
});



server.on("request", app);
server.listen(3000, () => console.log(`Server listening on 3000`));
