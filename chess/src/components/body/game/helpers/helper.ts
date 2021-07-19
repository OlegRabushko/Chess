import { getPlayers, getTurnQueue } from "../../../../api/server";
import { db } from "../../../../indexedDb/indexedDb";
import { SavedGame } from "../../../interfaces-enums";

export const savedGame: SavedGame = {
  gamers: [],
  time: "",
  movesCount: 0,
  winner: true,
};

export const savingGame = () => {
  let transaction = db.transaction(["player"], "readwrite");
  let inventory = transaction.objectStore("player");
  inventory.add(savedGame);
};

export const gameOver = async (
  setWin: React.Dispatch<React.SetStateAction<boolean>>,
  setStart: React.Dispatch<React.SetStateAction<boolean>>,
  boardActivator: React.RefObject<HTMLDivElement> | null,
  setTimer: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setTimeout(() => {
    savingGame();
    setTimer(true);
    setStart(false);
    setWin(true);
    boardActivator!.current!.style.pointerEvents = "none";
  }, 1000);
};

export const searchActualPlayer = async () => {
  const queue = await getTurnQueue();
  const player = await getPlayers();
  const playerName = localStorage.getItem("player");
  const actualPlayer = !queue ? 0 : 1;
  return player[actualPlayer].name === playerName;
};
