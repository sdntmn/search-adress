import {
  ADD_CLIENT,
  SET_ERROR_CLIENT,
  REMOVE_CLIENT,
  EDIT_CLIENT,
} from "./filterClientAction";

const initialState = {
  list: [],
  error: null,
};

export const addClientReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLIENT:
      return {
        ...state,
        list: action.payload,
      };

    case SET_ERROR_CLIENT:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
