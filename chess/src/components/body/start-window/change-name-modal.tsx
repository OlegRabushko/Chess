import { FC, useRef } from "react";
import { ModalProps } from "../../interfaces-enums";
import s from "./start-window.module.scss";

const ChangeNameModal: FC<ModalProps> = ({
  active,
  setActive,
  number,
  setInput,
  setInput2,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const setName = () => {
    setActive(false);
    number === 1
      ? setInput(`${inputRef.current?.value}`)
      : setInput2(`${inputRef.current?.value}`);
    inputRef.current!.value = "";
  };

  return (
    <>
      <div className={active ? s.modal : s.modal__disable}>
        <div className={s.modal__inner}>
          <div className={s.top__text}>Change player name</div>
          <div className={s.input__plus__text}>
            <input type="text" className={s.input} ref={inputRef} />
            <div className={s.text}>Player {number}</div>
          </div>
          <button className={s.change__btn} onClick={setName}>
            Change
          </button>
        </div>
      </div>
    </>
  );
};

export default ChangeNameModal;
