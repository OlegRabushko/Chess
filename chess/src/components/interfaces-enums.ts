import { MoveDTO } from "../redux/redux-types";

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
  player?: boolean;
  size?: number;
}

export interface SocketProps {
  event: string;
  boardState: Piece[] | undefined;
  players?: number;
}

export interface SavedGame {
  gamers: string[];
  time: string;
  movesCount: number;
  winner: boolean;
}

export interface WebSocketMessage {
  event: string;
  data: boolean | MoveDTO | string;
}

export interface PlayerDTO {
  name: string;
  id: number;
}

export interface PlayerProps {
  num: number;
  name: string;
  setPlayer: React.Dispatch<React.SetStateAction<number>>;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export type DatabaseErrorEvent = Event & { target: { errorCode: string } };
