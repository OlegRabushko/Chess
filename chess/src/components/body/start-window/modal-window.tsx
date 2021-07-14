import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { setOnlineGame } from "../../../redux/actions";
import s from "./start-window.module.scss";

interface ModalProps {
  setGameType: React.Dispatch<React.SetStateAction<string>>;
  gameType: string;
}

const Modal: FC<ModalProps> = ({ gameType, setGameType }) => {
  const [closeModal, setCloseModal] = useState(false);
  const dispatch = useDispatch();

  const setGame = () => {
    if (gameType !== "") {
      setCloseModal(true);
      if (gameType === "2") {
        dispatch(setOnlineGame(true));
      }
    }
  };

  return (
    <>
      <div className={!closeModal ? s.modal : s.modal__disable}>
        <div className={s.modal__inner}>
          <div className={s.top__text}>Change Game</div>
          <div className={s.block__container}>
            <div
              className={gameType !== "2" ? s.inactive__type : s.active__type}
              onClick={() => setGameType("2")}
            >
              Online
            </div>
            <div
              className={gameType !== "1" ? s.inactive__type : s.active__type}
              onClick={() => setGameType("1")}
            >
              Offline
            </div>
          </div>
          <button className={s.change__game__btn} onClick={setGame}>
            OK
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
