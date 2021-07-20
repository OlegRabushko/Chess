import {
  SET_GAME,
  SET_MOVES_ONE,
  SET_MOVES_TWO,
  SET_ONLINE_PLAYERS,
  ADD_MOVE_ONE,
  ADD_MOVE_TWO,
  PlAYER_ONE,
  PlAYER_TWO,
  PlAYER_ONLINE,
} from "./actions";

export type GameState = {
  onlineGame: boolean;
  playersReady: boolean;
};
export type MoveDTO = {
  move: string;
  time: string;
  url: string;
};

export type PlayersState = {
  playerOne: string;
  playerTwo: string;
  playerOnline: string;
};

export type Move = {
  moves: string[];
  times: string[];
  figures: string[];
};
export type MovesState = {
  one: Move;
  two: Move;
};

export interface OnlineGameProps {
  type: typeof SET_GAME;
  payload: boolean;
}
export interface OnlinePlayersProps {
  type: typeof SET_ONLINE_PLAYERS;
  payload: boolean;
}
export interface PlayersProps {
  type: typeof PlAYER_ONE | typeof PlAYER_TWO | typeof PlAYER_ONLINE;
  payload: string;
}

export interface MoveDeskProps {
  type:
    | typeof SET_MOVES_ONE
    | typeof SET_MOVES_TWO
    | typeof ADD_MOVE_ONE
    | typeof ADD_MOVE_TWO;
  payload: Move | MoveDTO;
}
