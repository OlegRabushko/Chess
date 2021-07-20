import { FC, useRef, useState } from "react";
import { Link } from "react-router-dom";
import s from "./start-window.module.scss";
import ChangeNameModal from "./change-name-modal";
import Modal from "./modal-window";
import { addPlayer, getPlayers } from "../../../api/server";
import Player from "./player-element";
import { useDispatch } from "react-redux";
import {
  setPlayerOne,
  setPlayerOnline,
  setPlayerTwo,
} from "../../../redux/actions";

const StartWindow: FC = () => {
  const [playerNum, setPlayer] = useState(0);
  const [modalActive, setModalActive] = useState(false);
  const [modalActiveOnline, setModalActiveOnline] = useState(true);
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInput2] = useState("");
  const [inputOnline, setInputOnline] = useState("");
  const [gameType, setGameType] = useState("");
  const playerNameInput = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const setStartState = async () => {
    dispatch(setPlayerOne(`${inputOne !== "" ? inputOne : "Player 1"}`));
    dispatch(setPlayerTwo(`${inputTwo !== "" ? inputTwo : "Player 2"}`));
    await dispatch(
      setPlayerOnline(`${inputOnline !== "" ? inputOnline : "Unknown"}`)
    );

    await addPlayer(inputOnline);
  };

  const setPlayerNameOnline = async () => {
    setInputOnline(`${playerNameInput.current?.value}`);
    playerNameInput.current!.value = "";
    setModalActiveOnline(false);
  };

  return (
    <>
      {gameType === "2" ? (
        <div className={modalActiveOnline ? s.modal : s.modal__disable}>
          <div className={s.modal__inner}>
            <div className={s.top__text_special}>Type Your Name</div>
            <input className={s.input} type="text" ref={playerNameInput} />
            <button className={s.change__btn} onClick={setPlayerNameOnline}>
              OK
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className={s.body__container}>
        {gameType === "1" ? (
          <Player
            num={1}
            name={inputOne}
            setPlayer={setPlayer}
            setModalActive={setModalActive}
          />
        ) : (
          ""
        )}
        <div className={s.btns__container}>
          <Link to="/game">
            <button className={s.start__btn} onClick={setStartState}>
              Start
            </button>
          </Link>
          <div className={s.network__info}>
            {gameType === "2" ? "Online" : "Offline"}
          </div>
          <Link to="/replays">
            <button className={s.view__btn}>View replays</button>
          </Link>
        </div>
        {gameType === "1" ? (
          <Player
            num={2}
            name={inputTwo}
            setPlayer={setPlayer}
            setModalActive={setModalActive}
          />
        ) : (
          ""
        )}
      </div>
      <Modal setGameType={setGameType} gameType={gameType} />
      <ChangeNameModal
        active={modalActive}
        setActive={setModalActive}
        number={playerNum}
        setInput={setInputOne}
        setInput2={setInput2}
      />
    </>
  );
};

export default StartWindow;
