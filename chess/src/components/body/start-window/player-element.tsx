import { FC } from "react";
import { PlayerProps } from "../../interfaces-enums";
import s from "./start-window.module.scss";

const Player: FC<PlayerProps> = ({ num, name, setPlayer, setModalActive }) => {
  return (
    <div className={s.player__box}>
      <div className={s.player__ava}></div>
      <div
        className={s.player__name}
        onClick={() => {
          setModalActive(true);
          setPlayer(num);
        }}
      >
        {name !== "" ? name : `Player ${num}`}
      </div>
    </div>
  );
};
export default Player;
