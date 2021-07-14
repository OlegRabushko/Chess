import { FC, useEffect, useState } from "react";
import ChessField from "./chess-field/chess-field";
import { Link } from "react-router-dom";
import PlayerField from "./playerField";
import s from "./game.module.scss";
import { Piece } from "../../interfaces-enums";
import { cloneBoardState } from "./chess-field/helper";
import Winner from "./winner";
import { getPlayers, setSocket } from "../../../webSocket/webSocket";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux";
import Preloader from "./preloader";

export const gameOver = (
  setWin: React.Dispatch<React.SetStateAction<boolean>>,
  setStart: React.Dispatch<React.SetStateAction<boolean>>,
  boardActivator: React.RefObject<HTMLDivElement> | null,
  setTimer: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setTimeout(() => {
    setTimer(true);
    setStart(false);
    setWin(true);
    boardActivator!.current!.style.pointerEvents = "none";
  }, 1000);
};

const Game: FC = () => {
  const [pieces, setPieces] = useState<Piece[]>(cloneBoardState);
  const [win, setWin] = useState(false);
  const [loss, setLoss] = useState(false);
  const [start, setStart] = useState(false);
  const [time, setTime] = useState("59 : 59");
  const [player, setPlayer] = useState(false);
  const [checkUpdatedMoves, setUpdatedMoves] = useState(false);
  const [checkTurnQueue, setTurnQueue] = useState(false);
  const [timePlayerOne, setTimePlayerOne] = useState<string[]>([]);
  const [timePlayerTwo, setTimePlayerTwo] = useState<string[]>([]);
  const [movesPlayerOne, setMovesPlayerOne] = useState<string[]>([]);
  const [movesPlayerTwo, setMovesPlayerTwo] = useState<string[]>([]);
  const [figureUrlPlayerOne, setFigureUrlPlayerOne] = useState<string[]>([]);
  const [figureUrlPlayerTwo, setFigureUrlPlayerTwo] = useState<string[]>([]);
  const [timer, setTimer] = useState(true);
  const [namePlayerOne, setNamePlayerOne] = useState<any>("");
  const [namePlayerTwo, setNamePlayerTwo] = useState<any>("");
  const onlineGame = useSelector((state: RootState) => state.game.onlineGame);
  const dispatch = useDispatch();
  const onlinePlayers = useSelector(
    (state: RootState) => state.game.playersReady
  );

  useEffect(() => {
    setSocket(setPieces);
    setNamePlayerOne(localStorage.getItem("player-1"));
    setNamePlayerTwo(localStorage.getItem("player-2"));
  }, []);

  useEffect(() => {
    if (onlinePlayers) {
      const getOnlinePlayers = async () => {
        const players = await getPlayers();
        await setNamePlayerOne(players[0].name);
        await setNamePlayerTwo(players[1].name);
      };
      getOnlinePlayers();
    }
  }, [onlinePlayers]);

  const [boardActivator, setActiveForBoard] =
    useState<React.RefObject<HTMLDivElement> | null>(null);

  useEffect(() => {
    let minutes = Number(time.split(":").shift());
    let seconds = Number(time.split(":").pop());
    let interval: any = null;
    if (!timer) {
      interval = setInterval(() => {
        if (minutes > 0) {
          if (seconds > 0) {
            seconds--;
          } else {
            minutes--;
            seconds = 59;
          }
        } else {
          seconds = 0;
        }
        setTime(
          `${minutes > 9 ? minutes : `0${minutes}`} : ${
            seconds > 9 ? seconds : `0${seconds}`
          }`
        );
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer, time]);

  const startMatch = async () => {
    setUpdatedMoves(false);
    setStart(true);
    setTimer(false);
    setLoss(false);
    setTime("59:59");
    setTurnQueue(false);
    if (boardActivator) {
      const board = boardActivator.current;
      board!.style.pointerEvents = "auto";
    }
  };

  const refreshGame = () => {
    setPieces(cloneBoardState());
    setUpdatedMoves(true);
    setMovesPlayerOne([]);
    setMovesPlayerTwo([]);
    setTimePlayerOne([]);
    setTimePlayerTwo([]);
    setFigureUrlPlayerOne([]);
    setFigureUrlPlayerTwo([]);
    setStart(false);
    setWin(false);
  };

  const admitLoss = () => {
    setLoss(true);
    refreshGame();
  };

  return (
    <>
      {onlineGame && !onlinePlayers ? <Preloader /> : ""}
      {loss || win ? (
        <Winner
          winner={
            win
              ? checkTurnQueue
                ? namePlayerOne
                : namePlayerTwo
              : !checkTurnQueue && loss
              ? namePlayerTwo
              : namePlayerOne
          }
        />
      ) : null}
      {!start && !win ? (
        <>
          <button className={s.start__btn} onClick={startMatch}>
            Start
          </button>
          <Link to="/">
            <button className={s.lobby__btn} style={{ left: "80%" }}>
              to lobby
            </button>
          </Link>
        </>
      ) : (
        <>
          <div className={s.timer}>
            Round Time: <b>{time}</b>
          </div>
          {win ? (
            <Link to="/">
              <button className={s.lobby__btn}>to lobby</button>
            </Link>
          ) : (
            ""
          )}
          {!win ? (
            <button className={s.loss__btn} onClick={admitLoss}>
              admit loss
            </button>
          ) : (
            <button className={s.loss__btn} onClick={refreshGame}>
              reset
            </button>
          )}
        </>
      )}
      <div className={s.game__container}>
        <PlayerField
          name={namePlayerOne}
          key={1}
          id={1}
          checkWinner={checkTurnQueue && win ? true : false}
          checkLoss={checkTurnQueue && loss ? true : false}
          moves={movesPlayerOne}
          time={timePlayerOne}
          figureUrl={figureUrlPlayerOne}
          checkMove={!checkTurnQueue && start ? true : false}
        />
        <ChessField
          setWin={setWin}
          setPieces={setPieces}
          setTimePlayerOne={setTimePlayerOne}
          setTimePlayerTwo={setTimePlayerTwo}
          setMovesPlayerOne={setMovesPlayerOne}
          setMovesPlayerTwo={setMovesPlayerTwo}
          setFigureUrlPlayerOne={setFigureUrlPlayerOne}
          setFigureUrlPlayerTwo={setFigureUrlPlayerTwo}
          setActiveForBoard={setActiveForBoard}
          setStart={setStart}
          setPlayer={setPlayer}
          setTimer={setTimer}
          setTurnQueue={setTurnQueue}
          checkTurnQueue={checkTurnQueue}
          checkUpdatedMoves={checkUpdatedMoves}
          pieces={pieces}
          win={win}
          loss={loss}
          player={player}
          movesPlayerOne={movesPlayerOne}
          movesPlayerTwo={movesPlayerTwo}
          timePlayerOne={timePlayerOne}
          timePlayerTwo={timePlayerTwo}
          time={time}
          figureUrlPlayerOne={figureUrlPlayerOne}
          figureUrlPlayerTwo={figureUrlPlayerTwo}
          boardActivator={boardActivator}
          start={start}
        />
        <PlayerField
          name={namePlayerTwo}
          key={2}
          id={2}
          checkWinner={!checkTurnQueue && win ? true : false}
          checkLoss={!checkTurnQueue && loss ? true : false}
          moves={movesPlayerTwo}
          time={timePlayerTwo}
          figureUrl={figureUrlPlayerTwo}
          checkMove={checkTurnQueue && start ? true : false}
        />
      </div>
    </>
  );
};
export default Game;
