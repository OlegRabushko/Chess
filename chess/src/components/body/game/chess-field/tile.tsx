import { FC } from "react";
import { TileProps } from "../../../interfaces-enums";
import s from "./chess-field.module.scss";

const Tile: FC<TileProps> = ({ number, image, position, player }) => {
  // const blackField = useRef<HTMLDivElement>(null);
  // const whiteField = useRef<HTMLDivElement>(null);
  // if (player === 1) {
  //   blackField.current?.classList.add("flip__field");
  //   whiteField.current?.classList.add("flip__field");
  // }
  if (number % 2 === 0) {
    return (
      <div className={s.black__field}>
        {image && (
          <div
            style={{
              backgroundImage: `url(${image})`,
            }}
            className={s.figure__img}
          >
            {position}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className={s.white__field}>
        {image && (
          <div
            style={{
              backgroundImage: `url(${image})`,
            }}
            className={s.figure__img}
          >
            {position}
          </div>
        )}
      </div>
    );
  }
};

export default Tile;
