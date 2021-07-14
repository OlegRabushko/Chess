import { FC } from "react";
import s from "./header.module.scss";

const Header: FC = () => {
  return (
    <div className={s.header__container}>
      <div className={s.logo__img}></div>
      <div className={s.logo__text}></div>
    </div>
  );
};

export default Header;
