import { USER_ID_KEY } from "./routes/routes";

export const getLocalStorageItem = (name) => JSON.parse(localStorage.getItem(name));
export const setLocalStorageItem = (name, value) => localStorage.setItem(name, JSON.stringify(value));
export const getUserIdFromStorage = () => getLocalStorageItem(USER_ID_KEY);