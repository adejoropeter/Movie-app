import { Types } from "./type";

export const watchArr = (payload) => {
  return { type: Types.ADD_TO_WATCH, payload };
};
export const ADD_TO_BOOKMARK = (payload) => {
  return { type: Types.ADD_TO_BOOKMARK, payload };
};
export const ADD = (payload) => {
  return { type: Types.add, payload };
};