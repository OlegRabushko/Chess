import {
  DatabaseErrorEvent,
  SavedGame,
} from "./../components/interfaces-enums";

export let db: IDBDatabase;
const dbReq: IDBOpenDBRequest = window.indexedDB.open(
  "olegrabushko-JSFE2021Q1",
  1
);
dbReq.onupgradeneeded = (event) => {
  db = (event.target as IDBOpenDBRequest).result;
  db.createObjectStore("player", { autoIncrement: true });
};

dbReq.onerror = (event: Event) => {
  const { errorCode } = (event as DatabaseErrorEvent).target;
  console.log(`error${errorCode}`);
};
dbReq.onsuccess = (event) => {
  db = (event.target as IDBOpenDBRequest).result;
};

export const getSavedGameIndexedDB = async (
  setGameInfo: React.Dispatch<React.SetStateAction<SavedGame[]>>
) => {
  const tx = await db.transaction(["player"], "readwrite");
  const store = await tx.objectStore("player");
  store.getAll().onsuccess = async (event: Event): Promise<void> => {
    const data = await (event.target as IDBRequest).result;
    if (data) {
      setGameInfo(data);
    } else {
    }
  };
};
