import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db, getSavedGameIndexedDB } from "../../../indexedDb/indexedDb";
import { SavedGame } from "../../interfaces-enums";
import s from "./replays.module.scss";

const Replays: FC = () => {
  const [gameInfo, setGameInfo] = useState<SavedGame[]>([]);

  useEffect(() => {
    const getInfoIndexedDb = setInterval(() => {
      if (db) {
        getSavedGameIndexedDB(setGameInfo);
        clearInterval(getInfoIndexedDb);
      }
    }, 1000);
  }, []);
  ///////
  return (
    <>
      <Link to="/">
        <button className={s.lobby__btn}>to lobby</button>
      </Link>
      <div className={s.repeats__container}>
        {gameInfo.map((el: SavedGame) => (
          <div className={s.repeats__block}>
            <div className={s.chess__info}>
              <div className={s.name__circle}>
                {el.gamers[0][0]}
                {el.winner ? <div className={s.win__marker}></div> : ""}
              </div>
              <div className={s.name__circle_2}>
                {el.gamers[1][0]}
                {!el.winner ? <div className={s.win__marker}></div> : ""}
              </div>
              <div className={s.moves__info}>
                Moves: <b>{el.movesCount}</b>
              </div>
              <div className={s.time__info}>
                Common Time: <b>{el.time}</b>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Replays;
