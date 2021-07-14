import { OnlineGameProps, OnlinePlayersProps } from "./redux-types";

export const SET_GAME = "SET_GAME";
export const SET_ONLINE_PLAYERS = "SET_ONLINE_PLAYERS";

export const setOnlineGame = (count: boolean): OnlineGameProps => ({
  type: SET_GAME,
  payload: count,
});

export const setOnlinePlayers = (count: boolean): OnlinePlayersProps => ({
  type: SET_ONLINE_PLAYERS,
  payload: count,
});
