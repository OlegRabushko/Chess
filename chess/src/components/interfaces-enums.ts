export interface ModalProps {
  number: number;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setInput2: React.Dispatch<React.SetStateAction<string>>;
}

export enum TeamType {
  OPPONENT,
  OUR,
}
export enum PieceType {
  PAWN,
  BISHOP,
  KNIGHT,
  ROOK,
  QUEEN,
  KING,
}

export interface Piece {
  image: string;
  x: number;
  y: number;
  type: PieceType;
  cellColor?: string;
  team: TeamType;
  id: number;
  enPassant?: boolean;
}

export interface TileProps {
  number: number;
  image?: string;
  position: string;
  player: boolean;
}

export type DatabaseErrorEvent = Event & { target: { errorCode: string } };
