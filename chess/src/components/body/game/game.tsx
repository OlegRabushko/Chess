import { FC, useEffect, useState } from "react";
import ChessField from "./chess-field/chess-field";
import { Link } from "react-router-dom";
import PlayerField from "./player-field/playerField";
import s from "./game.module.scss";
import { Piece } from "../../interfaces-enums";
import { cloneBoardState } from "./chess-field/chessboard-state";
import Winner from "./helpers/winner";
import { getPlayers, updateTurnQueue } from "../../../api/server";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux";
import Preloader from "./helpers/preloader";
import { setMovesOne, setMovesTwo } from "../../../redux/actions";
import { setSocket, sendLoss, sendPlayer } from "../../../api/webSocket";
import { savedGame, savingGame, searchActualPlayer } from "./helpers/helper";

const Game: FC = () => {
  const [pieces, setPieces] = useState<Piece[]>(cloneBoardState);
  const [movesCount, setMovesCount] = useState(0);
  const [waiting, setWaiting] = useState(1);
  const [win, setWin] = useState(false);
  const [loss, setLoss] = useState(false);
  const [start, setStart] = useState(false);
  const [time, setTime] = useState("00:00:00");
  const [player, setPlayer] = useState(false);
  const [checkUpdatedMoves, setUpdatedMoves] = useState(false);
  const [checkTurnQueue, setTurnQueue] = useState(false);
  const [timer, setTimer] = useState(true);
  const [namePlayerOne, setNamePlayerOne] = useState<string>();
  const [namePlayerTwo, setNamePlayerTwo] = useState<string>();
  const [actualPlayer, setActualPlayer] = useState(false);
  const [boardActivator, setActiveForBoard] =
    useState<React.RefObject<HTMLDivElement> | null>(null);
  const onlineGame = useSelector((state: RootState) => state.game.onlineGame);
  const getPlayersRed = useSelector((state: RootState) => state.player);

  const dispatch = useDispatch();
  const onlinePlayers = useSelector(
    (state: RootState) => state.game.playersReady
  );
  let waitTime = 60;
  useEffect(() => {
    setSocket(setPieces, dispatch, setTurnQueue, setLoss, refreshGame);
    setNamePlayerOne(getPlayersRed.playerOne);
    setNamePlayerTwo(getPlayersRed.playerTwo);
    if (!onlineGame) {
      savedGame.gamers = [getPlayersRed.playerOne, getPlayersRed.playerTwo];
    }
    const checkPlayers = setInterval(() => {
      if (onlineGame) {
        sendPlayer(true);
        waitTime--;
      }
      if (waitTime === 0) {
        clearInterval(checkPlayers);
        setWaiting(0);
      }
    }, 1000);
  }, []);

  useEffect(() => {
    if (onlinePlayers) {
      const getOnlinePlayers = async () => {
        const players = await getPlayers();
        await setNamePlayerOne(players[0].name);
        await setNamePlayerTwo(players[1].name);
        savedGame.gamers = [players[0].name, players[1].name];
        startMatch();
      };
      getOnlinePlayers();
    }
  }, [onlinePlayers]);

  useEffect(() => {
    if (onlinePlayers && onlineGame) {
      const asyncEffect = async () => {
        setActualPlayer(await searchActualPlayer(getPlayersRed.playerOnline));
      };
      asyncEffect();
    }
    setMovesCount((prev) => prev + 1);
    savedGame.winner = checkTurnQueue;
    savedGame.movesCount = movesCount;
    savedGame.time = time;
  }, [pieces]);

  useEffect(() => {
    let hours = Number(time.split(":")[0]);
    let minutes = Number(time.split(":")[1]);
    let seconds = Number(time.split(":")[2]);
    let interval: NodeJS.Timeout;
    if (!timer) {
      interval = setInterval(() => {
        if (hours < 3) {
          if (minutes < 59) {
            if (seconds < 59) {
              seconds++;
            } else {
              minutes++;
              seconds = 0;
            }
          } else {
            hours++;
            minutes = 0;
            seconds = 0;
          }
        } else {
          minutes = 0;
          seconds = 0;
        }
        setTime(
          `0${hours} : ${minutes > 9 ? minutes : `0${minutes}`} : ${
            seconds > 9 ? seconds : `0${seconds}`
          }`
        );
      }, 1000);
    } else {
      clearInterval(interval!);
    }
    return () => clearInterval(interval);
  }, [timer, time]);

  const startMatch = async () => {
    updateTurnQueue(false);
    setUpdatedMoves(false);
    setStart(true);
    setTimer(false);
    setLoss(false);
    setTime("00:00:00");
    setTurnQueue(false);
    if (boardActivator) {
      const board = boardActivator.current;
      board!.style.pointerEvents = "auto";
    }
  };

  const refreshGame = async () => {
    setPieces(cloneBoardState());
    setUpdatedMoves(true);
    dispatch(
      setMovesOne({
        moves: [],
        times: [],
        figures: [],
      })
    );
    dispatch(
      setMovesTwo({
        moves: [],
        times: [],
        figures: [],
      })
    );
    setStart(false);
    setWin(false);
    setMovesCount(0);
  };

  const admitLoss = () => {
    savingGame();
    setLoss(true);
    sendLoss(true);
    refreshGame();
  };

  return (
    <>
      {onlineGame && !onlinePlayers && !loss ? (
        <Preloader waitTime={waiting} />
      ) : (
        ""
      )}
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
          {!onlineGame ? (
            <button className={s.start__btn} onClick={startMatch}>
              Start
            </button>
          ) : (
            ""
          )}
          <Link to="/">
            <button className={s.lobby__btn} style={{ left: "80%" }}>
              to lobby
            </button>
          </Link>
          <Link to="/replays" onClick={refreshGame}>
            <button className={s.replays__btn}>replays</button>
          </Link>
        </>
      ) : (
        <>
          <div className={s.timer}>
            Round Time: <b>{time}</b>
          </div>
          {win ? (
            <>
              <Link to="/" onClick={refreshGame}>
                <button className={s.lobby__btn}>to lobby</button>
              </Link>
              <Link to="/replays" onClick={refreshGame}>
                <button className={s.replays__btn}>replays</button>
              </Link>
            </>
          ) : (
            ""
          )}
          {!win ? (
            onlineGame ? (
              actualPlayer ? (
                <button className={s.loss__btn} onClick={admitLoss}>
                  admit loss
                </button>
              ) : (
                ""
              )
            ) : (
              <button className={s.loss__btn} onClick={admitLoss}>
                admit loss
              </button>
            )
          ) : !onlineGame ? (
            <button className={s.loss__btn} onClick={refreshGame}>
              reset
            </button>
          ) : (
            ""
          )}
        </>
      )}
      <div className={s.game__container}>
        <PlayerField
          name={namePlayerOne as string}
          id={1}
          checkWinner={checkTurnQueue && win ? true : false}
          checkLoss={checkTurnQueue && loss ? true : false}
          checkMove={!checkTurnQueue && start ? true : false}
        />
        <ChessField
          setWin={setWin}
          setPieces={setPieces}
          setActiveForBoard={setActiveForBoard}
          setStart={setStart}
          setPlayer={setPlayer}
          setTimer={setTimer}
          setTurnQueue={setTurnQueue}
          checkTurnQueue={checkTurnQueue}
          checkUpdatedMoves={checkUpdatedMoves}
          pieces={pieces}
          win={win}
          player={player}
          time={time}
          boardActivator={boardActivator}
          start={start}
        />
        <PlayerField
          name={namePlayerTwo as string}
          id={2}
          checkWinner={!checkTurnQueue && win ? true : false}
          checkLoss={!checkTurnQueue && loss ? true : false}
          checkMove={checkTurnQueue && start ? true : false}
        />
      </div>
    </>
  );
};
export default Game;
