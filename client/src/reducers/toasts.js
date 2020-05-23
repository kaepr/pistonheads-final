import { ADD_TOAST, REMOVE_TOAST } from "../actions/types";

export default function toasts(state = [], action) {
  const { payload, type } = action;

  switch (type) {
    case ADD_TOAST:
      return [payload, ...state];
    case REMOVE_TOAST:
      return state.filter((toast) => toast.id !== payload);
    default:
      return state;
  }
}
