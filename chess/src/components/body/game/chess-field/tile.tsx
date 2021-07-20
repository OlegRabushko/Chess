import { FC } from "react";
import { TileProps } from "../../../interfaces-enums";
import "./chess-field.scss";

const Tile: FC<TileProps> = ({ number, image, position, size }) => {
  if (number % 2 === 0) {
    return (
      <div className="black__field">
        {image && (
          <div
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + image})`,
              width: `${size}px`,
            }}
            className="figure__img"
          >
            {position}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="white__field">
        {image && (
          <div
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + image})`,
              width: `${size}px`,
            }}
            className="figure__img"
          >
            {position}
          </div>
        )}
      </div>
    );
  }
};

export default Tile;
