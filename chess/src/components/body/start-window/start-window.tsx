import { FC, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import s from "./start-window.module.scss";
import ChangeNameModal from "./change-name-modal";
import Modal from "./modal-window";
import axios from "axios";
import { addNewPlayer, getPlayers } from "../../../webSocket/webSocket";
import { useDispatch } from "react-redux";
import { setOnlinePlayers } from "../../../redux/actions";

const StartWindow: FC = () => {
  const [playerNum, setPlayer] = useState(0);
  const [modalActive, setModalActive] = useState(false);
  const [modalActiveOnline, setModalActiveOnline] = useState(true);
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [gameType, setGameType] = useState("");
  const playerNameInput = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    subscribe();
  }, []);

  const subscribe = async () => {
    try {
      await axios.get("http://localhost:3002/get-players");
      const players = await getPlayers();
      if (players.length > 1) {
        dispatch(setOnlinePlayers(true));
      }
      await subscribe();
    } catch (e) {
      setTimeout(() => {
        subscribe();
      }, 1000);
    }
  };

  const addPlayer = async () => {
    await addNewPlayer({
      name: localStorage.getItem("player"),
      id: Date.now(),
    });
    await axios.post("http://localhost:3002/new-player");
  };

  const setStartState = async () => {
    localStorage.setItem("player", `${input3 !== "" ? input3 : "Unknown"}`);
    localStorage.setItem("player-1", `${input !== "" ? input : "Player 1"}`);
    localStorage.setItem("player-2", `${input2 !== "" ? input2 : "Player 2"}`);
    addPlayer();
  };

  const setPlayerNameOnline = () => {
    setInput3(`${playerNameInput.current?.value}`);
    playerNameInput.current!.value = "";
    setModalActiveOnline(false);
  };

  const player = (num: number, name: string) => {
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

  return (
    <>
      <div className={s.body__container}>
        {gameType === "1" ? player(1, input) : ""}
        <div className={s.btns__container}>
          <Link to="/game">
            <button className={s.start__btn} onClick={setStartState}>
              Start
            </button>
          </Link>
          <div className={s.network__info}>
            {gameType === "2" ? "Online" : "Offline"}
          </div>
          <button className={s.view__btn}>View replays</button>
        </div>
        {gameType === "1" ? player(2, input2) : ""}
      </div>
      {gameType === "2" ? (
        <div className={modalActiveOnline ? s.modal : s.modal__disable}>
          <div className={s.modal__inner}>
            <div className={s.top__text} style={{ marginBottom: "0px" }}>
              Type Your Name
            </div>
            <input className={s.input} type="text" ref={playerNameInput} />
            <button className={s.change__btn} onClick={setPlayerNameOnline}>
              OK
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      <Modal setGameType={setGameType} gameType={gameType} />
      <ChangeNameModal
        active={modalActive}
        setActive={setModalActive}
        number={playerNum}
        setInput={setInput}
        setInput2={setInput2}
      />
    </>
  );
};

export default StartWindow;
