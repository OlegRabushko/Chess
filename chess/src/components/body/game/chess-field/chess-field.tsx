import Tile from "./tile";
import s from "./chess-field.module.scss";
import { FC, useEffect, useRef, useState } from "react";
import Rules from "../rules/rules";
import { Piece, PieceType, TeamType } from "../../../interfaces-enums";
import {
  getPlayers,
  getTurnQueue,
  updateTurnQueue,
} from "../../../../api/server";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux";
import { sendMessage, sendQueue } from "../../../../api/webSocket";
import { gameOver } from "../helpers/helper";
import { letters, movesController, numbers } from "./chess-field-helper";

interface ChessFieldProps {
  setWin: React.Dispatch<React.SetStateAction<boolean>>;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveForBoard: React.Dispatch<
    React.SetStateAction<React.RefObject<HTMLDivElement> | null>
  >;
  setTimer: React.Dispatch<React.SetStateAction<boolean>>;
  setPieces: React.Dispatch<React.SetStateAction<Piece[]>>;
  setPlayer: React.Dispatch<React.SetStateAction<boolean>>;
  setTurnQueue: React.Dispatch<React.SetStateAction<boolean>>;
  pieces: Piece[];
  player: boolean;
  checkUpdatedMoves: boolean;
  win: boolean;
  start: boolean;
  boardActivator: React.RefObject<HTMLDivElement> | null;
  time: string;
  checkTurnQueue: boolean;
}

const ChessField: FC<ChessFieldProps> = ({
  setWin,
  setActiveForBoard,
  setTurnQueue,
  setStart,
  setPieces,
  setTimer,
  setPlayer,
  pieces,
  player,
  boardActivator,
  checkUpdatedMoves,
  win,
  start,
  time,
  checkTurnQueue,
}) => {
  const [activePiece, setActivePiece] = useState<HTMLElement | null>(null);
  const [gridX, setGridX] = useState(0);
  const [gridY, setGridY] = useState(0);
  const [piecePosition, setPiecePosition] = useState<HTMLElement | null>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const rules = new Rules();
  const board: JSX.Element[] = [];
  const coordinate = (expression: number) => Math.floor(expression / 100);
  const onlineGame = useSelector((state: RootState) => state.game.onlineGame);
  const dispatch = useDispatch();
  const moves = useSelector((state: RootState) => state.moves);
  const allFigures = document.querySelectorAll(
    ".chess-field_figure__img__2EzTg"
  );

  useEffect(() => {
    setActiveForBoard(boardRef);
  }, []);

  document.onmousemove = async () => {
    const queue = await getTurnQueue();
    const player = await getPlayers();
    const playerName = localStorage.getItem("player");
    const searchActualPlayer = !queue ? 0 : 1;
    let checker = (onlineGame ? !queue : !checkTurnQueue) ? "b" : "w";
    if (start) {
      allFigures.forEach((el) => {
        const elem = el as HTMLDivElement;
        if (player[searchActualPlayer].name !== playerName && onlineGame) {
          elem.style.pointerEvents = "none";
        } else {
          if (
            elem.style.backgroundImage.split("/")[2].split("")[0] === checker
          ) {
            elem.style.pointerEvents = "none";
          } else {
            elem.style.pointerEvents = "auto";
          }
        }
      });
    } else {
      allFigures.forEach(
        (el) => ((el as HTMLDivElement).style.pointerEvents = "none")
      );
    }
  };

  useEffect(() => {
    const moveDesk = async () => {
      let checker = 0;
      pieces.forEach((el) => {
        if (el.type === PieceType.KING) {
          checker++;
        }
      });
      if (checker < 2) {
        gameOver(setWin, setStart, boardActivator, setTimer);
      }
      if (piecePosition) {
        const coordinates = piecePosition.innerHTML.split(",");
        const x = Number(coordinates[0]);
        const y = Number(coordinates[1]);
        const idEl = Number(coordinates[2]);
        const urlEl = piecePosition.style.backgroundImage.split(`\"`)[1];
        const findEl = pieces.find(
          (el) => el.image === urlEl && el.id === idEl
        );
        if (findEl && !win) {
          const moveRecord = `${letters[x]}${numbers[y]}-${letters[findEl.x]}${
            numbers[findEl.y]
          }`;
          movesController(
            moveRecord,
            urlEl,
            time,
            onlineGame,
            dispatch,
            player,
            checkUpdatedMoves,
            moves
          );
        }
      }
    };
    moveDesk();
  }, [pieces]);

  const grabPiece = (e: React.MouseEvent) => {
    const chessboard = boardRef.current;
    const element = e.target as HTMLElement;
    setPiecePosition(element);

    if (
      element.classList.contains("chess-field_figure__img__2EzTg") &&
      chessboard
    ) {
      const gridX = coordinate(e.clientX - chessboard.offsetLeft);
      const gridY = coordinate(e.clientY - chessboard.offsetTop);

      setGridX(gridX);
      setGridY(gridY);
      setActivePiece(element);
    }
  };

  const movePiece = (e: React.MouseEvent) => {
    const chessboard = boardRef.current;

    if (activePiece && chessboard) {
      const minX = chessboard.offsetLeft - 10;
      const minY = chessboard.offsetTop + 3;
      const maxX = chessboard.offsetLeft + chessboard.offsetWidth - 65;
      const maxY = chessboard.offsetTop + chessboard.offsetHeight - 83;
      let x = e.clientX - 40;
      let y = e.clientY - 40;
      activePiece.style.position = "absolute";

      if (x < minX) {
        activePiece.style.left = `${minX}px`;
      } else if (x > maxX) {
        activePiece.style.left = `${maxX}px`;
      } else {
        activePiece.style.left = `${x}px`;
      }
      if (y < minY) {
        activePiece.style.top = `${minY}px`;
      } else if (y > maxY) {
        activePiece.style.top = `${maxY}px`;
      } else {
        activePiece.style.top = `${y}px`;
      }
    }
  };

  const setUpdatePieces = (x: number, y: number) => {
    const updatePieces = pieces.reduce((results, piece) => {
      if (piece.x === gridX && piece.y === gridY) {
        if (Math.abs(gridY - y) === 2 && piece.type === PieceType.PAWN) {
          piece.enPassant = true;
        } else {
          piece.enPassant = false;
        }
        piece.x = x;
        piece.y = y;
        results.push(piece);
      } else if (!(piece.x === x && piece.y === y)) {
        if (piece.type === PieceType.PAWN) {
          piece.enPassant = false;
        }
        results.push(piece);
      }
      return results;
    }, [] as Piece[]);
    return updatePieces;
  };

  const setUpdatePiecesForEnPassantMove = (
    x: number,
    y: number,
    direction: number
  ) => {
    const updatePieces = pieces.reduce((results, piece) => {
      if (piece.x === gridX && piece.y === gridY) {
        piece.enPassant = false;
        piece.x = x;
        piece.y = y;
        results.push(piece);
      } else if (!(piece.x === x && piece.y === y + direction)) {
        if (piece.type === PieceType.PAWN) {
          piece.enPassant = false;
        }
        results.push(piece);
      }
      return results;
    }, [] as Piece[]);
    return updatePieces;
  };

  const pawnTransformation = (y: number, currentPiece: Piece) => {
    if (currentPiece!.type === PieceType.PAWN && (y === 0 || y === 7)) {
      const team = y === 0 ? "w" : "b";
      currentPiece.type = PieceType.QUEEN;
      currentPiece.image = `assets/imgs/${team}-queen.png`;
    }
  };

  const specialForOnlineGame = async (x: number, y: number) => {
    const queue = await getTurnQueue();
    queue ? updateTurnQueue(false) : updateTurnQueue(true);
    sendQueue(checkTurnQueue);
    sendMessage(setUpdatePieces(x, y));
  };

  const specialForOfflineGame = async (x: number, y: number) => {
    setPieces(setUpdatePieces(x, y));
    checkTurnQueue ? setTurnQueue(false) : setTurnQueue(true);
    setPlayer((prev) => !prev);
  };

  const activePieceStyles = () => {
    activePiece!.style.position = "relative";
    activePiece!.style.removeProperty("top");
    activePiece!.style.removeProperty("left");
  };

  const combinedLogicForCurrentPiece = (
    x: number,
    y: number,
    direction: number,
    isEnPassantMove: boolean,
    validMode: boolean,
    currentPiece: Piece
  ) => {
    if (isEnPassantMove) {
      setPieces(setUpdatePiecesForEnPassantMove(x, y, direction));
    } else if (validMode) {
      pawnTransformation(y, currentPiece);
      if (onlineGame) {
        specialForOnlineGame(x, y);
      } else {
        specialForOfflineGame(x, y);
      }
    } else {
      activePieceStyles();
    }
  };

  const dropPiece = async (e: React.MouseEvent) => {
    const chessboard = boardRef.current;
    if (activePiece && chessboard) {
      const x = coordinate(e.clientX - chessboard.offsetLeft);
      const y = coordinate(e.clientY - chessboard.offsetTop);
      const currentPiece = pieces.find((p) => p.x === gridX && p.y === gridY);
      if (currentPiece) {
        const direction = currentPiece.team === TeamType.OUR ? 1 : -1;
        activePiece.style.zIndex = "10";
        const validMode = rules.isValidMove(
          gridX,
          gridY,
          x,
          y,
          currentPiece.type,
          currentPiece.team,
          pieces,
          currentPiece.cellColor
        );
        const isEnPassantMove = rules.isEnPassantMove(
          gridX,
          gridY,
          x,
          y,
          currentPiece.type,
          currentPiece.team,
          pieces
        );
        combinedLogicForCurrentPiece(
          x,
          y,
          direction,
          isEnPassantMove,
          validMode,
          currentPiece
        );
      }
      activePiece.style.zIndex = "1";
      setActivePiece(null);
    }
  };

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let id = undefined;
      let image = undefined;
      let number = numbers[i] + j + 1;
      pieces.forEach((p) => {
        if (p.x === j && p.y === i) {
          id = p.id;
          image = p.image;
        }
      });
      board.push(
        <Tile
          key={`${i},${j}`}
          image={image}
          number={number}
          position={`${j},${i},${id}`}
          player={player}
        />
      );
    }
  }

  return (
    <>
      <div className={s.chess__container}>
        <div className={s.chess__letters}>
          {letters.map((el, i) => (
            <div key={i} className={s.chess__letter}>
              {el}
            </div>
          ))}
        </div>
        <div className={s.chess__inner}>
          <div className={s.chess__numbers}>
            {numbers.map((el, i) => (
              <div key={i} className={s.chess__number}>
                {el}
              </div>
            ))}
          </div>
          <div
            ref={boardRef}
            onMouseMove={movePiece}
            onMouseDown={grabPiece}
            onMouseUp={dropPiece}
            className={s.chess__grid}
          >
            {board}
          </div>
          <div className={s.chess__numbers__2}>
            {numbers.map((el, i) => (
              <div key={i} className={s.chess__number__2}>
                {el}
              </div>
            ))}
          </div>
        </div>
        <div className={s.chess__letters}>
          {letters.map((el, i) => (
            <div key={i} className={s.chess__letter}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChessField;
