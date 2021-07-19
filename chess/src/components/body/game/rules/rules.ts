import { Piece, TeamType, PieceType } from "../../../interfaces-enums";

class Rules {
  tileIsOccupiedForPawns(x: number, y: number, boardState: Piece[]): boolean {
    const piece = boardState.find((p) => {
      return p.x === x && p.y === y;
    });
    return piece ? true : false;
  }

  tileIsOccupied(
    x: number,
    y: number,
    boardState: Piece[],
    team: TeamType,
    px?: number,
    py?: number,
    type?: PieceType
  ): boolean {
    const piece = boardState.find(
      (p) => p.x === x && p.y === y && p.team === team
    );
    return piece ? true : false;
  }
  checkWin(x: number, y: number, boardState: Piece[]): boolean {
    const piece = boardState.find(
      (p) => p.x === x && p.y === y && p.type === PieceType.KING
    );
    return piece ? true : false;
  }
  tileIsOccupiedByOpponent(
    x: number,
    y: number,
    boardState: Piece[],
    team: TeamType
  ): boolean {
    const piece = boardState.find(
      (p) => p.x === x && p.y === y && p.team !== team
    );
    return piece ? true : false;
  }

  checkMoveRook(
    px: number,
    x: number,
    py: number,
    y: number,
    num: number
  ): boolean {
    return px - x === num && py - y === 0 ? true : false;
  }
  isEnPassantMove(
    px: number,
    py: number,
    x: number,
    y: number,
    type: PieceType,
    team: TeamType,
    boardState: Piece[]
  ) {
    const direction = team === TeamType.OUR ? 1 : -1;
    if (type === PieceType.PAWN) {
      if ((px - x === 1 || px - x === -1) && py - y === direction) {
        const piece = boardState.find(
          (p) => p.x === x && p.y === y + direction && p.enPassant
        );
        if (piece) {
          return true;
        }
      }
    }
    return false;
  }

  isValidMove(
    px: number,
    py: number,
    x: number,
    y: number,
    type: PieceType,
    team: TeamType,
    boardState: Piece[],
    cellColor: string | undefined
  ) {
    if (type === PieceType.BISHOP) {
      const color =
        cellColor === "white" ? (x + y) % 2 === 0 : (x + y) % 2 === 1;
      if (color && px !== x && py !== y) {
        if (!this.tileIsOccupied(x, y, boardState, team, px, py)) {
          return true;
        }
      }
    }

    if (type === PieceType.KING) {
      if (px - x === 1 || px - x === -1 || py - y === 1 || py - y === -1) {
        if (!this.tileIsOccupied(x, y, boardState, team)) {
          return true;
        }
      }
    }

    if (type === PieceType.QUEEN) {
      const move = (num: number, point?: string) => {
        if (point === "-") {
          return px - x === -num && py - y === num ? true : false;
        } else if (point === "x") {
          return px - x === num && py - y === 0 ? true : false;
        } else if (point === "y") {
          return py - y === num && px - x === 0 ? true : false;
        } else {
          return px - x === num && py - y === num ? true : false;
        }
      };
      for (let i = -7; i < 8; i++) {
        if (
          (move(i) || move(i, "-") || move(i, "x") || move(i, "y")) &&
          !this.tileIsOccupied(x, y, boardState, team)
        ) {
          return true;
        }
      }
    }

    if (type === PieceType.KNIGHT) {
      if (
        (px - x === 1 && py - y === 2) ||
        (px - x === -1 && py - y === -2) ||
        (px - x === 1 && py - y === -2) ||
        (px - x === -1 && py - y === 2) ||
        (px - x === -2 && py - y === -1) ||
        (px - x === 2 && py - y === 1) ||
        (px - x === -2 && py - y === 1) ||
        (px - x === 2 && py - y === -1)
      ) {
        if (!this.tileIsOccupied(x, y, boardState, team)) {
          return true;
        }
      }
    }

    if (type === PieceType.ROOK) {
      const move = (num: number, point: string) => {
        if (point === "x") {
          return px - x === num && py - y === 0 ? true : false;
        } else {
          return py - y === num && px - x === 0 ? true : false;
        }
      };
      for (let i = -7; i < 8; i++) {
        if (
          (move(i, "x") || move(i, "y")) &&
          !this.tileIsOccupied(x, y, boardState, team)
        ) {
          return true;
        }
      }
    }

    if (type === PieceType.PAWN) {
      const row = team === TeamType.OUR ? 6 : 1;
      const direction = team === TeamType.OUR ? 1 : -1;

      // Attack logic
      if (
        (px - x === 1 && py - y === direction) ||
        (px - x === -1 && py - y === direction)
      ) {
        if (this.tileIsOccupiedByOpponent(x, y, boardState, team)) {
          return true;
        }
      } //Movement logic
      else if (py === row) {
        if (
          px === x &&
          py - y === 1 * direction &&
          !this.tileIsOccupiedForPawns(x, y, boardState)
        ) {
          return true;
        } else if (
          px === x &&
          py - y === 2 * direction &&
          !this.tileIsOccupiedForPawns(x, y, boardState) &&
          !this.tileIsOccupiedForPawns(x, y + 1 * direction, boardState)
        ) {
          return true;
        }
      } else if (
        px === x &&
        py - y === 1 * direction &&
        !this.tileIsOccupiedForPawns(x, y, boardState)
      ) {
        return true;
      }
    }
    return false;
  }
}

export default Rules;
