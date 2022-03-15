import {
  SET_STREETS,
  SET_HOUSES,
  SET_FLATS,
  SET_LOADING,
  SET_ERROR,
} from "./addressActions";

const initialState = {
  status: false,
  list: [],
  error: null,
};

export const streetReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_STREETS:
      return {
        ...state,
        list: payload,
        status: true,
      };
    case SET_LOADING:
      return {
        ...state,
        status: "loading",
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        status: "rejected",
        error: payload,
      };
    default:
      return state;
  }
};

export const houseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOUSES:
      return {
        ...state,
        list: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        status: true,
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        status: "rejected",
        error: action.payload,
      };
    default:
      return state;
  }
};

export const flatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FLATS:
      return {
        ...state,
        list: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        status: true,
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        status: "rejected",
        error: action.payload,
      };
    default:
      return state;
  }
};
