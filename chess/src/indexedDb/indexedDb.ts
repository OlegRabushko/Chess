import { DatabaseErrorEvent } from "./../components/interfaces-enums";

let db: IDBDatabase;
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

export const IndexedDbStore = (): IDBObjectStore => {
  const tx = db.transaction(["player"], "readwrite");
  const store = tx.objectStore("player");
  return store;
};

export const getPlayerFromIndexedDB = () => {
  const playersInfo: any = [];
  IndexedDbStore().openCursor().onsuccess = (event: Event): void => {
    const cursor = (event.target as IDBRequest).result;

    if (cursor) {
      playersInfo.push({
        gamer: [cursor.value.name, cursor.value.img || ""],
      });
      cursor.continue();
    }
  };
  return playersInfo;
};
