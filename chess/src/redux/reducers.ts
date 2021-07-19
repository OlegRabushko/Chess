import {
  OnlineGameProps,
  GameState,
  OnlinePlayersProps,
  MoveDeskProps,
  MovesState,
  MoveDTO,
  Move,
} from "./redux-types";
import {
  ADD_MOVE_ONE,
  ADD_MOVE_TWO,
  SET_GAME,
  SET_MOVES_ONE,
  SET_MOVES_TWO,
  SET_ONLINE_PLAYERS,
} from "./actions";

const initialState: GameState = {
  onlineGame: false,
  playersReady: false,
};

export function gameReducer(
  state: GameState = initialState,
  action: OnlineGameProps | OnlinePlayersProps
) {
  switch (action.type) {
    case SET_GAME:
      return { ...state, onlineGame: action.payload };
    case SET_ONLINE_PLAYERS:
      return { ...state, playersReady: action.payload };
    default:
      return state;
  }
}

const initialMovesState: MovesState = {
  one: {
    moves: [],
    times: [],
    figures: [],
  },
  two: {
    moves: [],
    times: [],
    figures: [],
  },
};

export function moveDesksReducer(
  state: MovesState = initialMovesState,
  action: MoveDeskProps
) {
  const payload = action.payload as MoveDTO;

  switch (action.type) {
    case SET_MOVES_ONE:
      return { ...state, one: action.payload as Move };
    case SET_MOVES_TWO:
      return { ...state, two: action.payload as Move };
    case ADD_MOVE_ONE:
      return {
        ...state,
        one: {
          moves: [...state.one.moves, payload.move],
          times: [...state.one.times, payload.time],
          figures: [...state.one.figures, payload.url],
        },
      };
    case ADD_MOVE_TWO:
      return {
        ...state,
        two: {
          moves: [...state.two.moves, payload.move],
          times: [...state.two.times, payload.time],
          figures: [...state.two.figures, payload.url],
        },
      };
    default:
      return state;
  }
}
