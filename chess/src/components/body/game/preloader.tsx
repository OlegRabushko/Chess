import s from "./game.module.scss";

const Preloader = () => {
  return (
    <>
      <div className={s.preloader__window}>
        <div className={s.text}>Please, expect another player...</div>
        <img className={s.preloader} src="assets/imgs/preloader.gif" alt="" />
      </div>
    </>
  );
};

export default Preloader;
