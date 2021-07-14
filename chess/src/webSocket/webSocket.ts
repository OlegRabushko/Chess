import { Piece } from "../components/interfaces-enums";
import { cloneBoardState } from "../components/body/game/chess-field/helper";

export const socket = new WebSocket("ws://localhost:3001");

interface SocketProps {
  event: string;
  boardState: Piece[] | undefined;
  players?: number;
}

export const sendMessage = async (state: Piece[]) => {
  const message: SocketProps = {
    event: "connection",
    boardState: state,
  };

  socket.send(JSON.stringify(message));
};

export const setSocket = (
  setPieces: React.Dispatch<React.SetStateAction<Piece[]>>
) => {
  socket.onopen = () => {
    const message: SocketProps = {
      event: "connection",
      boardState: cloneBoardState(),
    };
    socket.send(JSON.stringify(message));
  };
  socket.onmessage = (event) => {
    const message = JSON.parse(event.data);
    setPieces(message.boardState);
  };
};

export const getPlayers = async () => {
  const response = await fetch("http://localhost:3002/state");
  const player = await response.json();
  return player;
};

export const addNewPlayer = async (body: any) => {
  const response = await fetch("http://localhost:3002/state", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const player = await response.json();
  return player;
};

export const getTurnQueue = async () => {
  const response = await fetch("http://localhost:3002/state/queue");
  const player = await response.json();
  return player;
};
export const updateTurnQueue = async (state: boolean) => {
  const response = await fetch("http://localhost:3002/state/queue", {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(state),
  });
  const count = await response.json();
  return count;
};
