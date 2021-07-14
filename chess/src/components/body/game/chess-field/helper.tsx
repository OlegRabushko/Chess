import { Piece, PieceType, TeamType } from "../../../interfaces-enums";

export const startingBoardState: Piece[] = [
  {
    image: `assets/imgs/w-king.png`,
    x: 4,
    y: 7,
    type: PieceType.KING,
    team: TeamType.OUR,
    id: 1,
  },
  {
    image: `assets/imgs/w-queen.png`,
    x: 3,
    y: 7,
    type: PieceType.QUEEN,
    team: TeamType.OUR,
    id: 2,
  },
  {
    image: `assets/imgs/w-pawn.png`,
    x: 0,
    y: 6,
    type: PieceType.PAWN,
    team: TeamType.OUR,
    id: 3,
  },
  {
    image: `assets/imgs/w-pawn.png`,
    x: 1,
    y: 6,
    type: PieceType.PAWN,
    team: TeamType.OUR,
    id: 4,
  },
  {
    image: `assets/imgs/w-pawn.png`,
    x: 2,
    y: 6,
    type: PieceType.PAWN,
    team: TeamType.OUR,
    id: 5,
  },
  {
    image: `assets/imgs/w-pawn.png`,
    x: 3,
    y: 6,
    type: PieceType.PAWN,
    team: TeamType.OUR,
    id: 6,
  },
  {
    image: `assets/imgs/w-pawn.png`,
    x: 4,
    y: 6,
    type: PieceType.PAWN,
    team: TeamType.OUR,
    id: 7,
  },
  {
    image: `assets/imgs/w-pawn.png`,
    x: 5,
    y: 6,
    type: PieceType.PAWN,
    team: TeamType.OUR,
    id: 8,
  },
  {
    image: `assets/imgs/w-pawn.png`,
    x: 6,
    y: 6,
    type: PieceType.PAWN,
    team: TeamType.OUR,
    id: 9,
  },
  {
    image: `assets/imgs/w-pawn.png`,
    x: 7,
    y: 6,
    type: PieceType.PAWN,
    team: TeamType.OUR,
    id: 10,
  },
  {
    image: "assets/imgs/w-knight.png",
    x: 1,
    y: 7,
    type: PieceType.KNIGHT,
    team: TeamType.OUR,
    id: 11,
  },
  {
    image: "assets/imgs/w-knight.png",
    x: 6,
    y: 7,
    type: PieceType.KNIGHT,
    team: TeamType.OUR,
    id: 12,
  },
  {
    image: "assets/imgs/w-rook.png",
    x: 0,
    y: 7,
    type: PieceType.ROOK,
    team: TeamType.OUR,
    id: 13,
  },
  {
    image: "assets/imgs/w-rook.png",
    x: 7,
    y: 7,
    type: PieceType.ROOK,
    team: TeamType.OUR,
    id: 14,
  },
  {
    image: "assets/imgs/w-bishop.png",
    x: 2,
    y: 7,
    type: PieceType.BISHOP,
    team: TeamType.OUR,
    cellColor: "black",
    id: 15,
  },
  {
    image: "assets/imgs/w-bishop.png",
    x: 5,
    y: 7,
    type: PieceType.BISHOP,
    team: TeamType.OUR,
    cellColor: "white",
    id: 16,
  },
  {
    image: `assets/imgs/b-king.png`,
    x: 4,
    y: 0,
    type: PieceType.KING,
    team: TeamType.OPPONENT,
    id: 17,
  },
  {
    image: `assets/imgs/b-queen.png`,
    x: 3,
    y: 0,
    type: PieceType.QUEEN,
    team: TeamType.OPPONENT,
    id: 18,
  },
  {
    image: `assets/imgs/b-pawn.png`,
    x: 0,
    y: 1,
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
    id: 19,
  },
  {
    image: `assets/imgs/b-pawn.png`,
    x: 1,
    y: 1,
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
    id: 20,
  },
  {
    image: `assets/imgs/b-pawn.png`,
    x: 2,
    y: 1,
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
    id: 21,
  },
  {
    image: `assets/imgs/b-pawn.png`,
    x: 3,
    y: 1,
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
    id: 22,
  },
  {
    image: `assets/imgs/b-pawn.png`,
    x: 4,
    y: 1,
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
    id: 23,
  },
  {
    image: `assets/imgs/b-pawn.png`,
    x: 5,
    y: 1,
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
    id: 24,
  },
  {
    image: `assets/imgs/b-pawn.png`,
    x: 6,
    y: 1,
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
    id: 25,
  },
  {
    image: `assets/imgs/b-pawn.png`,
    x: 7,
    y: 1,
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
    id: 26,
  },
  {
    image: `assets/imgs/b-knight.png`,
    x: 6,
    y: 0,
    type: PieceType.KNIGHT,
    team: TeamType.OPPONENT,
    id: 27,
  },
  {
    image: `assets/imgs/b-knight.png`,
    x: 1,
    y: 0,
    type: PieceType.KNIGHT,
    team: TeamType.OPPONENT,
    id: 28,
  },
  {
    image: `assets/imgs/b-rook.png`,
    x: 7,
    y: 0,
    type: PieceType.ROOK,
    team: TeamType.OPPONENT,
    id: 29,
  },
  {
    image: `assets/imgs/b-rook.png`,
    x: 0,
    y: 0,
    type: PieceType.ROOK,
    team: TeamType.OPPONENT,
    id: 30,
  },
  {
    image: `assets/imgs/b-bishop.png`,
    x: 2,
    y: 0,
    type: PieceType.BISHOP,
    team: TeamType.OPPONENT,
    cellColor: "white",
    id: 31,
  },
  {
    image: `assets/imgs/b-bishop.png`,
    x: 5,
    y: 0,
    type: PieceType.BISHOP,
    team: TeamType.OPPONENT,
    cellColor: "black",
    id: 32,
  },
];

export const cloneBoardState = () =>
  startingBoardState.map((el) => ({ ...el }));
