import {
  SET_CLIENTS,
  SET_LOADING_CLIENTS,
  SET_ERROR_CLIENTS,
} from "./clientActions";

const initialState = {
  status: false,
  error: null,
  list: [],
};

export const clientReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CLIENTS:
      return {
        ...state,
        status: true,
        list: payload,
      };
    case SET_LOADING_CLIENTS:
      return {
        ...state,
        status: "loading",
        error: null,
      };
    case SET_ERROR_CLIENTS:
      return {
        ...state,
        status: false,
        error: payload,
      };
    default: {
      return state;
    }
  }
};
