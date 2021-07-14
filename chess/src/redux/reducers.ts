import { OnlineGameProps, GameState, OnlinePlayersProps } from "./redux-types";
import { SET_GAME, SET_ONLINE_PLAYERS } from "./actions";

const initialState: GameState = {
  onlineGame: false,
  playersReady: false,
};

export default function gameReducer(
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
