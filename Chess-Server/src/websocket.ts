import ws from "ws";

const wss = new ws.Server(
  {
    port: 3001,
  },
  () => console.log("WebSocket started")
);

wss.on("connection", function connection(ws) {
  ws.on("message", function (boardState: any) {
    boardState = JSON.parse(boardState);
    switch (boardState.event) {
      case "message":
        broadcastMessage(boardState);
        break;
      case "connection":
        broadcastMessage(boardState);
        break;
    }
  });
  ws.send("Пользователь подключился");
});

function broadcastMessage(boardState: any) {
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(boardState));
  });
}
