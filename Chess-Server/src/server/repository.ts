interface Players {
  id: number;
  name: string;
}
const players: Players[] = [];
let turnQueue: boolean = true;

export function getCategories(): Promise<Players[]> {
  return Promise.resolve(players);
}
export function getTurnQueue(): Promise<boolean> {
  return Promise.resolve(turnQueue);
}

export function getCategoryById(id: number): Promise<Players | undefined> {
  const category = players.find((el) => el.id === id);
  return Promise.resolve(category);
}

export function createCategory(data: Players): Promise<Players> {
  const isExists = players.findIndex((el) => el.name === data.name) >= 0;
  if (!isExists) {
    const updatedState: Players = { ...data };
    players.push(updatedState);
    return Promise.resolve(updatedState);
  } else {
    return Promise.reject(new Error("Player exist!"));
  }
}
// export function deleteCategory(id: number): Promise<void> {
//   const categoryIndex = chessState.findIndex((cat) => cat.id === id);
//   if (categoryIndex < 0) return Promise.reject(new Error("Category not found"));
//   chessState.splice(categoryIndex, 1);
//   return Promise.resolve();
// }

export function updateState(data: boolean): Promise<boolean> {
  const updatedState: boolean = data;
  turnQueue = updatedState;
  return Promise.resolve(updatedState);
}
