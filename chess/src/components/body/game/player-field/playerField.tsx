import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux";
import { getPlayers } from "../../../../api/server";
import s from "./../game.module.scss";

interface Player {
  checkWinner: boolean;
  checkLoss: boolean;
  id: number;
  name: string;
  checkMove: boolean;
}

const PlayerField: FC<Player> = ({
  checkWinner,
  id,
  name,
  checkMove,
  checkLoss,
}) => {
  const [colorOne, setColorOne] = useState("");
  const [colorTwo, setColorTwo] = useState("");

  const onlineGame = useSelector((state: RootState) => state.game.onlineGame);
  const moves = useSelector((state: RootState) =>
    id === 1 ? state.moves.one : state.moves.two
  );

  useEffect(() => {
    const getColor = async () => {
      if (onlineGame) {
        const players = await getPlayers();
        if (name === players[0].name) {
          setColorOne("white");
          setColorTwo("black");
        } else {
          setColorOne("black");
          setColorTwo("white");
        }
      } else {
        if (name === localStorage.getItem("player-1")) {
          setColorOne("white");
          setColorTwo("black");
        } else {
          setColorOne("black");
          setColorTwo("white");
        }
      }
    };
    getColor();
  }, []);

  return (
    <>
      <div className={s.player__field}>
        {checkWinner || checkLoss ? (
          <img className={s.win__ico} src="assets/imgs/win-ico.svg" alt="" />
        ) : (
          ""
        )}

        <div
          className={s.player__ava}
          style={{ background: `${id === 1 ? colorTwo : colorOne}` }}
        >
          {name?.split("")[0]}
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
            {moves.figures
              .filter((el, i) => (onlineGame ? i % 2 === id - 1 : el))
              .map((el, i) => (
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
            {moves.moves
              .filter((el, i) => (onlineGame ? i % 2 === id - 1 : el))
              .map((el, i) => (
                <div key={i} className={s.move__info}>
                  {el}
                </div>
              ))}
          </div>
          <div className={s.part__three}>
            {moves.times
              .filter((el, i) => (onlineGame ? i % 2 === id - 1 : el))
              .map((el, i) => (
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
