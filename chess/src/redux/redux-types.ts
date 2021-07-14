import { SET_GAME, SET_ONLINE_PLAYERS } from "./actions";

export type GameState = {
  onlineGame: boolean;
  playersReady: boolean;
};

export interface OnlineGameProps {
  type: typeof SET_GAME;
  payload: boolean;
}
export interface OnlinePlayersProps {
  type: typeof SET_ONLINE_PLAYERS;
  payload: boolean;
}
