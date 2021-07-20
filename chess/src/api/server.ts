import axios from "axios";
import { PlayerDTO } from "../components/interfaces-enums";

export const getPlayers = async (): Promise<PlayerDTO[]> => {
  const response = await fetch("http://localhost:3002/state");
  const player = await response.json();
  return player;
};

export const addNewPlayer = async (body: PlayerDTO) => {
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

export const deletePlayers = async () => {
  const response: Response = await fetch("http://localhost:3002/state", {
    method: "DELETE",
  });
  const player = await response.json();
  return player;
};
export const deletePlayer = async (id: number) => {
  const response: Response = await fetch(`http://localhost:3002/state/${id}`, {
    method: "DELETE",
  });
  const player = await response.json();
  return player;
};

export const getTurnQueue = async () => {
  const response = await fetch("http://localhost:3002/state/queue");
  const count = await response.json();
  return count;
};

export const updateTurnQueue = async (state: boolean) => {
  const response = await fetch("http://localhost:3002/state/queue", {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify([state]),
  });
  const count = await response.json();
  return count;
};

export const addPlayer = async () => {
  await addNewPlayer({
    name: localStorage.getItem("player") as string,
    id: Date.now(),
  });
  await axios.post("http://localhost:3002/new-player");
};
