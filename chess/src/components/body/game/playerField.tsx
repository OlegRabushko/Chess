import { FC } from "react";
import s from "./game.module.scss";

interface Player {
  checkWinner: boolean;
  checkLoss: boolean;
  moves: string[];
  time: string[];
  figureUrl: string[];
  id: number;
  name: string | null;
  checkMove: boolean;
}

const PlayerField: FC<Player> = ({
  checkWinner,
  moves,
  time,
  figureUrl,
  id,
  name,
  checkMove,
  checkLoss,
}) => {
  return (
    <>
      <div className={s.player__field}>
        {checkWinner || checkLoss ? (
          <img className={s.win__ico} src="assets/imgs/win-ico.svg" alt="" />
        ) : (
          ""
        )}

        <div className={s.player__ava}>
          {checkMove ? (
            <img
              className={s.moveHand__img}
              src="assets/imgs/move-hand.svg"
              alt=""
            />
          ) : (
            ""
          )}
        </div>
        <div className={s.player__name}>{name}</div>
        <div className={s.player__board}>
          <div className={s.part__one}>
            {figureUrl.map((el, i) => (
              <div
                key={i}
                className={s.figure__img}
                style={{
                  backgroundImage: `url(${el})`,
                }}
              ></div>
            ))}
          </div>
          <div className={s.part__two}>
            {moves.map((el, i) => (
              <div key={i} className={s.move__info}>
                {el}
              </div>
            ))}
          </div>
          <div className={s.part__three}>
            {time.map((el, i) => (
              <div key={i} className={s.move__info}>
                {el}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerField;
