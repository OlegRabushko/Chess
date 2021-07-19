import { combineReducers, createStore, applyMiddleware } from "redux";
import { gameReducer, moveDesksReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  game: gameReducer,
  moves: moveDesksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
