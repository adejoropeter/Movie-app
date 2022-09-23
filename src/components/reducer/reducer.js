import { item } from "../../items";
import { Types } from "./type";
export const INITIAL_STATE = {
  watch: [],
  bookmark: [],
  item,
  it: { num: 0 },
  nas: 0,
  play: true,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        watch: {
          ...state.watch,
          like: state.watch.like + 1,
          isLike: !state.watch.isLike,
        },
      };
    case "DECREMENT":
      return {
        ...state,
        watch: {
          ...state.watch,
          like: state.watch.like - 1,
          isLike: !state.watch.isLike,
        },
      };
    case "FALSE":
      return {
        ...state,
        watch: { ...state.watch, isDislike: !state.watch.isDislike },
      };

    case "TRUE":
      return {
        ...state,
        watch: {
          ...state.watch,
          like: state.watch.like + 1,
          isDislike: !state.watch.isDislike,
          isLike: !state.watch.isLike,
        },
      };
    case "SUBSCRIBE":
      return {
        ...state,
        watch: {
          ...state.watch,
          subscriber: state.watch.subscriber + 1,
          isSubscribe: !state.watch.isSubscribe,
        },
      };
    case "UNSUBSCRIBE":
      return {
        ...state,
        watch: {
          ...state.watch,
          subscriber: state.watch.subscriber - 1,
          isSubscribe: !state.watch.isSubscribe,
        },
      };
    case Types.ADD_TO_WATCH:
      return { ...state, watch: action.payload };
    case "ADD_TO_BOOKMARK":
      return { ...state, bookmark: [...state.bookmark, action.payload] };
    case "REMOVE_FROM_BOOKMARK":
      return { ...state, bookmark: action.payload };
    case "ADD_TO_WATCH":
      return { ...state, watch: action.payload };
    case "TOGGLE":
      return { ...state, item: action.payload };
    case "ADD_COMMENT":
      return { ...state, watch: [...state.watch, { comment: action.payload }] };

    default:
      return state;
  }
};

export default reducer;
