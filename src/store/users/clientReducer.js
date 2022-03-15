import {
  SET_CLIENTS,
  SET_LOADING_CLIENTS,
  SET_ERROR_CLIENTS,
  ADD_CLIENT,
  DELETE_CLIENT,
  EDIT_CLIENT,
} from "./clientActions";

const initialState = {
  list: [],
  status: false,
  error: null,
};

export const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLIENTS:
      return {
        ...state,
        status: true,
        list: action.payload,
      };
    case ADD_CLIENT:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case DELETE_CLIENT:
      return {
        ...state,
        list: state.list.filter((client) => client.bindId !== action.payload),
      };

    case EDIT_CLIENT:
      return {
        ...state,
        list: state.list.map((client) =>
          client.phone === action.payload.phone ? action.payload : client
        ),
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
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};
