import { OnlinePlayersProps } from "./../redux/redux-types";
import { setOnlinePlayers } from "./../redux/actions";
import { SocketProps, WebSocketMessage } from "../components/interfaces-enums";
import { addMoveOne, addMoveTwo } from "../redux/actions";
import { Piece } from "../components/interfaces-enums";
import { cloneBoardState } from "../components/body/game/chess-field/chessboard-state";
import { Dispatch } from "react";
import { MoveDeskProps } from "../redux/redux-types";
import { getPlayers, getTurnQueue } from "./server";

export const socket = new WebSocket("ws://localhost:3001");

export const sendMessage = async (state: Piece[]) => {
  const message: SocketProps = {
    event: "check-chessboard",
    boardState: state,
  };
  socket.send(JSON.stringify(message));
};

export const setSocket = (
  setPieces: React.Dispatch<React.SetStateAction<Piece[]>>,
  dispatch: Dispatch<MoveDeskProps | OnlinePlayersProps>,
  setTurnQueue: React.Dispatch<React.SetStateAction<boolean>>,
  setLoss: React.Dispatch<React.SetStateAction<boolean>>,
  refreshGame: () => void
) => {
  socket.onopen = () => {
    const boardState: SocketProps = {
      event: "check-chessboard",
      boardState: cloneBoardState(),
    };

    socket.send(JSON.stringify(boardState));
  };

  socket.onmessage = async (event) => {
    const queue = await getTurnQueue();
    const message = JSON.parse(event.data);
    if (message.event === "check-chessboard") {
      setPieces(message.boardState);
    }
    if (message.event === "queue") {
      setTurnQueue((prev: boolean) => !prev);
    }
    if (message.event === "loss") {
      setLoss(true);
      refreshGame();
    }
    if (message.event === "players") {
      const players = await getPlayers();
      if (players.length > 1) {
        dispatch(setOnlinePlayers(true));
      }
    }
    if (message.event === "move-message") {
      dispatch(queue ? addMoveOne(message.data) : addMoveTwo(message.data));
    }
  };
};

export const sendQueue = (queue: boolean) => {
  const message: WebSocketMessage = {
    event: "queue",
    data: queue,
  };
  socket.send(JSON.stringify(message));
};
export const sendLoss = (loss: boolean) => {
  const message: WebSocketMessage = {
    event: "loss",
    data: loss,
  };
  socket.send(JSON.stringify(message));
};
export const sendPlayer = (player: boolean) => {
  const message: WebSocketMessage = {
    event: "players",
    data: player,
  };
  socket.send(JSON.stringify(message));
};

export const sendDeskInfo = (move: string, time: string, figure: string) => {
  const message: WebSocketMessage = {
    event: "move-message",
    data: { move: move, time: time, url: figure },
  };
  socket.send(JSON.stringify(message));
};
