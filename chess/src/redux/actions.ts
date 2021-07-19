import {
  OnlineGameProps,
  OnlinePlayersProps,
  MoveDeskProps,
  Move,
  MoveDTO,
} from "./redux-types";

export const SET_GAME = "SET_GAME";
export const SET_ONLINE_PLAYERS = "SET_ONLINE_PLAYERS";
export const SET_MOVES_ONE = "SET_MOVES_ONE";
export const SET_MOVES_TWO = "SET_MOVES_TWO";
export const ADD_MOVE_ONE = "ADD_MOVE_ONE";
export const ADD_MOVE_TWO = "ADD_MOVE_TWO";

export const addMoveOne = (moveData: MoveDTO): MoveDeskProps => ({
  type: ADD_MOVE_ONE,
  payload: moveData,
});
export const addMoveTwo = (moveData: MoveDTO): MoveDeskProps => ({
  type: ADD_MOVE_TWO,
  payload: moveData,
});

export const setOnlineGame = (count: boolean): OnlineGameProps => ({
  type: SET_GAME,
  payload: count,
});

export const setOnlinePlayers = (count: boolean): OnlinePlayersProps => ({
  type: SET_ONLINE_PLAYERS,
  payload: count,
});

/////
export const setMovesOne = (count: Move): MoveDeskProps => ({
  type: SET_MOVES_ONE,
  payload: count,
});
export const setMovesTwo = (count: Move): MoveDeskProps => ({
  type: SET_MOVES_TWO,
  payload: count,
});
