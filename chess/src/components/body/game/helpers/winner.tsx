import { FC } from "react";
import s from "../game.module.scss";

interface WinnerProps {
  winner: string | undefined;
}

const Winner: FC<WinnerProps> = ({ winner }) => {
  return (
    <>
      <div className={s.win__window}>{`Win ${winner}`}</div>
    </>
  );
};

export default Winner;
