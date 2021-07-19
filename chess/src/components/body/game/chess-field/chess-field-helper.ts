import { Dispatch } from "react";
import { sendDeskInfo } from "../../../../api/webSocket";
import { setMovesOne, setMovesTwo } from "../../../../redux/actions";
import { MoveDeskProps, MovesState } from "../../../../redux/redux-types";

export const numbers: number[] = [8, 7, 6, 5, 4, 3, 2, 1];
export const letters: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"];

export const movesController = (
  moveRecord: string,
  urlEl: string,
  time: string,
  onlineGame: boolean,
  dispatch: Dispatch<MoveDeskProps>,
  player: boolean,
  checkUpdatedMoves: boolean,
  moves: MovesState
) => {
  if (onlineGame) {
    sendDeskInfo(moveRecord, time, urlEl);
  } else {
    if (player && !checkUpdatedMoves) {
      dispatch(
        setMovesOne({
          moves: [...moves.one.moves, moveRecord],
          times: [...moves.one.times, time],
          figures: [...moves.one.figures, urlEl],
        })
      );
    } else if (!player && !checkUpdatedMoves) {
      dispatch(
        setMovesTwo({
          moves: [...moves.two.moves, moveRecord],
          times: [...moves.two.times, time],
          figures: [...moves.two.figures, urlEl],
        })
      );
    }
  }
};
