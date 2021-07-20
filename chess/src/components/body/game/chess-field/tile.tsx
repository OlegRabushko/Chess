import { FC } from "react";
import { TileProps } from "../../../interfaces-enums";
import s from "./chess-field.module.scss";

const Tile: FC<TileProps> = ({ number, image, position, size }) => {
  if (number % 2 === 0) {
    return (
      <div className={s.black__field}>
        {image && (
          <div
            style={{
              backgroundImage: `url(./build/${image})`,
              width: `${size}px`,
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
              width: `${size}px`,
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
