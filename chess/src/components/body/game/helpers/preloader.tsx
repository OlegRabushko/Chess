import { FC } from "react";
import s from "../game.module.scss";
import { Link } from "react-router-dom";

interface PreloaderProps {
  waitTime: number;
}

const Preloader: FC<PreloaderProps> = ({ waitTime }) => {
  return (
    <>
      <div className={s.preloader__window}>
        {waitTime !== 0 ? (
          <>
            <div className={s.text}>Please, expect another player...</div>
            <img
              className={s.preloader}
              src="assets/imgs/preloader.gif"
              alt=""
            />
          </>
        ) : (
          <>
            <div className={s.text}>Timeout expired. Try again.</div>
            <Link to="/">
              <button className={s.lobby__btn}>to lobby</button>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Preloader;
